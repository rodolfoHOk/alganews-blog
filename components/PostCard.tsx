import Image from "next/image";
import { transparentize } from "polished";
import { Post } from "rodolfohiok-sdk";
import styled from "styled-components";
import Avatar from "./Avatar";

interface PostCardProps {
  post: Post.Summary;
}

export default function PostCard(props: PostCardProps) {
  const { post } = props;
  return (
    <Wrapper>
      <Thumbnail bg={post.imageUrls.small}/>
      <Info>
        <Editor>
          <EditorImage src={post.editor.avatarUrls.small} width={64} height={64}/>
        </Editor>
        <PublishDate>
          {post.createdAt}
        </PublishDate>
        <Title>
          {post.title}
        </Title>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.activeElementBackground};
  color: ${p => p.theme.activeElementForeground};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: 0 3px 6px ${p => transparentize(0.9, p.theme.activeElementForeground)};

  position: relative;
  min-height: 256px;
`;

const Thumbnail = styled.div<{ bg: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;

  background-image: url(${p => p.bg});
  background-position: center;
  background-size: cover;

  border-top-left-radius: ${p => p.theme.borderRadius};
  border-top-right-radius: ${p => p.theme.borderRadius};
`;

const Info = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  margin-top: -32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Editor = styled.div`
  position: relative;
  z-index: 2;
  width: 64px;
  height: 64px;
  
  border-radius: 32px;
  box-shadow: 0 0 0 4px ${p => p.theme.activeElementBackground};
`;

const EditorImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

const PublishDate = styled.p`
  color: ${p => transparentize(0.5, p.theme.activeElementForeground)};
  font-size: 12px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;
