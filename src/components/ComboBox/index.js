import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

ComboBox.propTypes = {
    listName: PropTypes.array,
    handleChoose: PropTypes.func,
};

function ComboBox({ listName, handleChoose }) {
    const [chooseString, setChoosen] = useState('');

    const handleChooseValue = (str) => {
        handleChoose(str);
        setChoosen(str);
    }

    return (
        <div>
            <Stack spacing={2} sx={{ width: '100%', marginTop: 0.25, marginBottom: 0.75 }}>
                <Autocomplete
                    value={chooseString}
                    id="free-solo-demo"
                    freeSolo
                    onChange={(event, value) => handleChooseValue(value)}
                    options={listName.map((option) => option.name)}
                    renderInput={(params) => <TextField {...params} size="small" label="Tìm kiếm nhà xe" />}
                />
            </Stack>
        </div>
    );
}

export default ComboBox;