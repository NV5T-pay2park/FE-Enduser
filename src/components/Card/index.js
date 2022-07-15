
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { PropTypes } from 'prop-types';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

Card.propTypes = {
    value: PropTypes.object,
};

function Card({ value }) {
    return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" >
                {value.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {(value.address.length <= 35) ? value.address : value.address.substr(0, 35) + "..."}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {value.timeWorking}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Xem thêm
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {value.status === "available" ? <div style={{color:'green'}}> Còn chỗ</div> : <div style={{color: 'red'}}> Hết chỗ</div> }
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Card;