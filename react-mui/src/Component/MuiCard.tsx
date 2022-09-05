import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia
                image='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                title='Contemplative Reptile'
                component='img'
                height='200px'
            />
            <CardContent>
                <Typography variant='h5' component='div' gutterBottom>
                    React
                </Typography>
                <Typography variant='body2' component='div' color='primary.main'>
                    React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
                </Typography>
                <CardActions>
                    <Button size='small' color='primary'>Learn More</Button>
                    <Button size='small' color='primary'>Share</Button>
                </CardActions>
            </CardContent>
        </Card>
    </Box>
  )
}

export default MuiCard