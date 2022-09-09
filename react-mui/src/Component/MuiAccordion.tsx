import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'

import React from 'react'

const MuiAccordion = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false)
    const handleChange=(isExpanded:boolean , panel:string)=>{
           console.log(isExpanded);
           setExpanded(isExpanded ? panel : false); 
    }
    console.log(expanded);
   
    return (
    <Stack margin={4}>
        <Accordion expanded={expanded === 'panel1'} onChange={(event,isExpanded) => handleChange(isExpanded,'panel1')}>
            <AccordionSummary
                id='panel1-header'
                aria-controls='panel1-content'
                expandIcon={<ExpandMore/>}
            >
                <Typography variant='h4'>Accordion Panel 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                </Typography>
            </AccordionDetails>        
        </Accordion>

        <Accordion expanded={expanded === 'panel2'}  onChange={(event,isExpanded) => handleChange(isExpanded,'panel2')}>
            <AccordionSummary
                id='panel2-header'
                aria-controls='panel2-content'
                expandIcon={<ExpandMore/>}
            >
                <Typography variant='h4'>Accordion Panel 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                </Typography>
            </AccordionDetails>        
        </Accordion>

        <Accordion expanded = {expanded === 'panel3'} onChange={(event,isExpanded) => handleChange(isExpanded,'panel3')}>
            <AccordionSummary
                id='panel3-header'
                aria-controls='panel3-content'
                expandIcon={<ExpandMore/>}
            >
                <Typography variant='h4'>Accordion Panel 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                </Typography>
            </AccordionDetails>        
        </Accordion>
    </Stack>
  )
}

export default MuiAccordion