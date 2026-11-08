import js from "@eslint/js";
import globals from "globals";
// noinspection SpellCheckingInspection
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig, includeIgnoreFile } from "eslint/config";
import { fileURLToPath } from "node:url";
import html from "@html-eslint/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath, { gitignoreResolution: true }),
  {
    // your overrides
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    extends: [tseslint.configs.recommended],
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
  {
    files: ["**/*.html"],
    plugins: {
      html,
    },
    // When using the recommended rules (or "html/all" for all rules)
    extends: ["html/recommended"],
    language: "html/html",
    rules: {
      "html/no-duplicate-class": "error",
    },
  },
  {
    files: ["**/*.js", "**/*.ts"],
    plugins: {
      html,
    },
    rules: {
      "html/require-img-alt": "error",
    },
  },
  eslintConfigPrettier,
]);
