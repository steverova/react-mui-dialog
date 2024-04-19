import { useContext } from 'react'
import { DialogContext } from './DialogContextProvider'
const useDialog = () => useContext(DialogContext);

export default useDialog;