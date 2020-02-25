import { Spec } from "../Spec";
import { join } from "path";

const spec = Spec.fromYamlFile(join(process.cwd(), "resources/examples/complex2.yaml"));
const rootNamespaceName = "NewApi";

spec.toNamspaceTemplate(rootNamespaceName, join(process.cwd(), "resources/build/types.ts"));
spec.toDescriptorTemplate(rootNamespaceName, join(process.cwd(), "resources/build/descriptor.ts"));
