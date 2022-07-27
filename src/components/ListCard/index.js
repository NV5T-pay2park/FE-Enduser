import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Card from '../Card/index';
import { useNavigate } from 'react-router-dom';
import ParkingCard from '../Card/ParkingCard';

ListCard.propTypes = {
    list: PropTypes.array,
    location: PropTypes.object,
};

function ListCard({ list, location }) {

    var myStyle = {
        height: 'calc(100vh - 106px)',
        overflow: 'auto',
        bgcolor: '#f6f7f8',
    }

    const navigate = useNavigate();
    if (list === null || list === undefined)
        list = [] 

    return (
        <Paper style={myStyle}>
            <List sx={{ width: '100%', maxWidth: 1000, bgcolor: '#f6f7f8' }}>
                {list.map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value.id}`;
                    return (
                        <ListItem key={value.id}
                            disablePadding
                        >
                            <ListItemButton onClick={() => navigate('/search/detail', {id: value.id, location: location})}>
                                {/* <Card value={value} ></Card> */}
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