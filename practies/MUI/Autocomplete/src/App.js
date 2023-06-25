import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }]

const App = () => {
  return (
    <>
     <CardContent>
      <Grid container spacing={3}>
        <Grid md={4}></Grid>
        <Grid md={4} sx={{p:2}}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Grid>
        
      </Grid>  
     </CardContent>
    </>
  );
}

export default App;
