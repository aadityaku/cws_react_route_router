import { Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material"
export default function Apply(){
    return (
        <Container position="static" maxWidth="xl" sx={{}}>
            <Container sx={{padding:"30px"}}>
           <Card>
               <CardContent>
               
            <Typography sx={{marginTop:1,fontSize:22,flexDirection:"row"}} style={{borderBottom:"2px solid grey",borderWidth:2}}><Typography sx={{fontSize:22,marginLeft:1,fontWeight:"bold"}}>Apply for Addmission</Typography></Typography>
           <Grid container>
               <Grid item xs={12} sx={{marginTop:3}}>
                    
                    <TextField fullWidth label="Name"  />
               </Grid>
            </Grid>
            <Grid container spacing={2} sx={{marginTop:3}}>
               <Grid item xs={6} >
                    
                    <TextField fullWidth label="Father Name" />
               </Grid>
               <Grid item xs={6}>
                    
                    <TextField fullWidth label="Mother Name" />
               </Grid>
            </Grid>
            <Grid container spacing={2} sx={{marginTop:3}}>
               <Grid item xs={6} >
                    
                    <TextField fullWidth label="Contact" />
               </Grid>
               <Grid item xs={6}>
                    
                    <TextField fullWidth label="Email" />
               </Grid>
            </Grid>
            <Grid container spacing={2} sx={{marginTop:3}}>
               <Grid item xs={4} >
                    
                    <TextField fullWidth label="Education" />
               </Grid>
               <Grid item xs={4}>
                    
                    <TextField fullWidth label="Date OF Birth" type="date" />
               </Grid>
               <Grid item xs={4}>
                    
                    {/* <TextField fullWidth label="Gender" />
                    <InputLabel fullWidth id="demo-simple-select-label">Age</InputLabel>
                    <Select fullWidth label="Gender" id="demo-simple-select-label">
                        <MenuItem value={1}>Male</MenuItem>
                        <MenuItem value={2}>Female</MenuItem>
                        <MenuItem value={3}>Others</MenuItem>
                    </Select> */}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age" >
                            <MenuItem value={1}>Male</MenuItem>
                            <MenuItem value={2}>Femal</MenuItem>
                            <MenuItem value={3}>Others</MenuItem>
                        </Select>
                    </FormControl>
               </Grid>
            </Grid>
            <Grid container  sx={{marginTop:3}}>
                  <Grid item xs={12}>
                      <TextField fullWidth label="Address"></TextField>
                  </Grid>
            </Grid>
      
            <Grid container  sx={{marginTop:3}}>
                  <Grid item xs={12}>
                

                  <Button variant="contained"  fullWidth sx={{fontSize:20}}>Apply Now</Button>
                  </Grid>
            </Grid>
      
               </CardContent>
           </Card>
           
           </Container>

        </Container>
    )
}