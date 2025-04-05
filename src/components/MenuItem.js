import React from "react";
import {
    ListItem,
    ListItemButton, ListItemIcon,
    ListItemText,
} from "@mui/material";

const MenuItem = ({text, icon}) => {

    return (
        <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    );
}

export default MenuItem;
