"use client";
import React, { FormEvent, useState } from "react";
import { isValidLink } from "@server/utils/functions";
import { useScrape } from "@web/hooks/useScrape";
import InputBar from "../InputBar";

const ScrapeBar = () => {
  const { scrape, isLoading, error } = useScrape();
  const [link, setLink] = useState<string>("");

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
    <InputBar
      action="Submit"
      variable={link}
      setVariable={setLink}
      placeholder="Enter your link"
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    />
  );
};

export default ScrapeBar;
