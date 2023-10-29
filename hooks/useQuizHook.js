import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useQuizHook = ({id}) => {
  const { data, error, isLoading } = useSWR(id ? `http://localhost:3001/quizzes/${id}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
}

export default useQuizHook;