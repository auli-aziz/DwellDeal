"use client";

import useFetch from "@web/hooks/useFetch";
import { fetchRecents } from "@web/lib/utils/http";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RoomInterface } from "@server/models/room.model";
import RoomCard from "../RoomCard";

const Recents = () => {
  const { fetchData, isLoading, error } = useFetch(fetchRecents);
  const [recents, setRecents] = useState<RoomInterface[]>([]);
  const [fetched, setFetched] = useState<boolean>(false);
  const router = useRouter();

  const handleClickRoom = (id: string) => {
    router.push(`/rooms/${id}`);
  };

  useEffect(() => {
    const loadData = async () => {
      const recents = await fetchData();
      if (recents) {
        setRecents(recents);
      }
      setFetched(true);
    };

    loadData();
  }, []);

  let content;
  if (isLoading || !fetched) {
    content = (
      <p className="font-regular lg:text-xl text-base text-center font-montserrat text-dark">
        Loading...
      </p>
    );
  } else if (recents.length > 0) {
    content = (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 px-3 lg:px-20 gap-5">
        {recents.map((r) => (
          <RoomCard
            key={r._id}
            id={r._id}
            image={r.images[0]}
            title={r.title}
            url={r.url}
            location={r.location}
            handleClickRoom={handleClickRoom}
          />
        ))}
      </div>
    );
  } else {
    content = (
      <p className="font-regular lg:text-xl text-base text-center font-montserrat text-dark">
        No scraping has been made.
      </p>
    );
  }

  return (
    <section className="flex flex-col items-center my-10">
      <h3 className="font-montserrat font-bold text-dark lg:text-3xl text-2xl">
        Recents
      </h3>
      <div className="pt-5">{content}</div>
    </section>
  );
};

export default Recents;
