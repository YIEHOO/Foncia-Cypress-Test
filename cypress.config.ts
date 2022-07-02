import { defineConfig } from "cypress";
import * as webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

// This config to set cucumber as a preprocessor
async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  // This parameter to specify the project to report to on Cypress Dashboard
  projectId:"6jwnmi",
  // This parameter to override the timeout time of waiting for elements
  defaultCommandTimeout:10000,
  // This parameter to set the screen size of the browser
  viewportWidth:1280,
  viewportHeight:800,
  // This parameter to set mochawesome as default reported
  reporter: "mochawesome",
  reporterOptions:{
    "charts":true,
    "overwrite":false,
    "html":false,
    "json":true,
    "reportDir":"cypress/reports"
  },
  e2e: {
    // This parameter allows navigating between different domains
    chromeWebSecurity: false,
    // This parameter specifies .feature files as files for test execution
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
