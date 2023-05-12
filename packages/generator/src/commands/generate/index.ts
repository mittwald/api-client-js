import { Args, Command, Flags, ux } from "@oclif/core";
import { UniversalContentLoader } from "../../lib/UniversalContentLoader.js";
import { OpenApiSpec } from "../../openapi/OpenApiSpec.js";
import { TransformedOpenApiSpec } from "../../transformation/TransformedOpenApiSpec.js";
import { CodeGenerationModel } from "../../generation/model/CodeGenerationModel.js";
import jetpack from "fs-jetpack";
import * as path from "path";
import { prepareTypeScriptOutput } from "../../generation/prepareTypeScriptOutput.js";

export default class Generate extends Command {
  static description = "Generate code from the provided OpenAPI spec.";

  static flags = {
    skipValidation: Flags.boolean({
      required: false,
      default: false,
      description: "Skip validation of input OpenAPI spec",
    }),
    name: Flags.string({
      required: false,
      default: "Api",
    }),
    optionalHeader: Flags.string({
      required: false,
      multiple: true,
      description: "Makes the given header optional in generated types",
      default: [],
    }),
  };

  static args = {
    input: Args.directory({
      required: true,
    }),
    output: Args.directory({
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Generate);

    const loader = new UniversalContentLoader(args.input);

    ux.action.start("Loading OpenAPI spec");
    const openApiDoc = await loader.load();
    ux.action.stop();

    ux.action.start("Parsing OpenAPI spec");
    const spec = await OpenApiSpec.parse(openApiDoc, {
      skipValidation: flags.skipValidation,
    });
    ux.action.stop();

    ux.action.start("Building transformation model");
    const transformed = await TransformedOpenApiSpec.transform(spec);
    const model = CodeGenerationModel.fromDoc(flags.name, transformed.document);
    ux.action.stop();

    ux.action.start("Generating descriptors");
    const descriptorsFileContent = model.paths.compileDescriptors();
    await jetpack.writeAsync(
      path.join(args.output, "descriptors.ts"),
      prepareTypeScriptOutput(descriptorsFileContent),
    );
    ux.action.stop();

    ux.action.start("Generating types");
    const typesFileContent = await model.compileTypes({
      optionalHeaders: flags.optionalHeader,
    });
    await jetpack.writeAsync(
      path.join(args.output, "types.d.ts"),
      prepareTypeScriptOutput(typesFileContent),
    );
    ux.action.stop();

    ux.action.start("Generating client");
    const clientFileContent = model.paths.compileClient();
    await jetpack.writeAsync(
      path.join(args.output, "client.ts"),
      prepareTypeScriptOutput(clientFileContent),
    );
    ux.action.stop();
  }
}
