import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import styled from "styled-components";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg-white--1);
`;

const Form = styled.form`
  width: 56rem;
  height: auto;
  background-color: var(--color-bg-white);
  box-shadow: var(--shadow-md);
  padding: 3.2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const AuthForm: React.FC = () => {
  const { register } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Container>
      <Form>
        <FormRow label="Email address" id="email">
          <Input
            type="email"
            placeholder="johndoe@example.com"
            id="email"
            register={register}
          />
        </FormRow>

        <FormRow label="Password" id="password">
          <Input type="password" id="password" register={register} />
        </FormRow>
      </Form>
    </Container>
  );
};

export default AuthForm;
