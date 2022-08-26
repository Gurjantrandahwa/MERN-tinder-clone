import React from "react";
import "./header.css";
import { Forum, Person} from "@mui/icons-material";
import {IconButton} from "@mui/material";

function Header() {
    return <div className={"header"}>
        <IconButton>
            <Person className={"header-icon"} fontSize={"large"}/>
        </IconButton>

        <img className={"header-tinder-logo"}
             src={"https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"} alt={""}/>
        <IconButton>
            <Forum className={"header-icon"} fontSize={"large"}/>
        </IconButton>


    </div>

}

export default Header
