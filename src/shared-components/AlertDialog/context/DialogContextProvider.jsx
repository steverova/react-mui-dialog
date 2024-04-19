import { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import AlertDialogComponent from "../Dialog";
import DialogManager from "../DialogManager";

/**
 * Contexto para proporcionar acceso global al estado del diálogo.
 * @type {React.Context}
 */
export const DialogContext = createContext();

/**
 * Proveedor de contexto para el estado del diálogo.
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Los elementos secundarios que se envolverán con el proveedor de diálogo.
 * @returns {JSX.Element} - El componente del proveedor de diálogo.
 */
export const DialogProvider = ({ children }) => {
  const { isOpen, options, AlertDialog } = DialogManager();

  /**
   * Valor del contexto del proveedor de diálogo.
   * @type {object}
   */
  const contextValue = useMemo(
    () => ({
      isOpen,
      AlertDialog,
    }),
    [AlertDialog, isOpen]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      <AlertDialogComponent options={options} />
      {children}
    </DialogContext.Provider>
  );
};

DialogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};



