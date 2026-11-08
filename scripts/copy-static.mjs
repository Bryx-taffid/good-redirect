import {cpSync, mkdirSync, rmSync, existsSync} from 'node:fs';

// if --clean is passed as command-line parameter
const clean = process.argv.includes('--clean');

// check if /dist exists - if not, create the directory
if (!existsSync('dist'))
    mkdirSync('dist');

if (clean) {
    // clean /dist
    rmSync('dist', {recursive: true});
} else {
    // copy TypeScript files from /src to /dist
    cpSync('src', 'dist', {recursive: true, force: true});
}