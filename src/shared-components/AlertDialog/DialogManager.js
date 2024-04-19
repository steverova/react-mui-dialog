import { useState } from "react";
import Icons from "./Icons";
import useDialogHandler from "./DialogHandler";

/**
 * DialogManager component manages the state of dialog boxes and provides methods to open different types of dialogs.
 * @returns {{
 *  isOpen: boolean,
 *  options: object,
 *  AlertDialog: {
 *    open: Function,
 *    close: Function,
 *    success: Function,
 *    warning: Function,
 *    error: Function,
 *    info: Function
 *  }
 * }}
 */
const DialogManager = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { options, openDialog } = useDialogHandler();

  /**
   * Handler to toggle the visibility of the dialog.
   * @param {boolean} value - The new value for the isOpen state.
   */
  const openHandler = (value) => {
    setIsOpen(value);
  };

  /**
   * Object containing methods to open different types of dialogs.
   * @type {{
   *  open: Function,
   *  close: Function,
   *  success: Function,
   *  warning: Function,
   *  error: Function,
   *  info: Function
   * }}
   */
  const AlertDialog = {
    /**
     * Opens a success dialog.
     * @param {object} params - Parameters for the success dialog.
     * @param {string} params.title - Title of the dialog.
     * @param {string} params.message - Message content of the dialog.
     */
    ok: async ({ title, message }) =>
      await openDialog({
        variant:"primary",
        title,
        message,
        icon: Icons.primary,
        open: openHandler,
      }),
    success: async ({ title, message }) =>
      await openDialog({
        variant: "success",
        title,
        message,
        icon: Icons.success,
        open: openHandler,
      }),

    /**
     * Opens a warning dialog.
     * @param {object} params - Parameters for the warning dialog.
     * @param {string} params.title - Title of the dialog.
     * @param {string} params.message - Message content of the dialog.
     */
    warning: async ({ title, message }) =>
      await openDialog({
        variant: "warning",
        title,
        message,
        icon: Icons.warning,
        open: openHandler,
      }),

    /**
     * Opens an error dialog.
     * @param {object} params - Parameters for the error dialog.
     * @param {string} params.title - Title of the dialog.
     * @param {string} params.message - Message content of the dialog.
     */
    error: async ({ title, message }) =>
      await openDialog({
        variant: "error",
        title,
        message,
        icon: Icons.error,
        open: openHandler,
      }),

    /**
     * Opens an info dialog.
     * @param {object} params - Parameters for the info dialog.
     * @param {string} params.title - Title of the dialog.
     * @param {string} params.message - Message content of the dialog.
     */
    info: async ({ title, message }) =>
      await openDialog({
        variant: "info",
        title,
        message,
        icon: Icons.info,
        open: openHandler,
      }),
  };

  return { isOpen, options, AlertDialog };
};

DialogManager.propTypes = {};

export default DialogManager;
