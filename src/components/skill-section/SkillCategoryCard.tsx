import * as React from "react";
import {
    Avatar,
    Box, Card, CardContent, Divider, Typography
} from "@mui/material";

import {SkillCategory} from "../../types/SkillCategory.interface";

type props = {
    skillCategory: SkillCategory;
};

const SkillCategoryCard = ({ skillCategory }: props) => {

    const skillIcons = skillCategory.skills.map((skill) => (
        <Box>
            <Box
            sx={{
                display: "flex",
                maxWidth: "80px",
                flexDirection: "column",
                alignItems: "center",
            }}
            >
                <Avatar
                    variant={"square"}
                    sx={{
                        width: "80px",
                        height: "80px",
                    }}
                    src={skill.logo}/>
                <Typography
                    align={"center"}
                    sx={{
                        paddingTop: "5px",
                        textWrap: "wrap",
                    }}
                >{skill.name}</Typography>
            </Box>

        </Box>
    ))

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
            }}
        >
            <Card
            sx={{
                width: {sm:"100%", md:"90%", lg:"70%", xl:"60%"},
            }}
            >
                {/* CARD HEADER */}
                <Box
                    sx={{
                        p:2,
                        display:"flex",
                        alignItems:"center",
                    }}
                >
                    <Typography sx={{
                            fontSize: "28px",
                            justifyContent: "center",
                            alignItems: "center",
                        }} variant="h3" display={"inline"}>{skillCategory.name}</Typography>


                </Box>
                <Divider variant="middle" />

                {/* CARD CONTENT */}
                <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    rowGap: "20px",
                    columnGap: "100px",
                }}
                >
                    {skillIcons}
                </CardContent>

            </Card>
        </Box>
    );
}

export default SkillCategoryCard;
