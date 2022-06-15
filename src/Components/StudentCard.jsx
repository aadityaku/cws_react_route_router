import { Container, Grid, Typography } from "@mui/material";

import { useState } from "react";
import StudentList from "./StudentList";


export default function  Student(props){
    let[student,setStudent]=useState(props.student);
   return (
    <Container> 
        <Typography sx={{borderWidth:5, marginTop:5,fontSize:22,flexDirection:"row"}} style={{borderLeft:"5px solid grey"}}><Typography sx={{fontSize:22,marginLeft:1,fontWeight:"bold"}}>Students Achievements</Typography></Typography>
    <Grid container spacing={2} sx={{marginTop:3}}>
        
   
        {
            
            student.map((key,value)=>(
                <Grid item xs={2} key={key}>
                    <StudentList name={key.name} image={key.image} post={key.post} company={key.company} />
                </Grid>
               
            ))
        }
        
    </Grid>
    </Container>
   )
}