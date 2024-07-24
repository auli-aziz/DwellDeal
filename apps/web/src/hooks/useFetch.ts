import { useState } from "react";

export default function useFetch(fetchFn: () => Promise<any>) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response = await fetchFn();

      if (!response) {
        throw new Error("Failed to fetch data");
      }
      return response;
    } catch (error: any) {
      setError(error.message || "Error scraping");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, isLoading, error };
}
