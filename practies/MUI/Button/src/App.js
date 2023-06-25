import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const App = () => {
  return (
    <>
     <CardContent>
      <Grid container spacing={3}>
        <Grid md={4}></Grid>
        <Grid md={4} sx={{p:2}}>
          <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </Grid>
        
      </Grid>  
     </CardContent>
    </>
  );
}

export default App;
