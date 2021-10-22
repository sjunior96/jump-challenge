import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const FormBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: theme.spacing(2),
    "& .desktop": {
        display: "flex"
    }
}));

export default FormBox;