import styled from "styled-components";
import { breakpoint, space, color, textFont } from "@styles/theme";
import Link from "next/link";

import { version } from "../../../packageFile";

const FooterContainer = styled.footer`
  background: ${color("gray", 50)};
  padding: ${space(4)};

  @media (min-width: ${breakpoint("desktop")}) {
    padding: ${space(3, 8)};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterText = styled.span`
  color: ${color("gray", 400)};
  ${textFont("md", "regular")}
  margin-bottom: ${space(4)}

  @media (min-width: ${breakpoint("desktop")}) {
    margin-bottom: ${space(0)};
    order: 1;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${space(6)};

  @media (min-width: ${breakpoint("desktop")}) {
    order: 2;
  }
`;

const FooterButton = styled(Link)`
  color: ${color("gray", 500)};
  text-decoration: none;
`;

const LogoWrap = styled.div`
  margin: ${space(6)};

  @media (min-width: ${breakpoint("desktop")}) {
    width: 7rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: ${space(0)};
    order: 3;
  }
`;
const LogoImg = styled.img`
  width: 1.4375rem;
`;

export function Footer() {
  return (
    <FooterContainer data-test="footer">
      <Content>
        <FooterLinks data-test="footer-links">
          <FooterButton href="#">Docs</FooterButton>
          <FooterButton href="#">API</FooterButton>
          <FooterButton href="#">Help</FooterButton>
          <FooterButton href="#">Community</FooterButton>
        </FooterLinks>
        <LogoWrap data-test="footer-logo">
          <LogoImg src="/icons/logo-small.svg" alt="logo" />
        </LogoWrap>
        <FooterText data-test="package-version">Version: {version}</FooterText>
      </Content>
    </FooterContainer>
  );
}
