import React from "react";
import "./swipeButton.css";
import {Close, Favorite, FlashOn, Replay, StarRate} from "@mui/icons-material";
import {IconButton} from "@mui/material";

function SwipeButtons() {
    return <div className={"swipe-button"}>
        <IconButton className={"swipe-button-replay"}>
            <Replay fontSize={"large"}/>
        </IconButton>
        <IconButton className={"swipe-button-left"}>
            <Close fontSize={"large"}/>
        </IconButton>
        <IconButton className={"swipe-button-star"}>
            <StarRate fontSize={"large"}/>
        </IconButton>
        <IconButton className={"swipe-button-right"}>
            <Favorite fontSize={"large"}/>
        </IconButton>
        <IconButton className={"swipe-button-flash"}>
            <FlashOn fontSize={"large"}/>
        </IconButton>
    </div>
}

export default SwipeButtons