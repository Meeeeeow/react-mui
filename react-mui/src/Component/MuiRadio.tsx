import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

const MuiRadio = () => {
    const [value, setValue] = React.useState<string>('');
    console.log(value);
  return (
    <Box>
        <FormControl error>
            <FormLabel id='years-of-experience-radio'>
                Years of experience
            </FormLabel>
            <RadioGroup 
                name = 'job-experience-group'
                aria-labelledby='years-of-experience-radio'
                value = {value}
                onChange = {(e) => setValue(e.target.value)}
                row
            >
                <FormControlLabel
                    control={<Radio size = 'small' color ='warning'/>}
                    label='0-2'
                    value='0-2'
                /> 
                <FormControlLabel
                    control={<Radio />}
                    label='3-5'
                    value='3-5'
                /> 
                <FormControlLabel
                    control={<Radio />}
                    label='6-10'
                    value='6-10'
                /> 
           </RadioGroup>
           <FormHelperText>Please select your experience</FormHelperText>
        </FormControl>
    </Box>

  )
}

export default MuiRadio