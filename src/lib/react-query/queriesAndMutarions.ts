import {
  userQuery,
  userMutation,
  userQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { createUserAccount, signInAccount } from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateUserAccount = () => {
  return userMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return userMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};
