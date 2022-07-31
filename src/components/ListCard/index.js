import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ParkingCard from '../Card/ParkingCard';

ListCard.propTypes = {
    list: PropTypes.array,
    location: PropTypes.object,
};

function ListCard({ list, location }) {

    var myStyle = {
        height: 'calc(100vh - 172px)',
        overflow: 'auto',
        bgcolor: '#f6f7f8',
    }

    const navigate = useNavigate();
    if (list === null || list === undefined)
        list = [] 

    const getState = (v) => {
        return {
            id: v.id,
            location: location,
        }
    }
    // 
    return (
        <Paper style={myStyle}>
            <List sx={{ width: '100%', bgcolor: '#f6f7f8' }}>
                {list.map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value.id}`;
                    return (
                        <ListItem key={value.id}
                            disablePadding>
                            <ListItemButton onClick={() => navigate('/search/detail', {state: {id: value.id, location: location}}) }  >
                                <ParkingCard value={value}/>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Paper>
    );
}

export default ListCard;