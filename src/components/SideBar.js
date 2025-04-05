import React from "react";
import {
    Divider, Drawer,
    List,
    ListItem,
    ListItemButton, ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';

const SideBar = ({drawerWidth, mobileOpen, setIsClosing, setMobileOpen}) => {

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem key="About" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>

                <ListItem key="Experience" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Experience" />
                    </ListItemButton>
                </ListItem>

                <ListItem key="Skills" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <BuildIcon />
                        </ListItemIcon>
                        <ListItemText primary="Skills" />
                    </ListItemButton>
                </ListItem>

                <ListItem key="Education" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Education" />
                    </ListItemButton>
                </ListItem>

                <ListItem key="Contact" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>

                <ListItem key="Resume" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DescriptionIcon />
                        </ListItemIcon>
                        <ListItemText primary="Resume" />
                    </ListItemButton>
                </ListItem>

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
