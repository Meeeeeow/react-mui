import React from 'react';
import './App.css';
import {AppBar, CssBaseline, Toolbar, Typography, Grid, Button, Stack,Card, CardActions, CardContent, CardMedia, Link} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material';
import { Container } from '@mui/system';


function App() {
  const cards = [1,2,3,4,5,6,7,8,9];
  return (
    
    <div className="App">
        <>
          <CssBaseline/>
          <AppBar position = 'static'>
            <Toolbar>
              <PhotoCamera 
                fontSize = 'medium'
                sx={{
                  mr:2
                }} 
              />
              <Typography variant = 'h6' sx={{
                fontWeight:'500'
              }}>Album layout</Typography>
            </Toolbar>
          </AppBar>
          <main>
            <Container maxWidth='sm'
              sx={{
                pt: 10,
                pb: 8
              }}
            >
                <Typography
                  variant = 'h3'
                  align='center'
                  component='h1'
                  color = 'text.primary'
                  gutterBottom
                >
                  Album layout
                </Typography>
                <Typography
                  variant = 'h5'
                  align='center'
                  color = 'text.secondary'
                  mt = {2}
                  gutterBottom
                  paragraph
                >
                  Something short and fascinating about the collections below that fascinates me -its content, creator. They are like the best in the world.
                </Typography>

                <Stack 
                  spacing = {2}
                  direction = 'row'
                  justifyContent='center'
                  sx={{
                    mt : 5
                  }}
                >
                    <Button variant='contained'>
                      View Profile
                    </Button>

                    <Button variant = 'outlined'>
                      Go to Album
                    </Button>
                </Stack>
            </Container>
            <Container maxWidth='md' sx={{ pb:12}}>
              <Grid container spacing={4}>
              {cards.map(card => (
                <Grid item xs={12} sm={6} md={4}>
                  
                  <Card
                    key={card}
                    sx={{
                      height: '100%',
                      display:'flex',
                      flexDirection:'column'
                    }}
                  >
                    <CardMedia
                      image='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                      title='Contemplative Reptile'
                      component='img'
                      height = '200px'
                    />
                    <CardContent
                      sx={{
                        pb: 1
                      }}
                    >
                        <Typography gutterBottom variant='h5' component='h2'>
                            Heading
                        </Typography>
                        <Typography variant='body1' color='textPrimary' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is a card section. You can describe the content here.
                        </Typography>

                        <CardActions
                          sx={{
                            p:0,
                            mt:3
                          }}
                        >
                          <Button 
                            size='small' 
                            color='primary' 
                            sx={{
                              fontWeight:'700'
                            }}
                          >View</Button>
                          <Button 
                            size='small' 
                            color='primary' 
                            sx={{
                              fontWeight:'700'
                            }}
                          >Edit</Button>
                        </CardActions>
                    </CardContent>  
                  </Card>
                </Grid>  
              ))}
              </Grid>
            </Container>
          </main>
          <Typography
            variant = 'h5'
            component = 'h2'
            align = 'center'
            color = 'text.primary'
            sx={{
              fontWeight:'600'
            }}
          >
            	Footer
          </Typography>
          <Typography 
            variant='h6'
            align='center'
            color = 'text.secondary'
            mt={2}
          >
            Something in your life has purpose!
          </Typography>
          <Typography 
            variant='body2' 
            color='text.secondary'
            align='center'
            sx={{
              mb:5
            }}
          >
          {'Copyright © '}
          <Link color='inherit' href="https://google.com">
              My Websilte
          </Link>{' '}
          {new Date().getFullYear()}.
          </Typography>
        </>

    </div>
  );
}

export default App;
