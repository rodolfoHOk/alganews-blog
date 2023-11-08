import ReactMarkdown, { Components } from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const components: Components = {
  code(props) {
    const { children, className, node, ...rest } = props;
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      // @ts-ignore
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        language={match[1]}
        style={okaidia}
      />
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  },
};

interface MarkdownProps {
  children: string;
}

export default function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown
      className={"MarkdownRenderer"}
      remarkPlugins={[gfm]}
      components={components}
    >
      {props.children}
    </ReactMarkdown>
  );
}
