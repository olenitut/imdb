import MenuItem from "./MenuItem";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Menu = () => {
  return (
    <div className="flex">
      <MenuItem
        title="Home"
        address="/"
        icon={<AiFillHome className="text-2xl sm:hidden mx-4" />}
      />
      <MenuItem
        title="about"
        address="/about"
        icon={<BsFillInfoCircleFill className="text-2xl sm:hidden mx-4" />}
      />
    </div>
  );
};

export default Menu;
