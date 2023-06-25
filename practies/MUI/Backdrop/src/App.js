import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';

const App = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Card sx={{p:2}}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


        </Card>
      </Backdrop>
    </div>
  );
}

export default App;
