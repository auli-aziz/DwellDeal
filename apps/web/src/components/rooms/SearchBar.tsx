"use client";
import React, { FormEvent, useState } from "react";
import { isValidLink } from "@server/utils/functions";
import { useScrape } from "@web/hooks/useScrape";
import InputBar from "../InputBar";
import useFetch from "@web/hooks/useFetch";
import { fetchResults } from "@web/lib/utils/http";

const SearchBar = () => {
  const [keyword, setKeyword] = useState<string>("");
  const { fetchData, isLoading, error } = useFetch(() => fetchResults(keyword));

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = await fetchData();

    if (data) {
      console.log(data);
    } else if (error) {
      console.error(error);
    }
  };

  return (
    <InputBar
      action="Search"
      variable={keyword}
      setVariable={setKeyword}
      placeholder="Enter keyword"
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchBar;
