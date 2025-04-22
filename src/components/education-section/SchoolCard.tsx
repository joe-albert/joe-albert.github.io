import * as React from "react";
import {
    Box, Card, CardContent, List, ListItem, Typography
} from "@mui/material";

import {School} from "../../types/School.interface";

type props = {
    school: School;
};

const SchoolCard = ({ school }: props) => {

    let courseWork: any;

    if (school.relevantCoursework) {
        courseWork = school.relevantCoursework.map(course => (
            <ListItem
                sx={{
                    display: "list-item",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                }}>
                <Typography>
                    {course}
                </Typography>
            </ListItem>
        ));
    }
    return (
        <Box
        >
            <Card
            >
                {/* CARD CONTENT */}
                <CardContent>
                    <Typography sx={{
                        fontSize: "28px",
                        justifyContent: "center",
                        alignItems: "center",
                    }} variant="h3">{school.name}</Typography>
                    <Typography>
                        {school.location}
                    </Typography>
                    { school.degree ?
                        <Typography>
                            <strong>Degree: </strong>{school.degree}
                        </Typography> : ''
                    }
                    { school.gpa ?
                        <Typography sx={{}}>
                            <strong>GPA: </strong>{school.gpa}
                        </Typography> : ''
                    }

                    {courseWork ?
                    <Box>
                        <Box sx={{ display: 'block', height: '20px' }} />
                        <Typography sx={{}}>
                            <strong>Relevant Coursework: </strong>
                        </Typography>
                        <List
                            sx={{
                                listStyle: "disc",
                                paddingLeft: 2,
                                paddingRight: 2
                            }}
                        >
                            {courseWork}
                        </List>
                    </Box>
                        : ''
                    }
                </CardContent>

            </Card>
        </Box>
    );
}

export default SchoolCard;
