import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './styles.css';

/*export const MaterialUIBasicElements = () => {
  return (
    
  );*/

export function MaterialUIBasicElements() {
  return (
    <div>
      <Button variant="contained">Kliknij mnie</Button>

      <Stack direction="row" spacing={2}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
    </div>
  );
}
