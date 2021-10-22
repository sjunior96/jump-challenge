import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Select from '../Components/Select/Select';
import CustomDatePicker from "../Components/CustomDatePicker/CustomDatePicker";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { getFilters, getParks, handleSearchFieldsChange, setSelectedPark } from '../Store/Parks/ParksActions';
import Table from '../Components/Table/Table';
import CustomModal from '../Components/CustomModal/CustomModal';
import { format } from 'date-fns';

const AppContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
        flexGrow: 1,
        width: "100%",
        padding: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: theme.spacing(2),
        alignItems: "center"
    },
}));

const SearchArea = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down("800")]: {
        flexDirection: "column"
    }
}));

const SinglePageApplication = () => {
    const [open, setOpen] = React.useState(false);
    const searchFields = useSelector((state) => state.parksState.searchFields);
    const operationSituations = useSelector((state) => state.parksState.operationSituations);
    const parks = useSelector((state) => state.parksState.parks);
    const selectedPark = useSelector((state) => state.parksState.selectedPark);
    const dispatch = useDispatch();

    const formatPeriod = (period) => {
        let formattedPeriod = [];
        formattedPeriod.push(period.y > 0 ? `${period.y} anos` : "");
        formattedPeriod.push(period.m > 0 ? `${period.m} meses` : "");
        formattedPeriod.push(period.d > 0 ? `${period.d} dias` : "");
        formattedPeriod.push(period.h > 0 ? `${period.h} horas` : "");
        formattedPeriod.push(period.i > 0 ? `${period.i} minutos` : "");
        formattedPeriod.push(period.s > 0 ? `${period.s} segundos` : "");

        return formattedPeriod.filter((value) => value !== "");
    };

    const handleModalOpen = (park) => {
        setOpen(true);
        dispatch(setSelectedPark(park));
    };

    const columns = [
        { id: 'plate', label: 'Placa', width: 100, align: 'center', },
        {
            id: 'typePrice',
            label: 'Tabela',
            width: 100,
            align: 'center',
        },
        {
            id: 'entryDateTime',
            label: 'Entrada',
            width: 100,
            align: 'center',
        },
    ];

    const labels = [
        {
            text: "Placa",
            field: "plate",
        },
        {
            text: "Tabela",
            field: "typePrice",
        },
        {
            text: "ID da Situação",
            field: "situationId"
        },
        {
            text: "Nome da Situação",
            field: "situationName"
        },
        {
            text: "Entrada",
            field: "entryDateTime",
            valueGetter: (params) => `${params && format(new Date(params), 'dd/MM/yyyy HH:mm:ss')}`
        },
        {
            text: "Saída",
            field: "exitDateTime",
            valueGetter: (params) => `${params && format(new Date(params), 'dd/MM/yyyy HH:mm:ss')}`
        },
        {
            text: "Período",
            field: "period",
            valueGetter: (params) => `${params && formatPeriod(params).join(", ")}`
        },
        {
            text: "Id da OS",
            field: "serviceOrderId"
        },
        {
            text: "Serviços",
            field: "services"
        },
        {
            text: "Valor",
            field: "amount",
            valueGetter: (params) => `${params && parseFloat(params).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        },
        {
            text: "Valor dos Serviços",
            field: "amountServices",
            valueGetter: (params) => `${params && parseFloat(params).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        },
        {
            text: "Valor Total",
            field: "amountTotal",
            valueGetter: (params) => `${params && parseFloat(params).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        },
    ];

    React.useEffect(() => {
        dispatch(getFilters());
        dispatch(getParks(searchFields));
    }, []);

    return (
        <AppContainer>
            <SearchArea>
                <Box>
                    <Select
                        name={"situationId"}
                        options={operationSituations}
                        value={searchFields.situationId}
                        onChange={(e) => dispatch(handleSearchFieldsChange(e))}
                    />
                    <CustomDatePicker
                        value={searchFields.startDate}
                        name="startDate"
                        onChange={(e) => dispatch(handleSearchFieldsChange(e))}
                        label="Data de início"
                    />
                    <CustomDatePicker
                        value={searchFields.endDate}
                        name="endDate"
                        onChange={(e) => dispatch(handleSearchFieldsChange(e))}
                        label="Data de término"
                    />
                </Box>

                <Button
                    color="darkBlue"
                    variant="contained"
                    size="large"
                    onClick={() => dispatch(getParks(searchFields))}
                >
                    Pesquisar
                </Button>
            </SearchArea>

            <Table
                columns={columns}
                data={parks}
                rowClickAction={(row) => handleModalOpen(row)}
            />

            <CustomModal
                labels={labels}
                data={selectedPark}
                open={open}
                handleModalClose={() => setOpen(false)}
                title="Detalhamento de registro"
            />
        </AppContainer>
    );
};

export default SinglePageApplication;
