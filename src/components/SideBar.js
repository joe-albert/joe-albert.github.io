import React from "react";
import {
    Divider, Drawer,
    List,
    Toolbar
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import MenuItem from "./MenuItem";

const SideBar = ({drawerWidth, mobileOpen, setIsClosing, setMobileOpen}) => {

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    /**
     * Build Menu Items
     * @type {unknown[]}
     */
    const menuItems = [
        {text: "About", icon: <InfoIcon />},
        {text: "Experience", icon: <WorkIcon />},
        {text: "Skills", icon: <BuildIcon />},
        {text: "Education", icon: <SchoolIcon />},
        {text: "Contact", icon: <MailIcon />},
        {text: "Resume", icon: <DescriptionIcon />},
    ].map(menuItem => (
        <MenuItem
            text={menuItem.text}
            icon={menuItem.icon}>
        </MenuItem>
    ));

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {menuItems}
            </List>
        </div>
    );

    return (
        <div>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            slotProps={{
                root: {
                    keepMounted: true, // Better open performance on mobile.
                },
            }}
        >
            {drawer}
        </Drawer>
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
        >
            {drawer}
        </Drawer>
    </div>
    );
}

export default SideBar;
