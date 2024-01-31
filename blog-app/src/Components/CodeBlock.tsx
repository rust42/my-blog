import hljs from "highlightjs";
import { useRef, useEffect } from "react";
import "highlightjs/styles/atom-one-dark.css";

type Props = { lang?: string , code: string}

const CodeBlock = (props: Props) => {
 const {lang, code} = props
  const codeBlockRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeBlockRef.current) {
        hljs.highlightBlock(codeBlockRef.current);
    }
  }, [codeBlockRef]);
  return (
    <pre>
      <code ref={codeBlockRef} className={`language-${lang ? lang : 'js'}`}>
        {code}
      </code>
    </pre>
  );
};
export default CodeBlock;
