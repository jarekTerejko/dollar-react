import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: #010606;
  text-align: center;
`;

export const FooterWrapper = styled.div`
  max-width: 1100px;
  padding: 0 15px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 20px;
`;

export const FooterLinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
export const FooterListTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
`;

export const FooterListItem = styled.li`
  margin: 5px 0;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    color: #cd6133;
  }
`;

export const FooterWrapperTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    grid-gap: 20px;
    padding: 20px 15px;

    @media screen and (max-width: 776px) {
        grid-template-columns: 1fr;
    }
`



export const SiteLogo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 auto;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
`;

export const SiteRights = styled.p`
    color: #fff;

`

export const SocialMediaWrapper = styled.div`
    display: flex;
   
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 20px;
    margin: 0 5px;
`