import useFetch from "@web/hooks/useFetch";
import { fetchResults } from "@web/lib/utils/http";
import { createContext, FormEvent, ReactNode, useState } from "react";

export interface Result {
  prices_name: { name: string; price: number }[];
  prices: number[];
  ratings_name: { name: string; rating: number }[];
  ratings: number[];
  highest_price: number;
  lowest_price: number;
  highest_rating: number;
  average_rating: number;
  total_rooms: number;
  average_price: number;
  gender_count: { [key: string]: number };
  received_data: any[]
}

interface RoomContextType {
  keyword: string;
  result: Result;
  isLoading: boolean;
  setKeyword: (keyword: string) => void;
  handleSubmit: (event: FormEvent) => void;
}

export const RoomContext = createContext<RoomContextType | undefined>(undefined);

/*
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
*/

export const RoomProvider = ({ children }: { children: ReactNode }) => {
  const [keyword, setKeyword] = useState<string>("");
  const [result, setResult] = useState<Result>({
    prices_name: [],
    prices: [],
    ratings_name: [],
    ratings: [],
    highest_price: 0,
    lowest_price: 0,
    average_price: 0,
    average_rating: 0,
    highest_rating: 0,
    total_rooms: 0,
    gender_count: {},
    received_data: []
  });
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
      {children}
    </RoomContext.Provider>
  );
};