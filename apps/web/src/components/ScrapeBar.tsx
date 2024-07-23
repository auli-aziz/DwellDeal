"use client";
import React, { FormEvent, useState } from "react";
import { isValidLink } from "@server/utils/functions";
import { useScrape } from "@web/hooks/useScrape";

const SearchBar = () => {
  const [link, setLink] = useState<string>("");
  const { scrape, isLoading, error } = useScrape();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!isValidLink(link)) {
      alert("Please enter a valid link");
      return;
    }

    const data = await scrape(link);

    if (data) {
      console.log(data);
    } else if (error) {
      console.error(error);
    }
  };

  return (
    <form className="my-5 flex w-8/12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your link"
        className="w-full p-3 border-t-2 border-l-2 border-b-2 border-primary rounded-l-3xl"
        value={link}
        onChange={(event) => setLink(event.target.value)}
      />
      <div className="border-b-2 border-primary rounded-r-full font-shanti">
        <button
          type="submit"
          disabled={link === "" || isLoading}
          className={`py-3 px-5 h-full rounded-r-3xl rounded-bl-3xl bg-primary text-white font-bold ${
            link === "" ? "" : "hover:bg-gray-900"
          }`}
        >
          Scrape
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
