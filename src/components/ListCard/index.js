import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

ListCard.propTypes = {
    list: PropTypes.array,
};

function ListCard({ list }) {

    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {list.map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value.id}`;
                    return (
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    src={`/src/img/Garage/img.png`}
                                >
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={value.name} secondary={value.address}></ListItemText>
                        </ListItemButton>
                    )
                })}
            </List>
        </div>
    );
}

export default ListCard;