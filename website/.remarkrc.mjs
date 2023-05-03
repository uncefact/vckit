import packageJson from "./package.json" assert { type: "json" };

export default {
  plugins: [
    [
      {
        skipUrlPatterns: [
          // False positive, flagged as a bot and rate limited
          "www.apkfiles.com",
          // TODO: replace the 2048 example repository with another suitable project
          "github.com/JoelMarcey",
        ],
        baseUrl: "https://uncefact.github.io/vckit-docs",
        headers: {
          "user-agent": `${packageJson.name}/${packageJson.version}`,
        },
      },
    ],
  ],
};
