import { fetcher } from "@/libs/fetcher";
import useSWR from "swr";

export const useCurrentUser = (userId: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    `/api/user/?userId=${userId}`,
    fetcher
  );

  return { data, isLoading, error, mutate };
};
