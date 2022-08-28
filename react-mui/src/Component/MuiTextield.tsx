import { InputAdornment, Stack, TextField } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react'

const MuiTextield = () => {
    const [value, setValue] = React.useState<string>();
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
             <TextField label='Name' variant='outlined' InputProps={{readOnly : true}}/>  {/*variant = outlined is default */}
             <TextField label='Name' variant='filled'/>
             <TextField label='Name' variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={2}>
             <TextField label='size color' variant='outlined' size='small' color ='warning' disabled/>  {/*variant = outlined is default */}
        </Stack>
        {/* required text */}
        <Stack direction='row' spacing={2}>
             <TextField label='required text' variant='outlined' size='small' color ='warning' required />  {/*variant = outlined is default */}
        </Stack>

        <Stack direction='row' spacing={2}>
             <TextField 
                label='Password'
                type='password' 
                value={value}
                variant='outlined' 
                size='small' 
                color ='warning'
                required
                error = {!value}
                InputProps={{
                    endAdornment: <InputAdornment position='end'>
                        <VisibilityIcon />
                    </InputAdornment>
                }}
                onChange={(e)=> setValue(e.target.value)}
                helperText = {!value ? 'Required' : 'Password should be 8 characters long'}/>  {/*variant = outlined is default */}
        </Stack>
        {/* SuFFix & PreFix */}
        <Stack direction='row' spacing={2}>
            <TextField label="amount" InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>
            }} type="number"/>
            <TextField label="weight" InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>
            }}/>
        </Stack>

    </Stack>
  )
}

export default MuiTextield