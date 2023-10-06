import { fetcher } from "@/libs/fetcher";
import useSWR from "swr";

export const useCurrentUser = (username: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    `/api/users/${username}`,
    fetcher
  );

  return { data, isLoading, error, mutate };
};
