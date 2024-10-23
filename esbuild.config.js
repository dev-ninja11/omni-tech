import { build } from "esbuild";
import { copy } from "esbuild-plugin-copy";

(async () => {
  build({
    entryPoints: ["./src/background.ts", "./src/content-script.ts"],
    bundle: true,
    outdir: "build",
    minify: true,
    write: true,
    plugins: [
      copy({
        resolveFrom: "cwd",
        assets: [
          {
            from: ["./src/assets/images/**/*"],
            to: ["build/images/"],
          },
          {
            from: ["./manifest.json"],
            to: ["build/manifest.json"],
          },
        ],
      }),
    ],
  });
})();
