"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filterButtons = [
  { filter: "all", text: "All Cabins" },
  { filter: "small", text: "1&mdash;3 Guest" },
  { filter: "medium", text: "4&mdash;7 Guest" },
  { filter: "large", text: "8&mdash;12 Guest" },
];

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border-primary-800 border flex rounded-xl my-8">
      {filterButtons.map((fb, index) => (
        <Button
          key={fb.filter}
          filter={fb.filter}
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          {fb.text}
        </Button>
      ))}
    </div>
  );
}

export function Button({ children, handleFilter, filter, activeFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`rounded-xl m-2 px-5 py-2 hover:bg-primary-700 transition-all duration-300 ${filter === activeFilter ? "bg-primary-700 text-primary-50" : ""}`}
      dangerouslySetInnerHTML={{ __html: children }}
    ></button>
  );
}
