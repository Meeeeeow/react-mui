import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import React from 'react'

const MuiCheckBox = () => {
    const [accept,setAccept] = React.useState<boolean>(false);
    const [skills,setSkills] = React.useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccept(e.target.checked);
    }
    const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(e.target.value);
        if(index  === -1) {
            setSkills([...skills, e.target.value]);
        }else{
            setSkills(skills.filter(skill => skill !== e.target.value));
        }
    }
    console.log(accept);
    console.log(skills)
  return (
    <Box>
        <Box>
        <FormControlLabel
            label="I accept the terms and conditions"
            control={<Checkbox checked={accept} onChange={handleChange}/>}
        />
        </Box>
        <Box>
            <Checkbox
                icon={<BookmarkBorder/>}
                checkedIcon={<Bookmark/>}
                checked={accept}
                onChange={handleChange}
            />
        </Box>
        <Box>
            <FormControl error>
                    <FormLabel>
                        Select your skills
                    </FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label="HTML"
                            value = 'HTML'
                            control={<Checkbox checked={skills.includes('HTML')} onChange={handleSkillsChange} size = 'small' color ='error'/>}
                        />
                        <FormControlLabel
                            label="CSS"
                            value = 'CSS'
                            control={<Checkbox checked={skills.includes('CSS')} onChange={handleSkillsChange}/>}
                        />
                        <FormControlLabel
                            label="Javascript"
                            value = 'Javascript'
                            control={<Checkbox checked={skills.includes('Javascript')} onChange={handleSkillsChange}/>}
                        />

                    </FormGroup>
                    <FormHelperText>Please select your skills</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckBox