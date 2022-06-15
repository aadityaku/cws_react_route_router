import { Container, Grid, Typography } from "@mui/material";

import { useState } from "react";
import CourseList from "./CourseList";

export default function  Course(props){
    let[course,setCourse]=useState(props.course);
   return (
    <Container> 
        <Typography sx={{borderWidth:5, marginTop:5,fontSize:22,flexDirection:"row"}} style={{borderLeft:"5px solid grey"}}><Typography sx={{fontSize:22,marginLeft:1,fontWeight:"bold"}}>Our Courses</Typography></Typography>
    <Grid container spacing={2} sx={{marginTop:3}}>
        
        
        {
            course.map((key,value)=>(
                <Grid item xs={2} key={key}>
                    <CourseList title={key.title} image={key.image} duration={key.duration} />
                </Grid>
            ))
        }
        
    </Grid>
    </Container>
   )
}