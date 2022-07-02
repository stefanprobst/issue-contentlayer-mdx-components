import { allPosts } from "contentlayer/generated";
import type { Post } from "contentlayer/generated";
import type { GetStaticPropsResult } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ComponentPropsWithoutRef } from "react";

type HomePageProps = {
	post: Post;
};

export function getStaticProps(): GetStaticPropsResult<HomePageProps> {
	const [post] = allPosts;
	return { props: { post } };
}

function PinkLink(props: ComponentPropsWithoutRef<"a">) {
	return <a {...props} style={{ color: "deeppink" }} />;
}

function Button(props: ComponentPropsWithoutRef<"button">) {
	function onClick() {
		alert("Hi!");
	}

	return <button {...props} onClick={onClick} />;
}

const components = {
	a: PinkLink,
	Button,
};

export default function HomePage(props: HomePageProps): JSX.Element {
	const { post } = props;

	const Content = useMDXComponent(post.body.code);

	return (
		<main>
			<Content components={components} />
		</main>
	);
}
