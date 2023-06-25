import CardContent from '@mui/material/CardContent';

import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const App = () => {
  return (
    <>
     <CardContent>
       <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </CardContent>
    </>
  );
}

export default App;
