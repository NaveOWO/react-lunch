import React from "react";
import styled from "styled-components";
import addButton from "../assets/add-button.png";

export class Header extends React.Component {
  render() {
    return (
      <Container>
        <Title>점심 뭐 먹지</Title>
        <AddButton aria-label="음식점 추가">
          <AddIcon src={addButton} alt="음식점 추가" />
        </AddButton>
      </Container>
    );
  }
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h1`
  color: #fcfcfd;

  ${({ theme }) => theme.fonts.title};
`;

const AddButton = styled.button`
  height: 40px;

  border: none;
  border-radius: 8px;
  background: transparent;

  font-size: 24px;
  cursor: pointer;
`;

const AddIcon = styled.img``;