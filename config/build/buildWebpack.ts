import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/type";
import { buildPlugins } from "./buildPlugins";
export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths, port } = options;
  const isDev = mode === "development";

  return {
    mode: mode ?? "development",
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[main].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "eval-cheap-source-map" : "sourse-map",
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
