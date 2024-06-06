module.exports = {
  extends: ["config:recommended"],
  platform: "github",
  postUpgradeTasks: {
    commands: [
      "./gradlew --quiet :dependencies --write-locks"
    ],
  },
};
