
import React from 'react';

import './App.css';
import MuiButton from './Component/MuiButton';
import MuiSelect from './Component/MuiSelect';
import MuiTextield from './Component/MuiTextield';
import MuiTypography from './Component/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiTypography/>
      <MuiButton/>
      <MuiTextield/>
      <MuiSelect/>
    </div>
  );
}

export default App;
