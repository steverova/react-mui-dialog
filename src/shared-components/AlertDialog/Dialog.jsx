import PropTypes from "prop-types";
import useDialog from "./context/useDialog";
import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";

/**
 * Componente de diálogo de alerta.
 * @param {Object} options - Opciones para configurar el diálogo.
 * @param {string} options.title - Título del diálogo.
 * @param {string} options.message - Mensaje del diálogo.
 * @param {React.Element} options.icon - Icono del diálogo.
 * @param {Object} options.color - Colores del diálogo.
 * @param {string} options.color.bg - Color de fondo del botón de aceptar.
 * @param {string} options.color.bg_soft - Color de fondo suave.
 * @param {Function} options.handleClose - Función para manejar el cierre del diálogo.
 * @returns {JSX.Element} Componente del diálogo de alerta.
 */
export default function AlertDialogComponent({ options }) {
  const { title, message, icon, color, handleClose, variant } = options;
  const { bg, bg_soft } = color;
  const { isOpen } = useDialog();

  return (
    <>
      <Dialog
        fullWidth
        maxWidth='xs'
        open={isOpen}
        PaperProps={{
          elevation: 0,
          sx: { borderRadius: "12px" }
        }}
      >
        <Box className='p-4'>
          <Box className='flex flex-row gap-5'>
            <Box >
              <Box className={`${bg_soft} p-2 rounded-full`}>
                {icon}
              </Box>
            </Box>
            <Box className='me-5'>
              <Typography sx={{ fontWeight: 'bold' }}>
                {title}
              </Typography>
              <DialogContent sx={{ p: 0 }}>
                <Typography className='text-justify'>
                  {message}
                </Typography>
              </DialogContent>
            </Box>
          </Box>
          <DialogActions>
            {variant === 'primary' ? (<div>
              <Button disableElevation className={`${bg}`} style={{ textTransform: 'none' }} variant='contained' color={variant} onClick={() => handleClose(true)}>Ok</Button>
            </div>) : (<div>
              <Button style={{ textTransform: 'none' }} color={variant} onClick={() => handleClose(false)}>Cancel</Button>
              <Button disableElevation className={`${bg}`} style={{ textTransform: 'none' }} variant='contained' color={variant} onClick={() => handleClose(true)}>Accept</Button>
            </div>)}
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}

AlertDialogComponent.propTypes = {
  options: PropTypes.shape({
    title: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    color: PropTypes.shape({
      bg: PropTypes.string.isRequired,
      bg_soft: PropTypes.string.isRequired,
    }).isRequired,
    handleClose: PropTypes.func,
  }).isRequired,
};
