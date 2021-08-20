import styled from "styled-components";
import { transparentize } from 'polished';
import { FOOTER_HEIGHT } from "../_constants";
import Logo from "./Logo";

export default function Footer() {
  return <Wrapper>
    <Container>
      <Logo />
      <span>créditos</span>
    </Container>
  </Wrapper>
}

const Wrapper = styled.footer`
  background-color: ${p => p.theme.activeElementBackground};
  color: ${p => p.theme.activeElementForeground};

  width: 100%;
  height: ${FOOTER_HEIGHT}px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  max-width: 346px;
  height: 100%;
  margin: auto; 
`;
