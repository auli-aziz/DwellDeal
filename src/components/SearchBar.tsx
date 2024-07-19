"use client";
import React, { FormEvent, useState } from "react";

const isValidLink = (input: string) => {
  try {
    const url = new URL(input);
    const host = url.hostname;
    const path = url.pathname;

    const validPatterns = [
      "mamikos.com/room",
      "cove.id/en/listings",
      "cove.id/listings",
      "rukita.co/place"
    ];

    const invalidPattern = /apartemen/;

    const matchesValidPattern = validPatterns.some(pattern => {
      const [domain, subpath] = pattern.split('/', 2);
      return host.includes(domain) && path.includes(subpath);
    });

    const matchesInvalidPattern = path.match(invalidPattern);

    return matchesValidPattern && !matchesInvalidPattern;
  } catch (error) {
    return false;
  }
};

const SearchBar = () => {
  const [link, setLink] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if(!isValidLink(link)) {
      alert("Please enter a valid link");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: link }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log("Failed to fetch data");
      }

    } catch (error) {
      console.error("Error scraping:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="my-5 flex gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Now"
        className="p-1 border-2 border-gray-200 rounded-md w-96"
        value={link}
        onChange={(event) => setLink(event.target.value)}
      />
      <button
        type="submit"
        disabled={link === "" || isLoading}
        className={`py-2 px-5 h-full rounded-md bg-gray-800 border-2 border-gray-800 text-white font-bold ${
          link === "" ? "" : "hover:bg-gray-900"
        }`}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
