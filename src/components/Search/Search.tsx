"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [val, setVal] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!val) return;

    setVal("");
    router.push(`/search/${val}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent text-center"
        value={val}
        onChange={(el) => setVal(el.target.value)}
      />
    </form>
  );
};

export default Search;
