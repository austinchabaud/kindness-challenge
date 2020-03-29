import React from "react";
import styled from "styled-components";

const CategoryContainer = styled.div`
    width: 100%
    margin-top: 400px;
    height: 60px;
    border-top: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999
`;

const ChildContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  // margin-left: 100px;
`;

const Wrapper = styled.div``;

const StyledWrapper = styled(Wrapper)`
  // border: 1px solid black;
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

const Category = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-size: 1.5rem;
  transition: ease 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const stateStyle = {
  color: "#5edfff" //! change color later
};

const CategorySelector = props => {
  const { category, setCategory } = props;

  return (
    <CategoryContainer>
      <ChildContainer>
        <StyledWrapper>
          {category === "all" ? (
            <Category style={stateStyle}>All</Category>
          ) : (
            <Category onClick={() => setCategory("all")}>All</Category>
          )}
          {category === "toiletries" ? (
            <Category style={stateStyle}>Toiletries</Category>
          ) : (
            <Category onClick={() => setCategory("toiletries")}>Toiletries</Category>
          )}
          {category === "food & water" ? (
            <Category style={stateStyle}>Food & Water</Category>
          ) : (
            <Category onClick={() => setCategory("food & water")}>Food & Water</Category>
          )}
          {category === "hygiene" ? (
            <Category style={stateStyle}>Hygiene</Category>
          ) : (
            <Category onClick={() => setCategory("hygiene")}>Hygiene</Category>
          )}
          {category === "other" ? (
            <Category style={stateStyle}>Other</Category>
          ) : (
            <Category onClick={() => setCategory("other")}>Other</Category>
          )}
        </StyledWrapper>
        <Wrapper>
          {/* MODAL HERE */}
          <Category>(MODAL HERE)</Category>
        </Wrapper>
      </ChildContainer>
    </CategoryContainer>
  );
};

export default CategorySelector;
