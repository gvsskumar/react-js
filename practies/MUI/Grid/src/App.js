import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
const App = () => {
  return (
    <>
     <CardContent>
      <Grid container spacing={3}>
        <Grid md={4}>
          <Card sx={{ m:2,p:2 }}>Welcome to SunGlobal1</Card>
        </Grid>
        <Grid md={4}>
          <Card sx={{ m:2,p:2 }}>Welcome to SunGlobal2</Card>
        </Grid>
        <Grid md={4}>
          <Card sx={{ m:2,p:2 }}>Welcome to SunGlobal3</Card>
        </Grid>
      </Grid>
     </CardContent>
    </>
  );
}

export default App;
