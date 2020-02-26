/* AUTO-GENERATED CODE BY "Project Base Generator" - DO NOT EDIT! */
import debugFn from "debug";
import readPkg from "read-pkg-up";

const packageData = readPkg.sync({ cwd: __dirname });
const packageName = packageData === undefined ? "@mittwald/unknown" : packageData.packageJson.name;

export const debug = debugFn(packageName);
export default debug;
