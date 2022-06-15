import { Container, Grid, Typography,Link } from "@mui/material"

export default function Fotter(){
    return (
        <Container  maxWidth="xl" sx={{height:400, flex:1, backgroundColor:"#00aeff",padding:0,marginTop:9}} position="static">
            <Grid container>
                <Grid item xs={3} sx={{margin:9,textAlign:"center"}}>
                       <Typography sx={{color:"white",fontSize:31,fontWeight:"600"}}>CodeWithSadiQ</Typography>
                </Grid>
           
                <Grid item xs={4} sx={{marginTop:8}}>
                    <Grid container>
                        <Grid item xs={6} sx={{marginLeft:1}}>
                            <Typography sx={{color:"white",fontSize:21,fontWeight:"550"}}>Quick Links</Typography>
                            
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"Home"}</Link></Typography>
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"About"}</Link></Typography>
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"Projects"}</Link></Typography>
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"WorkShop"}</Link></Typography>
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"Hire"}</Link></Typography>
                            
                            
                        </Grid>
                        <Grid xs={5} sx={{flex:1,justifyContent:"center",alignItems:"center"}}>
                            <Typography sx={{color:"white",fontSize:21,fontWeight:"550",textAlign:"center"}}>About Class</Typography>
                            <Typography sx={{marginLeft:5}}>
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"About Instructor"}</Link></Typography>
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"MileStones"}</Link></Typography>
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"Vision"}</Link></Typography>
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"Community"}</Link></Typography>
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"Our Team"}</Link></Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            
                <Grid item xs={3} sx={{marginTop:8,marginLeft:2}}>
                        <Typography sx={{color:"white",fontSize:21,fontWeight:"550"}}>Location</Typography>
                        <Typography sx={{}}>
                        <Typography sx={{marginTop:1,color:"whitesmoke"}}>Ramavtar Market, Near Dog Hospital,<br/> Thana Chowk, Gandhinagar, Madhubani, Purnea <br/>- 854301</Typography>
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"+91 95 4680 5580"}</Link></Typography>
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"cwspurnea@gmail.com"}</Link></Typography>
                            <Typography sx={{marginTop:1}}><Link href="#" underline="hover" sx={{color:"white",fontSize:14}}>{"www.codewithsadiq.com"}</Link></Typography>
                        </Typography>

                            
                </Grid>
            </Grid>
            <Typography sx={{marginTop:8,color:"whitesmoke",textAlign:"center"}}>© Code with SadiQ, All rights reserved</Typography>
        </Container>
    )
}