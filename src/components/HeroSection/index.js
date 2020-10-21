import React from "react";
import Video from "../../videos/video.mp4";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, HeroArrowIcon } from "./HeroElements";
import {Button} from '../ButtonElement'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Vistual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='sign-up' big="true"  primary="true" >Get Started<HeroArrowIcon/></Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
