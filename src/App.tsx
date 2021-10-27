import React from 'react';
import styled from '@emotion/styled';
import { WhiteButton, PrimaryButton } from "./components/Buttons";
import { H1, H2, H3, H4, P, Span } from "./components/Typography";

const Container = styled.main`
  background: #FFFFFF;
  box-shadow: 0px 15px 30px rgba(0, 81, 171, 0.148847);
  border-radius: 8px;
  max-width: 635px;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Box = styled.section`
  padding: 32px;
  width: 100%;
`;

const MiddleBox = styled.section<{ background: string }>`
  padding: 32px;
  width: 100%;
  background: ${({ background }) => background};

  @media (min-width: 769px) {
    width: 50%;
  }
`;

const Row = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

function App() {
  return (
    <Container>
      <Box >
        <H1>Join our community</H1>
        <H3>30-day, hassle-free money back guarantee</H3>
        <P color="#9AA7BE">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</P>
      </Box>
      <MiddleBox background="#2AB3B1">
        <H2>Monthly Subscription</H2>
        <Row><H4>$29</H4><Span>per month</Span></Row>
        <P color="white">Full access for less than $1 a day</P>
        <PrimaryButton>Sing Up</PrimaryButton>
      </MiddleBox>
      <MiddleBox background="#4ABFBD">
        <H2>Why Us</H2>
        <Row><WhiteButton>Tutorials by industry experts</WhiteButton></Row>
        <Row><WhiteButton>Peer & expert code review</WhiteButton></Row>
        <Row><WhiteButton>Coding exercises</WhiteButton></Row>
        <Row><WhiteButton>Access to our GitHub repos</WhiteButton></Row>
        <Row><WhiteButton>Community forum</WhiteButton></Row>
        <Row><WhiteButton>Flashcard decks</WhiteButton></Row>
        <Row><WhiteButton>New videos every week</WhiteButton></Row>
      </MiddleBox>
    </Container>
  );
}

export default App;
