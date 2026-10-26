import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "jsx-a11y/alt-text": "off",
      // React Compiler-oriented checks added in eslint-plugin-react-hooks v7.
      // The project doesn't use the compiler, so surface them as warnings
      // instead of failing lint; rules-of-hooks stays an error.
      "react-hooks/purity": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/immutability": "warn",
      "react-hooks/static-components": "warn",
      "react-hooks/preserve-manual-memoization": "warn",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "backup/**", "next-env.d.ts"]),
]);
