import { transparentize } from "polished";
import styled from "styled-components";
import { FOOTER_HEIGHT, MOBILE_FOOTER_HEIGHT } from "../_constants";
import Logo from "./Logo";

export default function Footer() {
  return <Wrapper>
    <Container>
      <Logo />
      <Credits>todos o direitos reservados</Credits>
    </Container>
  </Wrapper>
}

const Wrapper = styled.footer`
  background-color: ${p => p.theme.activeElementBackground};
  color: ${p => p.theme.activeElementForeground};

  width: 100%;
  height: ${FOOTER_HEIGHT}px;

  @media screen and (max-width: 767px) {
    height: ${MOBILE_FOOTER_HEIGHT}px;
  }
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

const Credits = styled.p`
  font-size: 18px;
  color: ${p => transparentize(0.6, p.theme.activeElementForeground)};
`;
