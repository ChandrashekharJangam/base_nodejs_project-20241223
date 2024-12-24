import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,cjs,mjs}"],
    ignores: ["node_modules", "build", "*.css"],
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
];