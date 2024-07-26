"use client";
import React, { FormEvent, useState } from "react";
import InputBar from "../InputBar";
import useFetch from "@web/hooks/useFetch";
import { fetchResults } from "@web/lib/utils/http";

const SearchBar = () => {
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
    <>
      <InputBar
        action="Search"
        variable={keyword}
        setVariable={setKeyword}
        placeholder="Enter location"
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default SearchBar;
