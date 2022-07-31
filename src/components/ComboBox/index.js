import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const Stack = React.lazy(() => import('@mui/material/Stack'))
const TextField = React.lazy(() => import('@mui/material/TextField'))

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