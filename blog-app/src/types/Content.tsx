import LoadingStatus from "./LoadingStatus";

interface Content<T> {
    value?: T
    status: LoadingStatus
    error?: string
}

export default Content;