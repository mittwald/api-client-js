import { Args, Command } from "@oclif/core";
import { UniversalContentLoader } from "../../lib/UniversalContentLoader.js";
import { OpenApiSpec } from "../../openapi/OpenApiSpec.js";

export default class Validate extends Command {
  static description = "Validate the provided OpenAPI spec.";

  static args = {
    input: Args.string({
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(Validate);

    const loader = new UniversalContentLoader(args.input);
    const openApiDoc = await loader.load();
    await OpenApiSpec.parse(openApiDoc, {
      skipValidation: false,
    });

    this.log("OK");
  }
}
