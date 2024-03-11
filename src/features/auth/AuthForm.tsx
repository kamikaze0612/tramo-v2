import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { login, signup } from "../../services/apiAuthentication";
import { UserData } from "../../types";
import toast from "react-hot-toast";

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

const BottomBox = styled.div`
  margin-top: 2.4rem;
  position: relative;
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: var(--color-bg-black);
`;

const BottomText = styled(Link)`
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: 1.6rem;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-bg-white);
  padding: 1.2rem;

  &:hover {
    color: var(--color-text-primary);
  }
`;

type AuthFormProps = {
  type: "register" | "signin";
};

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "veyonew780@artgulin.com",
      password: "test1234",
    },
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (type === "register") {
      setIsLoading(true);
      signup(data as UserData)
        .then(() => {
          toast.success("Signed up");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Could not log in");
        })
        .finally(() => setIsLoading(false));
    }

    if (type === "signin") {
      setIsLoading(true);
      login({ email: data.email, password: data.password })
        .then(() => {
          toast.success("Logged in");
          navigate("/app", { replace: true });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Could not log in`");
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {type === "register" && (
          <FormRow label="Name" id="name">
            <Input type="text" id="name" register={register} errors={errors} />
          </FormRow>
        )}

        <FormRow label="Email address" id="email">
          <Input
            type="email"
            placeholder="johndoe@example.com"
            id="email"
            register={register}
            errors={errors}
          />
        </FormRow>

        <FormRow label="Password" id="password">
          <Input
            type="password"
            id="password"
            register={register}
            errors={errors}
          />
        </FormRow>

        <Button variant="secondary" style={{ justifyContent: "center" }}>
          {isLoading && type === "register" && "Signing up..."}
          {isLoading && type === "signin" && "Logging in..."}
          {!isLoading && type === "register" && "Sign up"}
          {!isLoading && type === "signin" && "Log in"}
        </Button>

        <BottomBox>
          <Line />
          <BottomText to={type === "signin" ? "/signup" : "/login"}>
            {type === "register"
              ? "Already have an account?"
              : "Or create new account"}
          </BottomText>
        </BottomBox>
      </Form>
    </Container>
  );
};

export default AuthForm;
