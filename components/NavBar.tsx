import styled from "styled-components";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Wrapper>
        <li>
          <Link legacyBehavior href="/">
            <a>home</a>
          </Link>
        </li>
      </Wrapper>
    </nav>
  );
}

const Wrapper = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;

  a {
    color: ${(p) => p.theme.pageForeground};
    text-decoration: none;
    text-transform: lowercase;
  }
`;
