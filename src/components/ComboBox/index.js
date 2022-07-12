import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

ComboBox.propTypes = {
    listName: PropTypes.array,
};

function ComboBox({ listName }) {
    return (
        <div>
            <Stack spacing={2} sx={{ width: '70%' }}>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={listName.map((option) => option.title)}
                    renderInput={(params) => <TextField {...params} label="Tìm kiếm nhà xe" />}
                />
            </Stack>
        </div>
    );
}

export default ComboBox;