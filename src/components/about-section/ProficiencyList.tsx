import * as React from "react";
import {
    Box, Typography
} from "@mui/material";

import {Proficiency} from "../../types/Proficiency.interface";

type props = {
    proficiency: Proficiency;
};

const SchoolCard = ({ proficiency }: props) => {

    return (
        <Box>
            <Typography display={"inline"} variant="h3"
                        sx={{
                            fontSize: "16px",
                            fontWeight: "bold",
                        }}
            >{proficiency.title}: </Typography>
            <Typography display={"inline"}>{proficiency.skills.join(", ")}</Typography>
        </Box>
    );
}

export default SchoolCard;
