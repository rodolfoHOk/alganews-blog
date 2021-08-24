// import { useEffect, useState } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const components: Components={
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={okaidia}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
};


interface MarkdownProps {
  children: string;
}

export default function Markdown(props: MarkdownProps) {
  // for testing only
  // const [body, setBody] = useState('');
  // useEffect(() => {
  //   fetch('https://gist.githubusercontent.com/danielbonifacio/367b357eac56e0e6f91a689d852b8287/raw/ce3fab591901e2c9ff35d0a59d864e0179ab297e/react-moderno.md')
  //   .then(res => res.text())
  //   .then(text => setBody(text));
  // },[]);

  return <ReactMarkdown 
    className="MarkdownRenderer" 
    plugins={[gfm]} 
    components={components}
  >
    { props.children }
  </ReactMarkdown>
}
