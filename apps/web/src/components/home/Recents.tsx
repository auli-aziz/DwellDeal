"use client";

import useFetch from "@web/hooks/useFetch";
import { fetchRecents } from "@web/utils/http";
import React, { useEffect, useState } from "react";

const Recents = () => {
  const { fetchData, isLoading, error } = useFetch(fetchRecents);
  const [recents, setRecents] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const recents = await fetchData();
      if (recents) {
        setRecents(recents);
      }
    };
    loadData();
  }, []);

  return (
    <section className="flex flex-col items-center my-10">
      <h3 className="font-montserrat font-bold text-dark lg:text-3xl text-2xl">
        Recents
      </h3>
      <div className="pt-5">
        {isLoading && (
          <p className="font-regular lg:text-xl pt-5 text-base text-center font-montserrat text-dark">
            Loading...
          </p>
        )}
        {recents.length > 0 && !isLoading ? (
          <div className="grid">success</div>
        ) : (
          <p className="font-regular lg:text-xl text-base text-center font-montserrat text-dark">
            No scraping has been made.
          </p>
        )}
      </div>
    </section>
  );
};

export default Recents;
