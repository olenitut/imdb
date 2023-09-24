import Logo from "../Logo/Logo";
import Menu from "./components/Menu";

const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-6xl sm:mx-auto py-6">
      <Menu />
      <div className="mx-2">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
