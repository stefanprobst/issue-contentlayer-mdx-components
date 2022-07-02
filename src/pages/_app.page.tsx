import '../styles/index.css'

import type { AppProps } from "next/app";

export default function App(props: AppProps): JSX.Element {
	const { Component, pageProps } = props;

	return <Component {...pageProps} />;
}
