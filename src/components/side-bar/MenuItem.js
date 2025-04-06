import React from "react";
import {
    ListItem,
    ListItemButton, ListItemIcon,
    ListItemText,
} from "@mui/material";
import {HashLink} from "react-router-hash-link";

const MenuItem = ({text, icon}) => {
    var id = "/#" + text + "Section";
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -64;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (

        <HashLink smooth to={id} scroll={el => scrollWithOffset(el)}>
            <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
        </HashLink>
    );
}

export default MenuItem;
