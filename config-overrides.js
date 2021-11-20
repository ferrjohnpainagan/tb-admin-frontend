const {
  rewireWorkboxInject,
  defaultInjectConfig,
} = require("react-app-rewire-workbox");
const path = require("path");

module.exports = function override(config, env) {
  const swSrc = path.join(__dirname, "src", "bakasph-sw.js");
  if (env === "production") {
    console.log("Production build - Adding Workbox for PWAs");
    // Extend the default injection config with required swSrc
    const workboxConfig = {
      ...defaultInjectConfig,
      swSrc,
    };

    config = rewireWorkboxInject(workboxConfig)(config, env);
  }
  return config;
};
