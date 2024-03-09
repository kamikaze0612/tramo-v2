import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import CountryItem from "./CountryItem";
import List from "../../ui/List";

type Country = {
  countryName: string;
  emoji: string;
  visitedLocationNum: number;
};

const CountriesList: React.FC = () => {
  const locations = useSelector(
    (state: RootState) => state.locations.locations
  );

  const filteredLocations = locations.map((location) => ({
    countryName: location.countryName,
    emoji: location.emoji,
  }));

  const countries = filteredLocations.reduce((acc: Country[], curr) => {
    if (!acc.map((country) => country.countryName).includes(curr.countryName)) {
      return [
        ...acc,
        {
          countryName: curr.countryName,
          emoji: curr.emoji,
          visitedLocationNum: 1,
        },
      ];
    } else {
      const freshCountries = acc.map((country) => {
        if (country.countryName === curr.countryName) {
          return {
            ...country,
            visitedLocationNum: country.visitedLocationNum + 1,
          };
        } else return country;
      });

      return freshCountries;
    }
  }, []);

  return (
    <List>
      {countries.map((country) => (
        <CountryItem key={country.countryName} {...country} />
      ))}
    </List>
  );
};

export default CountriesList;
