import { UserData, UserLoginData } from "../types";
import supabase from "./supabase";

export async function signup({ name, email, password }: UserData) {
  const { data: freshUser, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName: name,
      },
    },
  });

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return freshUser;
}

export async function login({ email, password }: UserLoginData) {
  const { data: user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return user;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) {
    return null;
  }

  const { data } = await supabase.auth.getUser();

  return data.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
