import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/type";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    //если раздать статику через nginx то нужно делать проксирование на index.html
    historyApiFallback: true,
    hot: true,
  };
}
