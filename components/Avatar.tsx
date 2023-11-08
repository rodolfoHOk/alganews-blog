import styled from "styled-components";
import Image from "next/image";
import avatar from "../public/avatar.jpeg";
import { useState } from "react";

interface AvatarProps {
  src: string;
}

export default function Avatar(props: AvatarProps) {
  const [src, setSrc] = useState(props.src);

  return (
    <Wrapper>
      <StyledAvatar
        width={40}
        height={40}
        src={src}
        onError={(e) => {
          setSrc(avatar.src);
        }}
        alt="avatar"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 0 0 4px ${(p) => p.theme.primaryForeground};
  overflow: hidden;
`;

const StyledAvatar = styled(Image)`
  object-fit: cover;
`;
