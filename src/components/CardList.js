import React from "react";
import styled from "styled-components";
import data from "../data";
import Card from "./Card";
import Title from "./Title";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardList = () => {
  return (
    <>
      <Title main>List of articles</Title>
      <Wrapper>
        {data.articles.map(article => (
          <Card title={article.title} description={article.description} />
        ))}
      </Wrapper>
    </>
  );
};

export default CardList;
