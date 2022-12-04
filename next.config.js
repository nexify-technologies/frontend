const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      trailingSlash: true,
      env: {
        mongodb_username: "Partha",
        mongodb_password: "afezuh",
        mongodb_clustername: "cluster0",
        mongodb_database: "MySiteDev",
      },
    };
  }

  return {
    reactStrictMode: true,
    trailingSlash: true,
    env: {
      mongodb_username: "Partha",
      mongodb_password: "afezuh",
      mongodb_clustername: "cluster0",
      mongodb_database: "MySite",
    },
  };
};
