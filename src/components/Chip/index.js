import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const DirectionsCarIcon = React.lazy(() => import('@mui/icons-material/DirectionsCar'));
const TwoWheelerIcon = React.lazy(() => import('@mui/icons-material/TwoWheeler'))
const Chip = React.lazy(() => import('@mui/material/Chip'))
const Stack = React.lazy(() => import('@mui/material/Stack'))

FilterChip.propTypes = {
    handleChoose:  PropTypes.func,
};

function FilterChip({handleChoose})  {

    const [chooseBike, setChooseBike] = useState(true);
    const [chooseCar, setChooseCar] = useState(false);

    const onChange = () => {
        var tempFilter = []
        
        if (chooseBike)
            tempFilter.push("1");

        if (chooseCar)
            tempFilter.push("2");

        handleChoose(tempFilter);
    }

    useEffect(onChange, [chooseBike, chooseCar]);

    const handleOnClickBike = () => {
        if (chooseBike) { 
            setChooseBike(false);
            return;            
        }
        setChooseBike(true);
    
    }

     const handleOnClickCar = () => {
        if (chooseCar) {
            setChooseCar(false);
            return;            
        }
        setChooseCar(true);
    }

    return (
        <Stack direction= "column" spacing={0.5}>
            <Chip   label="Xe máy" 
                    icon={<TwoWheelerIcon />} 
                    variant={chooseBike ? "outlined" : "filled"} 
                    clickable onClick={() => handleOnClickBike()} 
                    color={chooseBike ? "primary" : "default"}     
                    size="small"   
            />
            <Chip 
                    label="Xe ô tô" 
                    icon={<DirectionsCarIcon />} 
                    variant={chooseCar ? "outlined" : "filled"} 
                    clickable onClick={() => handleOnClickCar() } 
                    color={chooseCar ? "primary" : "default"}
                    size="small"
            />
        </Stack>
    )
}

export default FilterChip;