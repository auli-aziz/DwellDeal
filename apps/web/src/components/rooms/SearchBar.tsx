"use client";
import React, { FormEvent, useContext, useState } from "react";
import InputBar from "../InputBar";
import useFetch from "@web/hooks/useFetch";
import { fetchResults } from "@web/lib/utils/http";
import { RoomContext } from "@web/contexts/RoomContext";

const SearchBar = () => {
  const { keyword, isLoading, setKeyword, handleSubmit } = useContext(RoomContext)

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
