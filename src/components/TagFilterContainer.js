import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { TOGGLE_TAG } from "../redux/actions/actionCreators";

const StyledTagFilterContainer = styled.div`
    display: flex;
`;

const StyledTag = styled.button`
  background: ${props => (props.active ? "red" : "pink")};
  font-size: 14px;
  font-weight: 700;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 5px;
  border: none;
`;

const StyledTick = styled.span`
  visibility: ${props => (props.active ? "visible" : "hidden")};
`;

function TagFilterContainer({ ...props }) {
  function handleClick(tagName) {
    console.log(tagName);
    props.dispatch({
      type: TOGGLE_TAG,
      tagName
    });
  }
  return (
    <StyledTagFilterContainer>
      {props.tags.map(item => (
        <StyledTag onClick={() => handleClick(item.tagName)}>
          {item.tagName}{" "}
                <StyledTick>
                  <span role="img" aria-label="Tick">
                    ✔️
                  </span>
                </StyledTick>
        </StyledTag>
      ))}
    </StyledTagFilterContainer>
  );
}

const mapStateToProps = state => {
  return {
    tags: state.tagsReducer
  };
};
export default connect(mapStateToProps)(TagFilterContainer);
