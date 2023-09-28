"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  title: string;
  param: string;
};

const NavbarItem: React.FC<Props> = ({ title, param }) => {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  return (
    <Link
      href={`/?filter=${param}`}
      className={`hover:text-amber-600 font-semibold p-2 ${
        filter === param &&
        "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavbarItem;
