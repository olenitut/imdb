import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-6 dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavbarItem title="Trending" param="trending" />
      <NavbarItem title="Top Rated" param="topRated" />
    </nav>
  );
};

export default Navbar;
