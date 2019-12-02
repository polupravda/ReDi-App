import React from "react";
import { mentors } from "../data/content";
import styled from "styled-components";
import AvailabilityIndicator from "./availabilityIndicator";

const StyledCard = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px #d8d8d8, 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 25vw;
  margin: 10px;
  color: #333;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const StyledBasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const StyledH2 = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const StyledPosition = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  border: solid 1px #f2f2f2;
  margin-right: 10px;
  width: 30%;
`;

const StyledTag = styled.div`
  background: ${props => (props.active ? "red" : "pink")};
  font-size: 14px;
  font-weight: 700;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 5px;
`;

const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledIntro = styled.div`
  font-size: 14px;
  line-height: 1;
  margin: 10px 5px;
  text-align: left;
`;

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledApplyButton = styled.button`
  padding: 10px;
  width: 100%;
  background: #ffb600;
  color: #333;
  border: none;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 5px;
`;

function Card() {
  return (
    <>
      {mentors.map(mentor => (
        <StyledCard>
          <StyledCardHeader>
            <AvailabilityIndicator />
            <StyledImg
              src={mentor.pictureUrl}
              alt={`${mentor.name} ${mentor.surname}`}
            />
            <StyledBasicInfo>
              <StyledH2>{`${mentor.name} ${mentor.surname}`}</StyledH2>
              <StyledPosition>{mentor.position}</StyledPosition>
            </StyledBasicInfo>
          </StyledCardHeader>
          <StyledTagContainer>
            {mentor.tags.map(skill => (
              <StyledTag>{skill}</StyledTag>
            ))}
          </StyledTagContainer>
          <StyledIntro>{mentor.intro}</StyledIntro>
          {/* <ContactContainer>
            {mentor.contactDetails.map(contact => (
              <span>{contact}</span>
            ))}
          </ContactContainer> */}
          <StyledApplyButton>Apply for Mentorship</StyledApplyButton>
        </StyledCard>
      ))}
    </>
  );
}

export default Card;
