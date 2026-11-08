import { cpSync, mkdirSync, rmSync, existsSync } from "node:fs";

// if --clean is passed as command-line parameter
const clean = process.argv.includes("--clean");

if (clean) {
  // clean /dist
  if (existsSync("dist")) {
    rmSync("dist", { recursive: true });
  }
  mkdirSync("dist");
} else {
  // copy TypeScript files from /src to /dist
  cpSync("static", "dist", { recursive: true, force: true });
}
