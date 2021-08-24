import Image from "next/image";
import { transparentize } from "polished";
import { User } from "rodolfohiok-sdk";
import styled from "styled-components";

interface PostHeaderProps {
  thumbnail: string;
  editor: User.EditorSummary;
  createAt: string;
  title: string;
}

export default function PostHeader(props: PostHeaderProps) {
  return <Wrapper>
    <Thumbnail bg={props.thumbnail}/>
    <Editor>
      <EditorImage src={props.editor.avatarUrls.small} width={64} height={64}/>
    </Editor>
    <PublishDate>
      {props.createAt}
    </PublishDate>
    <Title>
      {props.title}
    </Title>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 428px;
`;

const Thumbnail = styled.div<{ bg: string}>`
  width: 100%;
  height: 256px;

  background-image: url(${p => p.bg});
  background-position: center;
  background-size: cover;

  border-top-left-radius: ${p => p.theme.borderRadius};
  border-top-right-radius: ${p => p.theme.borderRadius};
`;

const Editor = styled.div`
  width: 64px;
  height: 64px;
  margin-top: -48px;

  border-radius: 32px;
  box-shadow: 0 0 0 4px ${p => p.theme.primaryForeground};
`;

const EditorImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

const PublishDate = styled.p`
  margin-top: 8px;
  font-size: 12px;
  color: ${p => transparentize(0.5, p.theme.pageForeground)};
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;
