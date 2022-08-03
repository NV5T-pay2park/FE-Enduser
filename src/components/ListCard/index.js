import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton, Paper, Skeleton } from '@mui/material';

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
                                <Suspense fallback={<Skeleton variant="rectangular" />}>
                                    <ParkingCard value={value}/>
                                </Suspense>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Paper>
    );
}

export default ListCard;