import { CardActionArea, CardMedia,Card, Typography,CardContent } from "@mui/material";

export default function StudentList(props){
    return (
        
            
                
    <Card sx={{height:280}} >
        
        <CardMedia
          component="img"
          height="160"
          image={props.image}
          alt="green iguana"
        />
        <CardContent  sx={{justifyContent:"center",alignItems:"center",textAlign:"center"}} >
          <Typography  variant="h5" sx={{fontSize:16}} component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:13,marginTop:1}}>
         {props.post}
        </Typography>
          <Typography variant="body3" gutterBottom color="text.secondary" sx={{fontSize:10,marginTop:1}}>
        @ {props.company}
        </Typography>
        </CardContent>
      
    </Card>

           
      
    )
}