import React, { useState } from 'react';
import './App.css';
import { Box, Tab } from '@mui/material';
import { TabList, TabContext, TabPanel } from '@mui/lab';

function App() {
  const [value, setValue] = useState("1")
  const handleChange = (event: React.SyntheticEvent, newvalue : string) =>{
    setValue(newvalue)
  }
  return (
<>
  <TabContext value={value}>
<Box sx={{ borderColor: 'divider' }}>
  <TabList color="primary" onChange={handleChange} textColor='secondary' centered>
<Tab  label="All" value='1'/>
<Tab  label="Doing" value='2' />
<Tab  label="Done" value='3'/>
  </TabList>
</Box>
<TabPanel value="1">Panel One</TabPanel>
<TabPanel value="2">Panel two</TabPanel>
<TabPanel value="3">Panel three</TabPanel>
  </TabContext>
</>
  );
}

export default App;
