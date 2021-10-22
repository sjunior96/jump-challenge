import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CustomFormControl from '../CustomFormControl/CustomFormControl';

const CustomSelect = ({ options, value, onChange, name }) => {
    return (
        <CustomFormControl>
            <InputLabel id="situationOperation">Situação da Operação</InputLabel>
            <Select
                labelId="situationOperation"
                /* id="demo-simple-select-helper" */
                value={value}
                label="Situação da Operação"
                onChange={onChange}
                name={name}
            >
                <MenuItem value="">Todos</MenuItem>
                {options.map((option) => (
                    <MenuItem value={option.situationId}>{option.situationName}</MenuItem>
                ))}
            </Select>
        </CustomFormControl>
    );
};

export default CustomSelect;