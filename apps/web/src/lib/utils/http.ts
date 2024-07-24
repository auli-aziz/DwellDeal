export async function fetchRecents() {
  const response = await fetch(process.env.NEXT_PUBLIC_NESTJS_SERVER + "/rooms/recents",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await response.json();
  return json.recents;
}

export async function fetchResults(keyword: string) {
  const response = await fetch(process.env.NEXT_PUBLIC_NESTJS_SERVER + "/rooms/results",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(keyword)
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await response.json();
  return json;
}
