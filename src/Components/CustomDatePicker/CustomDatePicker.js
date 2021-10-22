import * as React from 'react';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import CustomFormControl from '../CustomFormControl/CustomFormControl';

export default function CustomDatePicker({ label, onChange, name, value }) {
    return (
        <CustomFormControl>
            <DatePicker
                mask="__/__/____"
                disableFuture
                minDate={new Date('2017-01-02')}
                label={label || "Selecione"}
                views={['year', 'month', 'day']}
                value={value}
                onChange={(newValue) => onChange({ target: { name: name, value: newValue } })}
                renderInput={(params) => <TextField {...params} />}
            />
        </CustomFormControl>
    );
}
