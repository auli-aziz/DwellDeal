import { useState } from "react";

export const useScrape = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrape = async (uri: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_NESTJS_SERVER + "/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uri }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      return data;
    } catch (err: any) {
      setError(err.message || "Error scraping");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { scrape, isLoading, error };
};
