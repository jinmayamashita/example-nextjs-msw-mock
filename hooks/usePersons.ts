import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type Data = {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
// Prefetch the query on the server, dehydrate the cache and rehydrate it on the client
export const fetchPersons = async (): Promise<Data[]> => {
  // Backend API call here
  const res = await axios.get("https://reqres.in/api/users");
  const { data } = res.data;

  return data;
};

export const usePersons = () => {
  return useQuery({
    queryKey: ["persons"],
    queryFn: () => fetchPersons(),
  });
};
