import { CardActionArea, CardMedia,Card, Typography,CardContent } from "@mui/material";

export default function CourseList(props){
    return (
        
            
                
    <Card sx={{height:280}}>
       
        <CardMedia
          component="img"
          height="160"
          image={props.image}
          alt="green iguana"
        />
        <CardContent sx={{justifyContent:"center",alignItems:"center",textAlign:"center"}} >
           
          <Typography  sx={{fontSize:15}} component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" gutterBottom  color="inherit" sx={{fontWeight:"bold" ,marginTop:2}}>
         Duration: {props.duration} months
        </Typography>
      
        </CardContent>
     
    </Card>

           
      
    )
}