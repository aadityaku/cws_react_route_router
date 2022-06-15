import { Container,Typography } from "@mui/material";

export default function Banner(){
    return (
        <Container maxWidth="xl" sx={{backgroundColor:"#00aeff", height:500 , flex:1,padding:"30px"}}>
           <Container>
           <Typography variant="lead" component="div"  sx={{ flexGrow:1,fontWeight:"200" , color:"white",marginTop:10 ,fontSize:"75px" }}>
            Skill Hai! To Future Hai!

               </Typography>
           <Typography variant="lead" sx={{flex:4,flexDirection:"row",color:"white",fontSize:19,marginTop:4,lineHeight:1}}> "CWS is an on-demand marketplace for top Programming engineers, developers, consultants, architects, programmers,<br/> and tutors. Get your projects built by vetted web programming freelancers or learn from expert mentors with team <br/> training & coaching experiences in Project based training."</Typography>
           </Container>
            
        </Container>
    )
}