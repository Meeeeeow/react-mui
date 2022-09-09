
import React from 'react';

import './App.css';
import MuiAccordion from './Component/MuiAccordion';
import MuiAutoComplete from './Component/MuiAutoComplete';
import MuiButton from './Component/MuiButton';
import MuiCard from './Component/MuiCard';
import MuiCheckBox from './Component/MuiCheckBox';
import MuiLayout from './Component/MuiLayout';
import MuiRadio from './Component/MuiRadio';
import MuiRating from './Component/MuiRating';
import MuiSelect from './Component/MuiSelect';
import MuiSwitch from './Component/MuiSwitch';
import MuiTextield from './Component/MuiTextield';
import MuiTypography from './Component/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiTypography/>
      <MuiButton/>
      <MuiTextield/>
      <MuiSelect/>
      <MuiRadio/>
      <MuiCheckBox/>
      <MuiSwitch/>
      <MuiRating/>
      <MuiAutoComplete/>
      <MuiLayout/>
      <MuiCard/>
      <MuiAccordion/>
    </div>
  );
}

export default App;
