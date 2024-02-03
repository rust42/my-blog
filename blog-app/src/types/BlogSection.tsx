interface ContentDescription {
    title?: string
    description: string
}

interface ContentCode {
    code: string,
    caption?: string,
    lang?: string
}

interface ContentImage {
    image: string,
    caption?: string
    modalTitle?: string
}

interface BlogSection {
    title: string
    contents:  ({ id: string } & (ContentDescription | ContentCode | ContentImage))[]
}

const isDescription = (content: any): content is ContentDescription => {
    return 'description' in content;
}

const isImage = (content: any): content is ContentImage => {
    return 'image' in content;
}

const isCode = (content: any): content is ContentCode => {
    return 'code' in content;
}

export default BlogSection;
export { isCode, isDescription, isImage };
export type { ContentCode, ContentDescription, ContentImage };

