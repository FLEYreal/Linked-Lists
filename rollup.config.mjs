// ./rollup.config.js

// Libs
import typescript from "@rollup/plugin-typescript";

const config = [
  {
    input: "lib/index.js",
    output: {
      file: "index.cjs",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [typescript()],
  }
];

export default config;
