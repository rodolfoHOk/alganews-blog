import styled from "styled-components"

export default function Header() {
  return <>
    <Title>oi eu sou um Header</Title>
  </>
}

const Title = styled.h1`
  color: ${p => p.theme.primaryBackground};
`;
