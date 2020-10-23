import React from "react";
import {
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceCardElements";

const ServiceCard = ({ service }) => {
  return (
    <ServicesCard>
      <ServicesIcon src={service.image} />
      <ServicesH2>{service.title}</ServicesH2>
      <ServicesP>{service.paragraph}</ServicesP>
    </ServicesCard>
  );
};

export default ServiceCard;
