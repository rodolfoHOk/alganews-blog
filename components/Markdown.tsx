import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';


interface MarkdownProps {
  children: string;
}

export default function Markdown(props: MarkdownProps) {
  const [body, setBody] = useState('');
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/danielbonifacio/367b357eac56e0e6f91a689d852b8287/raw/ce3fab591901e2c9ff35d0a59d864e0179ab297e/react-moderno.md')
    .then(res => res.text())
    .then(text => setBody(text));
  },[]);

  return <ReactMarkdown className="MarkdownRenderer">
    { body }
    {/* { props.children } */}
  </ReactMarkdown>
}
