import { Box, Divider, Grid, Paper, Stack } from '@mui/material'
import React from 'react'

const MuiLayout = () => {
  return (
    <Paper sx={{
        padding: '3rem',
        margin: '2rem'
    }} elevation={7}>
    <Stack sx={{
        border: '1px solid red'
    }} direction ='column' m={3} divider={<Divider orientation ='vertical' flexItem/>}>
        <Box
            sx={{
                width: '300px',
                height: '300px',
                backgroundColor: 'red',
                color: 'primary.main',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                border: '1px solid',
                borderColor: 'primary.main',
                borderRadius: '5px',
                p: '1rem',
                m: '1rem',
                textAlign: 'center',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    cursor: 'pointer'
                }
            }}
        >
            MuiLayout
        </Box> 

        <Box
            height ='300px'
            width ='300px'
            display ='flex'
            p={2}
            m={2}
            bgcolor='primary.main'
            color='white'
            fontSize='1.5rem'
            fontWeight='bold'
            border='1px solid'
            borderColor='primary.main'
            borderRadius='5px'
            textAlign='center'
        >
            Direct property added
        </Box>
    </Stack>
    <Box mx={3}>
        <Grid container spacing={2}> 
            {/* columnSpacing={2} rowSpacing={2}> */}
            <Grid item xs={4} sm={12} border='1px solid white'>
                <Box bgcolor='primary.main' p={3}>Item 1</Box>
            </Grid>
            <Grid item xs={8} sm={12} border='1px solid white'>
                <Box bgcolor='primary.main' p={3}>Item 2</Box>
            </Grid>
            <Grid item xs={6}  sm={12} border='1px solid white'>
                <Box bgcolor='primary.main' p={3}>Item 3</Box>
            </Grid>
            <Grid item xs={6} sm={12}>
                <Box bgcolor='primary.main' p={3}>Item 4</Box>
            </Grid>
        </Grid>
    </Box>
    </Paper>
  )
}

export default MuiLayout