import React, { useState } from 'react';
import './App.css';
import { Box, Tab, Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';
import { TabList, TabContext, TabPanel } from '@mui/lab';

function App() {
  const [value, setValue] = useState("1")
  const handleChange = (event: React.SyntheticEvent, newvalue : string) =>{
    setValue(newvalue)
  }
  var [doneCard, setdoneCard] = useState([{
    'id':1, 'title': "Card1 title", "description" : "this is card1 decscription"},
    {'id':2, 'title': "Card2 title", "description" : "this is card2 decscription"},
    {'id':3, 'title': "Card3 title", "description" : "this is card3 decscription"}
])

  var [doingCard, setdoingCard] = useState([
    {'id':4, 'title': "Card4 title", "description" : "this is card4 decscription"},
    {'id':5, 'title': "Card5 title", "description" : "this is card5 decscription"},
    {'id':6, 'title': "Card6 title", "description" : "this is card6 decscription"}
])

  const handleMovetoDone = (card) => {
    setdoingCard(doingCard.filter(c => c.id !== card.id))
    setdoneCard(...doneCard, card)
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
<TabPanel value="1"><>
  {doingCard.map((card) => 
<div>
<Box width="300px">
  <Card key={card.id}>
    {/* <CardMedia component='img' height='140' image="https://source.unsplash.com/random">
    </CardMedia> */}
    <CardContent>
      <Typography gutterbottom variant='h5'>{card.title}</Typography>
      <Typography gutterbottom variant='body'>{card.description}</Typography>
    </CardContent>
  </Card>
</Box>
</div>
)}
  {doneCard.map((card) =>
<div>
<Box width="300px">
  <Card key={card.id}>
    <CardContent>
      <Typography gutterbottom variant='h5'>{card.title}</Typography>
      <Typography gutterbottom variant='body'>{card.description}</Typography>
    </CardContent>

  </Card>
</Box>
</div>
)}
</>
</TabPanel>
<TabPanel value="2">
{doingCard.map((card) => 
<div>
<Box width="300px">
  <Card key={card.id}>
    <CardContent>
      <Typography gutterbottom variant='h5'>{card.title}</Typography>
      <Typography gutterbottom variant='body'>{card.description}</Typography>
    </CardContent>
    <CardActions>
    <Button size='small' onClick={() => {handleMovetoDone(card)}}> Move to Done!</Button>
    </CardActions>
  </Card>
</Box>
</div>
)}
</TabPanel>
<TabPanel value="3"><div>
{doneCard.map((card) => 
<div>
<Box width="300px">
  <Card key={card.id}>
    <CardContent>
      <Typography gutterbottom variant='h5'>{card.title}</Typography>
      <Typography gutterbottom variant='body'>{card.description}</Typography>
    </CardContent>
    <CardActions>
    <Button size='small'> Move to Doing!</Button>
    </CardActions>
  </Card>
</Box>
</div>
)}</div>
</TabPanel>
  </TabContext>
</>
  );
}

export default App;
