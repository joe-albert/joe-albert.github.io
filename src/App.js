import './App.css';
import React from "react";
import {AppBar, Box, CssBaseline, IconButton, Toolbar, Typography} from "@mui/material";
import SideBar from "./components/side-bar/SideBar";
import MenuIcon from '@mui/icons-material/Menu';
import PageSection from "./components/PageSection";
import AboutSection from "./components/about-section/AboutSection";
import ExperienceSection from "./components/experience-section/ExperienceSection";
import SkillSection from "./components/skill-section/SkillSection";
import EducationSection from "./components/education-section/EducationSection";
import ContactSection from "./components/contact-section/ContactSection";

const drawerWidth = 240;

function App() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Joseph Albert
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                id="side-bar-container"
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <SideBar
                    drawerWidth={drawerWidth}
                    mobileOpen={mobileOpen}
                    setIsClosing={setIsClosing}
                    setMobileOpen={setMobileOpen}
                />
            </Box>
            <Box
                component="main"
                className={"pattern"}
                sx={{
                    flexGrow: 1,
                    marginLeft: 0,
                    width: {sm: `calc(100% - ${drawerWidth}px)`}
            }}
            >
                <Toolbar/>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <PageSection
                    header="About">
                        <AboutSection/>
                    </PageSection>

                    <PageSection
                        header="Experience">
                        <ExperienceSection/>
                    </PageSection>
                    <PageSection
                        header="Skills"
                    >
                        <SkillSection/>
                    </PageSection>
                    <PageSection
                        header="Education"
                    >
                        <EducationSection/>
                    </PageSection>
                    <PageSection
                        header="Contact"
                    >
                        <ContactSection/>
                    </PageSection>
                </Box>

            </Box>
        </Box>

    );
}

export default App;


