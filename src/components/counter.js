import React from 'react';
import CounterContext from '../contexts/counter';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

// state less componentなので関数で定義
const Counter = () =>(
  <CounterContext.Consumer>
    {/* coonsumerの中には関数を書く 引数でProviderのvalueの値を受け取れる*/}
    {
      ({ counter, increment, decrement, increment10, decrement10 })=>{
        return(
       <React.Fragment>
       <Grid container alignItems="center">
         <Grid item xs>
           <Typography gutterBottom variant="h5">
             Count : {counter}
           </Typography>
         </Grid>
       </Grid>
     <Divider variant="middle" />
       <Typography gutterBottom variant="body1">
         Select Button
       </Typography>
       <div>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={increment}>+1</Button>
            <Button onClick={increment10}>+10</Button>
          </ButtonGroup>
          <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group">
            <Button onClick={decrement}>-1</Button>
            <Button onClick={decrement10}>-10</Button>
          </ButtonGroup>
       </div>
          </React.Fragment>
        )}}
  </CounterContext.Consumer>
)
export default Counter;