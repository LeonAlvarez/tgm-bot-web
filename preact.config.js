const preactCliPostCSS = require("preact-cli-postcss");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const preactCliSvgLoader = require("preact-cli-svg-loader");
import asyncPlugin from "preact-cli-plugin-async";
import CopyWebpackPlugin from "copy-webpack-plugin";
const glob = require("glob");
const path = require("path");

// Custom PurgeCSS extractor for special characters in Tailwind's classnames
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

// PurgeCSS webpack plugin
const purgeCssPlugin = new PurgecssPlugin({
  paths: glob.sync("./src/components/**/*.js"),
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ["js", "jsx"]
    }
  ],
  whitelistPatterns: [/chat/, /cc-box/, /body/]
});

export default function(config, env, helpers) {
  // Use postcss.config.js instead of default postCSS config
  preactCliPostCSS(config, helpers);
  preactCliSvgLoader(config, helpers);
  asyncPlugin(config);
  // Run styles through purgeCSS for production only
  if (env.production) {
    config.plugins.push(purgeCssPlugin);
    config.plugins.push(
      new CopyWebpackPlugin([
        { from: `${__dirname}/src/json`, to: "json" },
        { from: `${__dirname}/src/img`, to: "img" },
        { from: `${__dirname}/src/styles`, to: "styles" }
      ])
    );
    config.output.publicPath = "/tgm-bot-web/";
  }
}
