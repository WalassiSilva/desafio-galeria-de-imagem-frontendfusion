import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
const BASE_URL = "https://picsum.photos/v2/list";

export default function Gallery() {
  const [page, setPage] = useState(1);
  const { data, isError, isPending } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch(BASE_URL);
      return await response.json();
    },
  });

  return (
    <main>
      <div>
        <h1>Gallery</h1>
      </div>
      <div>
        {isPending && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {data && (
          <div>
            <div className="grid-layout">
              {data.slice(0, page * 10).map((post) => (
                <img
                  key={post.id}
                  src={post.download_url}
                  alt={post.author}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={page === 3}
          className={`animate-bounce ${page === 3 ? "hidden" : ""}`}
        >
          ⬇
        </button>
      </div>
    </main>
  );
}
