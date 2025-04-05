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
import InboxIcon from "@mui/icons-material/Inbox";

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
                {['About', 'Experience', 'Skills', 'Education', 'Contact', 'Resume'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
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
