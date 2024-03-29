import { Args, Command, Flags, ux } from "@oclif/core";
import { UniversalContentLoader } from "../../loading/UniversalContentLoader.js";
import { OpenApiSpec } from "../../openapi/OpenApiSpec.js";
import { CodeGenerationModel } from "../../generation/model/CodeGenerationModel.js";
import * as path from "path";
import { prepareTypeScriptOutput } from "../../generation/prepareTypeScriptOutput.js";
import { UniversalFileLoader } from "../../loading/UniversalFileLoader.js";
import { writeIfChangedAsync } from "../../lib/writeIfChangedAsync.js";

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

    const loader = new UniversalContentLoader(
      new UniversalFileLoader(args.input),
    );

    ux.action.start("Loading OpenAPI spec");
    const openApiDoc = await loader.load();
    ux.action.stop();

    ux.action.start("Parsing OpenAPI spec");
    const spec = await OpenApiSpec.parse(openApiDoc, {
      skipValidation: flags.skipValidation,
    });
    ux.action.stop();

    ux.action.start("Building transformation model");
    const model = CodeGenerationModel.fromDoc(flags.name, spec.document);
    ux.action.stop();

    ux.action.start("Generating descriptors");
    const descriptorsFileContent = model.paths.compileDescriptors();
    await writeIfChangedAsync(
      path.join(args.output, "descriptors.ts"),
      await prepareTypeScriptOutput(descriptorsFileContent),
    );
    ux.action.stop();

    ux.action.start("Generating types");
    const typesFileContent = await model.compileTypes({
      rootNamespace: flags.name,
      optionalHeaders: flags.optionalHeader,
    });
    await writeIfChangedAsync(
      path.join(args.output, "types.ts"),
      await prepareTypeScriptOutput(typesFileContent),
    );
    ux.action.stop();

    ux.action.start("Generating client");
    const clientFileContent = model.paths.compileClient();
    await writeIfChangedAsync(
      path.join(args.output, "client.ts"),
      await prepareTypeScriptOutput(clientFileContent),
    );
    ux.action.stop();

    ux.action.start("Generating React client");
    const reactClientFileContent = model.paths.compileReactClient();
    await writeIfChangedAsync(
      path.join(args.output, "client-react.ts"),
      await prepareTypeScriptOutput(reactClientFileContent),
    );
    ux.action.stop();
  }
}
