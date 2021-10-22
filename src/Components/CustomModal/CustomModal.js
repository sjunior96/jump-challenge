import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Table from '../../Components/Table/Table';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const FormBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
}));

const serviceLabels = [
    { id: 'serviceId', label: 'ID', width: 100, align: 'left', },
    { id: 'description', label: 'Descrição', width: 100, align: 'left', },
    { id: 'amount', label: 'Valor', width: 100, align: 'left', format: (value) => parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) },
];

export default function CustomModal({ open, handleModalClose, data, labels, title }) {
    return (
        <div>
            <Dialog
                fullWidth
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleModalClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{ fontWeight: "600" }}>{title || "Modal"}</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: "column" }}>
                    {labels.map((label) => (
                        <FormBox>
                            <Typography>{label.text}: </Typography>
                            {label.valueGetter ? (
                                <Typography sx={{ fontWeight: "600" }}>{label.valueGetter(data[label.field])}</Typography>
                            ) : (
                                label.field === "services" && data[label.field].length ? (
                                    <Table
                                        data={data[label.field]}
                                        columns={serviceLabels}
                                    />
                                ) : data[label.field] !== null && <Typography sx={{ fontWeight: "600" }}>{data[label.field]}</Typography>
                            )}
                            <Divider />
                        </FormBox>
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleModalClose}>Fechar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
