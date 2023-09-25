"use client";

import { useTheme } from "next-themes";
import { Themes } from "@/app/Providers";
import React from "react";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && currentTheme === Themes.DARK ? (
        <MdLightMode
          onClick={() => setTheme(Themes.LIGHT)}
          className="cursor-pointer text-xl hover:text-amber-500"
        />
      ) : (
        <BsFillMoonFill
          onClick={() => setTheme(Themes.DARK)}
          className="cursor-pointer text-xl hover:text-amber-500"
        />
      )}
    </>
  );
};

export default DarkModeSwitch;
