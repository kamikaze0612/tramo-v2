import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-white--1);
  padding: 6.4rem;
`;

const Instructions = styled.ul`
  list-style: none;
  width: 104rem;
  background-color: var(--color-bg-white);
  box-shadow: var(--shadow-lg);
  margin: 0 auto;
  border-radius: 12px;
  font-size: 1.8rem;
  line-height: 1.5;
  padding: 3.2rem 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  @media only screen and (max-width: 64em) {
    width: 92rem;
  }

  @media only screen and (max-width: 56.25em) {
    width: 72rem;
  }

  @media only screen and (max-width: 27em) {
    max-width: 34rem;
    padding: 2.4rem 3.2rem;
  }
`;

const Row = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  column-gap: 4.8rem;

  @media only screen and (max-width: 27em) {
    grid-template-columns: 1fr;
    row-gap: 2.4rem;

    & div:has(img) {
      grid-row: 2;
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Number = styled.span`
  font-size: 3rem;
  font-weight: 600;
  border-radius: 50%;
  background-color: var(--color-bg-white--1);
  min-height: 6.4rem;
  min-width: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: content;

  @media only screen and (max-width: 27em) {
    font-size: 2.4rem;
  }
`;

const Text = styled.p`
  font-weight: 500;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 27em) {
    font-size: 1.2rem;
  }
`;

const ImageBox = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const UsageInstruction: React.FC = () => {
  return (
    <Container>
      <Instructions>
        <Row>
          <TextBox>
            <Number>01</Number>
            <Text>
              First you need to create an account for yourself, or login with
              demo account that already configured in Log in page
            </Text>
          </TextBox>
          <ImageBox>
            <Image src="/images/instructions/instruction-1.png" />
          </ImageBox>
        </Row>

        <Row>
          <ImageBox>
            <Image src="/images/instructions/instruction-2.png" />
          </ImageBox>
          <TextBox>
            <Number>02</Number>
            <Text>Click anywhere on map</Text>
          </TextBox>
        </Row>

        <Row>
          <TextBox>
            <Number>03</Number>
            <Text>
              Fill out details of your trip to selected location then click
              "Submit" button
            </Text>
          </TextBox>
          <ImageBox>
            <Image src="/images/instructions/instruction-3.png" />
          </ImageBox>
        </Row>

        <Row>
          <ImageBox>
            <Image src="/images/instructions/instruction-4.png" />
          </ImageBox>
          <TextBox>
            <Number>04</Number>
            <Text>You can select your current location</Text>
          </TextBox>
        </Row>

        <Row>
          <TextBox>
            <Number>05</Number>
            <Text>
              You can see your visited locations by list. Click on individual
              location to see details of your corresponding trip
            </Text>
          </TextBox>
          <ImageBox>
            <Image src="/images/instructions/instruction-5.png" />
          </ImageBox>
        </Row>
      </Instructions>
    </Container>
  );
};

export default UsageInstruction;
