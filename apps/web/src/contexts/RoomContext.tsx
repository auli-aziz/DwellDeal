import useFetch from "@web/hooks/useFetch";
import { fetchResults } from "@web/lib/utils/http";
import { createContext, FormEvent, ReactNode, useState } from "react";

export const RoomContext = createContext({
  keyword: "",
  result: [""],
  isLoading: false,
  setKeyword: (keyword: string) => {},
  handleSubmit: (event: FormEvent) => {}
});

export const RoomProvider = ({ children }: { children: ReactNode }) => {
  const [keyword, setKeyword] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);
  const { fetchData, isLoading, error } = useFetch(() => fetchResults(keyword));

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log("clicked");
    
    const data = await fetchData();

    if (data) {
      console.log(data);
      setResult(data);
    } else if (error) {
      console.error(error);
    }
  };

  return (
    <RoomContext.Provider value={{ keyword, result, isLoading, handleSubmit, setKeyword }}>
      { children }
    </RoomContext.Provider>
  );
}