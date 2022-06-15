import {AppBar,Button,Toolbar,Typography} from "@mui/material";

import { Link } from "react-router-dom";
const Header = () =>{
    return (
       <AppBar position="static" sx={{backgroundColor:"primary", color:"white",boxShadow:"inherit"}}>
           <Toolbar>
               <Typography variant="h5" component="h5"  sx={{ flexGrow:1, marginLeft:20,fontSize:"4" }}>
                   Code with Sadique
               </Typography>
              <Button color="inherit" sx={{marginRight:1,fontSize:16}} component={Link} to="/">Home</Button>
              <Button color="inherit" sx={{marginRight:1,fontSize:16}}>Courses</Button>
              <Button color="inherit" sx={{marginRight:1,fontSize:16}}>Online Payment</Button>
              <Button color="inherit" sx={{marginRight:1,color:"blue",fontSize:16}} style={{backgroundColor:"yellow"}} component={Link} to="/apply">Apply For Addmission</Button>
           </Toolbar>
        </AppBar>
    )
}
export default Header;