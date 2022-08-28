import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React from 'react'

const MuiButton = () => {
  const value = 5;  
  const [format, setFormat] = React.useState<string | null>(null);
  const handleFormatChange =(event:React.MouseEvent<HTMLElement>,updatedFormats:string | null)=>{
        setFormat(updatedFormats);
  }
  console.log(format);
  return (
  
    <Stack spacing ={5}>
         {/* button types */}
        <Stack spacing={2} direction = 'row'  marginLeft={50}>
            <Button variant = 'text' href='https://mui.com/material-ui/react-button/#main-content'>Text</Button>
            <Button variant = 'outlined'>Outlined</Button>
            <Button variant = 'contained'>Contained</Button>
        </Stack>

        {/* button text colors */}
        <Stack spacing={2} direction = 'row'  marginLeft={50}>
            <Button variant = 'text' color='primary'>Primary Text</Button>
            <Button variant = 'text' color='secondary'>Secondary Text</Button>
            <Button variant = 'text' color='error'>Error Text</Button>
            <Button variant = 'text' color='warning'>Warning Text</Button>
            <Button variant = 'text' color='info'>Info Text</Button>
            <Button variant = 'text' color='success'>Success Text</Button>
        </Stack>
        {/* button contained colors */}
        <Stack spacing={2} direction = 'row'  marginLeft={50}>
            <Button variant = 'contained' color='primary'>Primary Contained</Button>
            <Button variant = 'contained' color='secondary'>Secondary Contained</Button>
            <Button variant = 'contained' color='error'>Error Contained</Button>
            <Button variant = 'contained' color='warning'>Warning Contained</Button>
            <Button variant = 'contained' color='info'>Info Contained</Button>
            <Button variant = 'contained' color='success'>Success Contained</Button>
        </Stack>
        {/* button outlined colors */}
        <Stack spacing={2} direction = 'row'  marginLeft={50}>
            <Button variant = 'outlined' color='primary'>Primary Outlined</Button>
            <Button variant = 'outlined' color='secondary'>Secondary Outlined</Button>
            <Button variant = 'outlined' color='error'>Error Outlined</Button>
            <Button variant = 'outlined' color='warning'>Warning Outlined</Button>
            <Button variant = 'outlined' color='info' disabled>Disabled Outlined</Button>
            <Button variant = 'outlined' color='info'>Info Outlined</Button>
            <Button variant = 'outlined' color='success'>Success Outlined</Button>
        </Stack>
        {/* button sizes */}
        <Stack spacing={2} display='block' direction = 'row'  marginLeft={50}>
            <Button variant = 'contained' color='primary' size='small' disableElevation>Small Contained Size</Button>
            <Button variant = 'contained' color='primary' size = 'medium' disableRipple>Medium Contained Size</Button>
            <Button variant = 'contained' color='primary' size='large'>Large Contained Size</Button>
        </Stack>
        {/* button icons */}
        <Stack spacing={2} display='block' direction = 'row'  marginLeft={50}>
            <Button variant = 'contained' color='success'  startIcon={<CatchingPokemonIcon />} onClick={() => alert("caught it!")}>Catch'em all</Button>
            <Button variant = 'contained' color='success'  endIcon={<CatchingPokemonIcon />}>Catch'em all! Pokemons</Button>

            <IconButton aria-label='pokemons' color = 'warning' size = 'large'>
                <CatchingPokemonIcon  fontSize = 'large'/>
            </IconButton>

            <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
                </Button>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCameraIcon />
                </IconButton>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup 
                variant = 'contained'
                orientation='vertical'
                size = 'medium'
                color = 'info'
                aria-label='vertical contained group'
            >
                <Button>levt</Button>
                <Button onClick={()=> alert(`Center clicked ${value}`)}>center</Button>
                <Button>right</Button>
            </ButtonGroup>
           
        </Stack>

        <Stack direction='row'>
            <ToggleButtonGroup 
                aria-label='text changing' 
                value = {format } 
                size = 'medium'
                color = 'warning'
                orientation='vertical'
                exclusive 
                onChange={handleFormatChange}>
                <ToggleButton value='bold' aria-label='bold'>
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value='italic' aria-label='italic'>
                    <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'>
                    <FormatUnderlinedIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MuiButton