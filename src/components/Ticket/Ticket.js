import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Ticket = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image="./qr.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
            Chưa thanh toán
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          id: 1245234323
        </Typography>
        <Typography variant="h7" color="text.secondary">
          Giờ vào: 23h59p
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

export default Ticket