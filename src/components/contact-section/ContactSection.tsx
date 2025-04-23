import * as React from "react";
import {
    Avatar,
    Box, Link, Typography
} from "@mui/material";
import github_logo from "../../assets/images/github_logo.png"
import linkedin_logo from "../../assets/images/linkedin_logo.png"
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from '@mui/icons-material/Phone';
import {black} from "material-ui/styles/colors";


const ContactSection = () => {

    return (
        <Box
            sx={{
                // backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: '25px',
                padding: "2rem",

            }}
        >
            {/*PHONE*/}
            <Box
                sx={{
                    p:2,
                    display:"flex",
                    alignItems:"center",
                }}
            >
                <PhoneIcon
                    sx={{
                        display: "inline-block",
                        height: "60px",
                        width: "60px",
                    }}/>
                <Box sx={{ display: 'block', width: '30px' }} />
                <Typography sx={{
                    fontSize: "28px",
                    justifyContent: "center",
                    alignItems: "center",
                }} variant="h3" display={"inline"}>+1-978-238-8906</Typography>
            </Box>

            {/*EMAIL*/}
            <Box
                sx={{
                    p:2,
                    display:"flex",
                    alignItems:"center",
                }}
            >
                <MailIcon
                    sx={{
                        display: "inline-block",
                        height: "60px",
                        width: "60px",
                    }}
                />
                <Box sx={{ display: 'block', width: '30px' }} />
                <Link color={"rgb(0, 0, 0)"}
                    href={"mailto:jalbert@chrysina.net"}
                >
                    <Typography sx={{
                        fontSize: "28px",
                        justifyContent: "center",
                        alignItems: "center",
                    }} variant="h3" display={"inline"}>jalbert@chrysina.net</Typography>
                </Link>
            </Box>

            {/*GITHUB*/}
            <Box
                sx={{
                    p:2,
                    display:"flex",
                    alignItems:"center",
                }}
            >
                <Avatar
                    variant="square"
                    sx={{
                        display: "inline-block",
                        height: "60px",
                        width: "60px",
                    }}
                    src={github_logo}/>
                <Box sx={{ display: 'block', width: '30px' }} />
                <Link
                    color={"rgb(0, 0, 0)"}
                    href={"https://github.com/joe-albert"}
                >
                    <Typography sx={{
                        fontSize: "28px",
                        justifyContent: "center",
                        alignItems: "center",
                    }} variant="h3" display={"inline"}>github.com/joe-albert</Typography>
                </Link>
            </Box>

            {/*LINKEDIN*/}
            <Box
                sx={{
                    p:2,
                    display:"flex",
                    alignItems:"center",
                }}
            >
                <Avatar
                    variant="square"
                    sx={{
                        display: "inline-block",
                        height: "60px",
                        width: "60px",
                    }}
                    src={linkedin_logo}/>
                <Box sx={{ display: 'block', width: '30px' }} />
                <Link
                    color={"rgb(0, 0, 0)"}
                    href={"https://linkedin.com/in/joseph-albert/"}
                >
                    <Typography sx={{
                        fontSize: "28px",
                        justifyContent: "center",
                        alignItems: "center",
                    }} variant="h3" display={"inline"}>linkedin.com/in/joseph-albert/</Typography>
                </Link>
            </Box>
        </Box>
    );
}

export default ContactSection;
