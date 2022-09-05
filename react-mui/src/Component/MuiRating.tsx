import { Favorite, FavoriteBorderSharp, SentimentDissatisfiedOutlined, SentimentDissatisfiedSharp } from '@mui/icons-material';
import { Rating, Stack, Typography } from '@mui/material'
import React from 'react'

const MuiRating = () => {
    const [value, setValue] = React.useState<number | null>(null);
    const [emotion,setEmotion] = React.useState<number | null>(null);
    console.log(value);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {  
        setValue(newValue);
    }
    const handleEmotionChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setEmotion(newValue);
    }
  return (
    <Stack spacing={4}>
        <Rating 
            value = {value} 
            onChange = {handleChange} 
            precision={0.5}
            icon ={<Favorite fontSize='inherit' color = 'error' />}
            emptyIcon={<FavoriteBorderSharp fontSize='inherit'/>}
            max={10}
        />
        <Typography variant = 'h3'>Select your reaction</Typography>
        <Rating
            value = {emotion}
            onChange = {handleEmotionChange}
            icon = {<SentimentDissatisfiedSharp/>}
            emptyIcon={<SentimentDissatisfiedOutlined/>}
        />
    </Stack>
  )
}

export default MuiRating