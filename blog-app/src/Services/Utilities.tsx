const imageURL = (imageIdentifier?: string) => {
    return `https://blog-json-objects.s3.amazonaws.com/content/${imageIdentifier}`
}

export { imageURL };