import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const List = React.lazy(() => import('@mui/material/List'))
const ListItem = React.lazy(() => import('@mui/material/ListItem'))
const ListItemButton = React.lazy(() => import('@mui/material/ListItemButton'))
const Paper = React.lazy(() => import('@mui/material/Paper'))
const ParkingCard = React.lazy(() => import('../Card/ParkingCard'))

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

    // 
    return (
        <Paper style={myStyle}>
            <List sx={{ width: '100%', bgcolor: '#f6f7f8' }}>
                {list.map((value) => {
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