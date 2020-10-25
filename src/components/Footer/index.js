import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinkList,
  FooterListTitle,
  FooterListItem,
  FooterLink,
  SiteLogo,
  SiteRights,
  SocialMediaWrapper,
  SocialIconLink,
  FooterWrapperTwo
} from "./FooterElements";
import {animateScroll} from 'react-scroll'

const Footer = () => {

  const goToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinkList>
          <FooterListTitle>About us</FooterListTitle>
          <FooterListItem>
            <FooterLink to="/sign-in">How it works</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Testimonials</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Careers</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Investors</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Terms of services</FooterLink>
          </FooterListItem>
        </FooterLinkList>
        <FooterLinkList>
          <FooterListTitle>Videos</FooterListTitle>
          <FooterListItem>
            <FooterLink to="/sign-in">Submit video</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Ambassadors</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Agency</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Influencer</FooterLink>
          </FooterListItem>
        </FooterLinkList>
        <FooterLinkList>
          <FooterListTitle>Contact us</FooterListTitle>
          <FooterListItem>
            <FooterLink to="/sign-in">Contact</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Support</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Destinations</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Sponsorship</FooterLink>
          </FooterListItem>
        </FooterLinkList>
        <FooterLinkList>
          <FooterListTitle>Social media</FooterListTitle>
          <FooterListItem>
            <FooterLink to="/sign-in">Instagram</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Facebook</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Youtube</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">YouTube</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/sign-in">Twitter</FooterLink>
          </FooterListItem>
        </FooterLinkList>
      </FooterWrapper>
      <FooterWrapperTwo>
      <SiteLogo onClick={goToTop} to="/">dollar</SiteLogo>
        <SiteRights>
          &copy; {new Date().getFullYear()} All rights reserved
        </SiteRights>
      <SocialMediaWrapper>
        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
          <FaYoutube />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
          <FaTwitter />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
          <FaLinkedin />
        </SocialIconLink>
      </SocialMediaWrapper>
      </FooterWrapperTwo>
    </FooterContainer>
  );
};

export default Footer;
