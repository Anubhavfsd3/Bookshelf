import { Button } from "antd";
import React from "react";
import {HiOutlineSun, HiOutlineMoon} from "react-icons/hi";

export default function ToggleThemeButton ({ darkTheme, toggleTheme}) {
    return(
       <div className="toggle-theme-btn rounded-2xl bg-lime mt-1">
        <Button  onClick={toggleTheme} className="bg-white">
            {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
        </Button>
       </div>
    )
}