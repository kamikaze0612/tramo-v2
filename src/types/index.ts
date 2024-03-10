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

export type GeolocationPosition = {
  lat: number;
  lng: number;
};

export type AddLocationFormData = {
  location: string;
  date: Date;
  notes: string;
};

type LocalityInfo = {
  administrative: {
    name: string;
    description: string;
    isoName?: string;
    order: number;
    adminLevel: number;
    isoCode?: string;
    wikidataId?: string;
    geonameId?: number;
  }[];
  informative: {
    name: string;
    description: string;
    isoName?: string;
    order: number;
    isoCode?: string;
    wikidataId?: string;
    geonameId?: number;
  }[];
};

export type LocationData = {
  latitude: number;
  longitude: number;
  lookupSource: string;
  localityLanguageRequested: string;
  continent: string;
  continentCode: string;
  countryName: string;
  countryCode: string;
  principalSubdivision: string;
  principalSubdivisionCode: string;
  city: string;
  locality: string;
  postcode: string;
  plusCode: string;
  localityInfo: LocalityInfo;
};
