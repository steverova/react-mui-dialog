import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

const COLORS = {
  success: {
    text: "text-green-700",
    bg: "bg-green-600",
    bg_soft: "bg-green-100",
  },
  warning: {
    text: "text-orange-500",
    bg: "bg-orange-500",
    bg_soft: "bg-orange-100",
  },
  error: {
    text: "text-red-500",
    bg: "bg-red-500",
    bg_soft: "bg-red-100",
  },
  info: {
    text: "text-blue-500",
    bg: "bg-blue-500",
    bg_soft: "bg-blue-100",
  },
  primary: {
    text: "text-blue-500",
    bg: "bg-blue-500",
    bg_soft: "bg-blue-100",
  },
};

const Icons = {
  primary: <DoneRoundedIcon fontSize='large' className={COLORS["primary"]?.text} />,
  success: <CheckCircleOutlinedIcon fontSize='large' className={COLORS["success"]?.text} />,
  warning: <WarningAmberRoundedIcon fontSize='large' className={COLORS["warning"]?.text} />,
  error: <ReportGmailerrorredIcon fontSize='large' className={COLORS["error"]?.text} />,
  info: <InfoOutlinedIcon fontSize='large' className={COLORS["info"]?.text} />,
};

export default Icons;
