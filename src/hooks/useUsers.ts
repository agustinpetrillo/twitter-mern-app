import { fetcher } from "@/libs/fetcher";
import useSWR from "swr";

export const useUsers = () => {
  const { data, isLoading, error, mutate } = useSWR("/api/users", fetcher);

  return { data, isLoading, error, mutate };
};
