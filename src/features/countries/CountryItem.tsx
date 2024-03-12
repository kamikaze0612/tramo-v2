import React from "react";
import styled from "styled-components";
import ListItem from "../../ui/ListItem";

const StyledCountryItem = styled(ListItem)`
  padding: 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const CountryName = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.5;
`;

const CountryFlag = styled.span`
  font-size: 1.6rem;
  margin-right: 6px;
`;

const VisitedNumber = styled.p`
  font-size: 1.4rem;
  color: var(--color-text-secondary);
`;

type CountryItemProps = {
  emoji: string;
  countryName: string;
  visitedLocationNum: number;
};

const CountryItem: React.FC<CountryItemProps> = ({
  emoji,
  countryName,
  visitedLocationNum,
}) => {
  return (
    <StyledCountryItem>
      <CountryName>
        <CountryFlag>{emoji}</CountryFlag>
        {countryName}
      </CountryName>
      <VisitedNumber>Visited locations: {visitedLocationNum}</VisitedNumber>
    </StyledCountryItem>
  );
};

export default CountryItem;
