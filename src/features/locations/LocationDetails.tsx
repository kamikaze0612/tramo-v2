import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../../store";
import Row from "../../ui/Row";
import { format } from "date-fns";
import Button from "../../ui/Button";

const StyledDetails = styled.div`
  padding: 2.4rem 3.2rem;
  background-color: var(--color-bg-white);
  box-shadow: var(--shadow-md);
  width: 40rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: flex-start;
`;

const LocationDetails: React.FC = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useSelector((state: RootState) =>
    state.locations.locations.find((location) => location.id === +params.id!)
  );

  return (
    <StyledDetails>
      <Row label="City name">
        <p>
          {location?.emoji} {location?.cityName}
        </p>
      </Row>

      <Row label={`You went to ${location?.cityName} on`}>
        <p>{format(new Date(location!.date), "EEEE, MMMM dd, yyyy")}</p>
      </Row>

      <Row label="Notes about trip">
        <p>{location?.notes}</p>
      </Row>

      <Row label="See more about location">
        <Link
          to={`https://en.wikipedia.org/wiki/${location?.cityName}`}
          target="_blank"
        >
          Check out {location?.cityName} on Wikipedia &rarr;
        </Link>
      </Row>

      <Button variant="secondary" size="small" onClick={() => navigate(-1)}>
        &larr; Back
      </Button>
    </StyledDetails>
  );
};

export default LocationDetails;
