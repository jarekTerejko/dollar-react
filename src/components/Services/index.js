import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
} from "./ServicesElements";
import { dataServices } from "./DataServices.js";
import ServiceCard from "../ServiceCard";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        {dataServices.map((service, i) => {
          return <ServiceCard service={service} key={i} />;
        })}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
