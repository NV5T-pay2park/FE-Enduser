import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
           handleChoose(chooseString)
        }, 2000)
    }, [chooseString])

    return (
        <div>
            <Stack spacing={2} sx={{ width: '100%', marginTop: 0.5, marginBottom: 0.75 }}>
                <TextField id="outlined-basic" label="Tìm kiếm nhà xe" variant="outlined" onChange={(e) => setChoosen(e.target.value)} size="small"/>
            </Stack>
        </div>
    );
}

export default ComboBox;