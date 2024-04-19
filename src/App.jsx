import Button from '@mui/material/Button';
import { Stack, Container, Box } from '@mui/material';
import useDialog from './shared-components/AlertDialog/context/useDialog';


export default function App() {

  const { AlertDialog } = useDialog();

  const successHandler = async () => {
    const response = await AlertDialog.success({
      title: "success",
      message: "Se abrio el success",
    });

    console.log("respuesta del dialog", response);
  };

  const warningHandler = async () => {
    const response = await AlertDialog.warning({
      title: "warning",
      message: "Se abrio el success",
    });

    console.log("respuesta del dialog", response);
  };

  const errorHandler = async () => {
    const response = await AlertDialog.error({
      title: "error",
      message: "Se abrio el error",
    });

    console.log("respuesta del error", response);
  };

  const infoHandler = async () => {
    const response = await AlertDialog.info({
      title: "info",
      message: "Se abrio el info",
    });

    console.log("respuesta del info", response);
  };

  const okHandler = async () => {
    const response = await AlertDialog.ok({
      title: "ok",
      message: "Se abrio el ok",
    });

    console.log("respuesta del dialog", response);
  };


  return (
    <>
      <Container className='bg-green-100 '>
        <Box className='flex flex-row items-center content-center p-12 ' >
          <Stack spacing={3} direction='row'>
            <Button onClick={() => okHandler()} variant='contained' color='primary'>Ok</Button>
            <Button onClick={() => successHandler()} variant='contained' color='success'>Success</Button>
            <Button onClick={() => infoHandler()} variant='contained' color='info'>Info</Button>
            <Button onClick={() => warningHandler()} variant='contained' color='warning'>Warning</Button>
            <Button onClick={() => errorHandler()} variant='contained' color='error'>Error</Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}