import { FormControl, formControlClasses } from "@mui/material";
import { styled } from '@mui/material/styles';

const CustomFormControl = styled(FormControl)(({ theme, sx }) => ({
    [theme.breakpoints.down("sm")]: {
        [`&.${formControlClasses.root}`]: {
            marginBottom: theme.spacing(2),
            width: "100%"
        }
    },
    [theme.breakpoints.up("sm")]: {
        [`&.${formControlClasses.root}`]: {
            marginRight: theme.spacing(1),
            width: 205
        }
    },
}));

export default CustomFormControl;