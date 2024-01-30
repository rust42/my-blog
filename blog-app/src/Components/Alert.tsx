import React, {useState, useEffect, ReactNode, memo} from 'react'

type Props = {
    variant: string,
    children?: ReactNode,
    show: boolean
}
const Message = (props: Props) => {
    const { variant, show, children } = props
    const [shouldShow, setShouldShow] = useState(show);
    useEffect(() => {
        if (show) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });

            setShouldShow(true);
            const timer = setTimeout(() => {
                setShouldShow(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [show]);

    if (!shouldShow) return null;

    return (
        <div className={`alert alert-${variant}`} style={{textAlign: "center"}}>
            {children}
        </div>
    )
}

export default Message;
