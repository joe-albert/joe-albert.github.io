import React from "react";
import {
    Box, Typography,
} from "@mui/material";

const ProficiencyList = ({title, skillList}) => {
    return (
        <Box>
            <Typography display={"inline"} variant="h3"
                        sx={{
                            fontSize: "16px",
                            fontWeight: "bold",
                        }}
            >{title}: </Typography>
            <Typography display={"inline"}>{skillList}</Typography>
        </Box>
    );
}

export default ProficiencyList;
