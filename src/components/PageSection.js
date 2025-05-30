import React from "react";
import {
    Box, Typography
} from "@mui/material";

const PageSection = ({header, children}) => {

    return (
        <Box
            id={header + "Section"}
        >
            <Typography
                variant="h2"
                sx={{
                    paddingLeft: 3,
                    color: "white",
                    backgroundColor: "#1976d2",
                }}
            >{header}</Typography>
            <Box sx={{p:3}}>
                {children}
            </Box>
        </Box>
    );
}

export default PageSection;
