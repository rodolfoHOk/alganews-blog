import { Post } from "rodolfohiok-sdk";
import styled from "styled-components"
import Avatar from "./Avatar";


interface FeaturedPostProps {
  postSummary: Post.Summary;
}

export default function FeaturedPost(props: FeaturedPostProps) {
  return <Wrapper>
    <Tags>
      {props.postSummary.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </Tags>
    <Editor>
      <Avatar src={props.postSummary.imageUrls.small}/>
      <EditorDescription>
        <EditorName>por {props.postSummary.editor.name}</EditorName>
        <PostDate>{props.postSummary.createdAt}</PostDate>
      </EditorDescription>
    </Editor>
    <Title>{props.postSummary.title}</Title>
  </Wrapper>
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.primaryBackground};
  color: ${p => p.theme.primaryForeground};
  border-radius: ${p => p.theme.borderRadius};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  width: 100%;
  min-height: 256px;
  padding: 32px;
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
`;

const Tag = styled.li`
  background-color: ${p => p.theme.activeElementBackground};
  color: ${p => p.theme.activeElementForeground};
  border-radius: ${p => p.theme.borderRadius};

  padding: 4px 12px;
  text-transform: lowercase;
  cursor: default;
`;

const Editor = styled.div`
  display: flex;
  gap: 16px;
`;

const EditorDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const EditorName = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const PostDate = styled.p`
  font-size: 12px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;
