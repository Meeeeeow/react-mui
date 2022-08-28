import React from 'react'
import {Typography} from '@mui/material'
const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1" gutterBottom>h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3" component= "h1">h3 Heading</Typography>
        <Typography variant="h4">h4 Heading</Typography>
        <Typography variant="h5" gutterBottom>h5 Heading</Typography>
        <Typography variant="h6">h6 Heading</Typography>

        <Typography variant="subtitle1" gutterBottom>subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>

         <Typography variant="body1" mt={4}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vel aliquam mollitia. Quae veniam est, delectus eius dolorum perspiciatis doloribus maxime. Magnam exercitationem repudiandae sunt voluptatum omnis dolorum minus maiores!</Typography>  {/*variant by deault takes body1 */}

        <Typography variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque porro obcaecati, vel architecto alias repellat atque quod laboriosam amet sed consectetur tenetur maxime cupiditate consequatur repellendus provident praesentium neque temporibus.</Typography>

        <Typography variant="button" display="block">Button Text</Typography>
        <Typography variant="caption" display="block">Caption Text</Typography>
        <Typography variant="overline" display="block">Overline Text</Typography>

        
    </div>
   )
}

export default MuiTypography;
