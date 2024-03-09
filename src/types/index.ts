export type Location = {
  id: number;
  created_at: Date;
  cityName: string;
  countryName: string;
  date: Date;
  emoji: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  cityId: string;
};

export type Country = {
  countryName: string;
  emoji: string;
  visitedLocationNum: number;
};
