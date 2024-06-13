import * as fs from "fs";
import * as path from "path";

const loadFiles = (directory: string) => {
  const filePath = path.resolve(__dirname, directory);
  fs.readdirSync(filePath).forEach((file) => {
    if (file.endsWith(".ts") || file.endsWith(".js")) {
      require(path.join(filePath, file));
    }
  });
};

export default loadFiles;
