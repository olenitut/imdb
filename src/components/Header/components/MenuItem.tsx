import Link from "next/link";

type Props = {
  title: string;
  address: string;
  icon?: React.ReactNode;
};

const MenuItem: React.FC<Props> = ({ title, address, icon }) => {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600 ">
        {icon}{" "}
        <p className="uppercase hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
