import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material'
import React from 'react'

const MuiSwitch = () => {
    const [checked,setChecked] = React.useState<boolean>(false);
    const [modes,setModes] = React.useState<string[]>([]);
    console.log(checked);
    console.log(modes);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }
    const handleModeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const index = modes.indexOf(e.target.value);
        if(index === -1){
            setModes([...modes, e.target.value]);
        }else{
            setModes(modes.filter(mode => mode !== e.target.value));
        }
    }
  return (
    <Box>
        <Box>
            <FormControlLabel
                label = 'Dark mode'
                control={<Switch checked={checked} onChange ={handleChange}/>}
            />
        </Box>
        <Box>
            <FormControl>
                <FormLabel>
                    Various Modes
                </FormLabel>
                <FormGroup>
                    <FormControlLabel
                        label = 'Dark mode'
                        value = 'dark'
                        control = {<Switch checked={modes.includes('dark')} 
                        onChange={handleModeChange}/>}
                    />
                    <FormControlLabel
                        label = 'Normal mode'
                        value = 'normal'
                        control = {<Switch
                        checked={modes.includes('normal')}
                        onChange={handleModeChange}
                        />}
                    />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiSwitch