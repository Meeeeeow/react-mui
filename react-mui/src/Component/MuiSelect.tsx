import { Box, MenuItem, TextField } from '@mui/material'
import React from 'react'

const MuiSelect = () => {
    const [countries, setCountries] = React.useState<string[]>([]);

    const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        const value = e.target.value;
        console.log(Array.isArray(value))
        setCountries(typeof value === 'string' ? value.split(',') : value);
    }
 
  return (
    <>
        <h1>{countries}</h1>
        <Box width = '300px'>
            <TextField
                label = 'Select country'
                select
                fullWidth
                value = {countries}
                onChange = {handleChange}
                SelectProps={{
                    multiple: true,
                }}
                size = 'small'
                color = 'warning'
                helperText = 'Please select your country'
            >
                <MenuItem value = 'IN'>India</MenuItem>
                <MenuItem value = 'US'>United States</MenuItem>
                <MenuItem value = 'UK'>United Kingdom</MenuItem>
                <MenuItem value = 'AU'>Australia</MenuItem>
                <MenuItem value = 'CA'>Canada</MenuItem>
                <MenuItem value = 'GM'>Germany</MenuItem>
                <MenuItem value = 'BD'>Bangladesh</MenuItem>
            </TextField>
        </Box>
    </>
  )
}

export default MuiSelect