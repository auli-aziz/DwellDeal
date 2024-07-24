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
