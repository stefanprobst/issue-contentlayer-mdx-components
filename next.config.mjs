/** @typedef {import('next').NextConfig} NextConfig */
/** @typedef {import('webpack').Configuration} WebpackConfig */

import { withContentlayer } from "next-contentlayer";

/** @type {NextConfig} */
const config = {
	pageExtensions: ["page.tsx", "api.ts"],
	reactStrictMode: true,
	webpack(/** @type {WebpackConfig} */ config) {
		config.infrastructureLogging = { level: "error" };
		return config;
	},
};

/** @type {Array<(config: NextConfig) => NextConfig>} */
const plugins = [withContentlayer];

export default plugins.reduce((config, plugin) => {
	return plugin(config);
}, config);
