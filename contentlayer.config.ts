import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => {
	return {
		name: "Post",
		filePathPattern: "posts/**/*.mdx",
		contentType: "mdx",
		fields: {
			title: { type: "string", required: true },
		},
	};
});

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Post],
});
