import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

import { useUrlPosition } from "../../hooks/useUrlPosition";
import { REVERSE_GEOCODING_URL } from "../../utils/constants";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { AddLocationFormData, LocationData } from "../../types";
import TextArea from "../../ui/TextArea";
import Button from "../../ui/Button";
import { convertCountryCodeToEmoji } from "../../utils/helpers";
import SmallLoader from "../../ui/SmallLoader";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: var(--color-bg-white);
  padding: 2.4rem 3.2rem;
  border-radius: 8px;
  width: 40rem;
  box-shadow: var(--shadow-md);
`;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
`;

const AddLocationForm: React.FC = () => {
  const [geocodingError, setGeocodingError] = useState("");
  const [countryEmoji, setCountryEmoji] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AddLocationFormData>({
    defaultValues: {
      location: "",
      date: new Date(),
      notes: "",
    },
  });

  const navigate = useNavigate();

  const { lat, lng } = useUrlPosition();

  useEffect(() => {
    if (!lat || !lng) navigate("/app/locations");
  }, [lat, lng, navigate]);

  useEffect(() => {
    async function getLocationDetails(lat: number, lng: number) {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${REVERSE_GEOCODING_URL}?latitude=${lat}&longitude=${lng}`
        );
        const data = (await res.json()) as LocationData;

        setValue("location", data.city);
        setCountryEmoji(convertCountryCodeToEmoji(data.countryCode));

        console.log(data);
      } catch (err) {
        setGeocodingError(
          "That doesn't seem to be a valid location, try it again 😉"
        );
      } finally {
        setIsLoading(false);
      }
    }

    getLocationDetails(+lat!, +lng!);
  }, [lat, lng, setCountryEmoji, setValue]);

  if (isLoading) return <SmallLoader />;
  if (geocodingError) return <p>ERROR</p>;

  const onSubmit: SubmitHandler<AddLocationFormData> = (data) => {
    console.log(data);
  };

  function handleCancel() {
    navigate("/app/locations");
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Location name" id="location" error={errors?.location}>
        <Input
          placeholder="Location name"
          id="location"
          register={register}
          tag={countryEmoji}
        />
      </FormRow>

      <FormRow label="Visited date" id="date" error={errors?.date}>
        <Input id="date" register={register} type="date" />
      </FormRow>

      <FormRow
        label="Anything about your trip?"
        id="notes"
        error={errors?.notes}
      >
        <TextArea placeholder="Beach was wonderful" id="notes" />
      </FormRow>

      <ButtonsBox>
        <Button variant="danger" type="reset" onClick={handleCancel}>
          Cancel
        </Button>
        <Button>Submit</Button>
      </ButtonsBox>
    </StyledForm>
  );
};

export default AddLocationForm;
