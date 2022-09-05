import { Autocomplete, Box,  TextField } from '@mui/material'
import React from 'react'


type Skill = {
  id: number
  label: string
}
const skills = ['HTML','CSS','Javascript','Typerscript','React','Angular'];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill
}))

console.log(skillsOptions);
const MuiAutoComplete = () => {
    const [value,SetValue] = React.useState<string | null>(null);
    const [skill, setSkill] = React.useState<Skill | null>(null)
    console.log(skill)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string | null) => {
        SetValue(newValue);
    }
    console.log(value);

  return (
    <Box width='300px'>
        <Autocomplete
            options={skills}
            renderInput={(params) => <TextField {...params} label='Skills'/>}
            value ={value}
            onChange = {handleChange}  
            fullWidth
            freeSolo          
        />
        <Autocomplete
        options={skillsOptions}
        renderInput={params => <TextField {...params} label='Skills' />}
        value={skill}
        onChange={(event: React.ChangeEvent<{}>, newValue: Skill | null) => {
          setSkill(newValue)
        }}
      />
      <Autocomplete
        options={skillsOptions.sort((a,b) => a.label.localeCompare(b.label))}
        renderInput={params => <TextField {...params} label='Skills' />}
        groupBy={(option) => option.label.charAt(0)}
      />
    </Box>
  )
}

export default MuiAutoComplete