import * as dotenv from "dotenv";
import { writeFileSync, mkdirSync } from "fs";

dotenv.config();
const targetPath = `./src/environments/environment.ts`;

const envFileContent = `
  export const environment = {
  mapbox_key: "${process.env["MAPBOX_KEY"]}",
  angular_key: "string_value",
};

`;

mkdirSync("./src/environments", { recursive: true });
writeFileSync(targetPath, envFileContent);
