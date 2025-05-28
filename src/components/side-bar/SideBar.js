import React from "react";
import {
    Avatar,
    Divider, Drawer, Link,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    Toolbar
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import MenuItem from "./MenuItem";
import headshot from '../../assets/images/joseph_albert.jpg';
import resume from '../../assets/files/Resume- Joseph Albert.pdf';
import {BrowserRouter} from "react-router-dom";

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
    ].map(menuItem => (
        <MenuItem
            text={menuItem.text}
            icon={menuItem.icon}>
        </MenuItem>
    ));

    const drawer = (
        <div>
            <Toolbar>
                <Avatar
                    rounded
                    src={headshot}
                    sx={{
                        width: "75%",
                        height: "75%",
                        margin: "auto",
                        border:"black solid 3px",
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}
                />
            </Toolbar>
            <Divider />
            <BrowserRouter>
                <List>
                    {menuItems}
                    <Link target={"_blank"} class={"nav-link"} href={resume}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DescriptionIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Resume"} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </BrowserRouter>
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
