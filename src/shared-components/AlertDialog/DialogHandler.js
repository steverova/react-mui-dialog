import { useState } from "react";
import { COLORS, DEFAULT_OPTIONS } from "./helper";

/**
 * @memberof module:React
 * Hook for handling dialog opening.
 * @returns {{
 *  openDialog: openDialogFunction,
 *  options: Object
 * }}
 */
const useDialogHandler = () => {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  /**
   * @typedef  openDialog
   * @property {boolean} open - Whether the dialog is open.
   * @property {string} variant - The variant of the dialog.
   */

  /** @param {openDialog} options */
  const openDialog = async (options) => {
    return new Promise((resolve) => {
      const handleClose = (result) => {
        resolve(result);
        options.open(false);
      };

      setOptions({
        variant: options.variant,
        title: options.title,
        message: options.message,
        icon: options.icon,
        color: COLORS[options.variant],
        handleClose,
      });
      options.open(true);
    });
  };

  return { openDialog, options };
};

export default useDialogHandler;
