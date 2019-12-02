import React from "react";
import Styled from "styled-components";

const Indicator = Styled.div`
    border-radius: 50%;
    background: ${props => (props.available ? "green" : "red")};
    height: 20px;
    width: 20px;
    position: absolute;

`;

function AvailabilityIndicator() {
  return <Indicator></Indicator>;
}

export default AvailabilityIndicator;
