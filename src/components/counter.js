import React from 'react';
import CounterContext from '../contexts/counter';

// state less componentなので関数で定義
const Counter = () =>(
  <CounterContext.Consumer>
    {/* coonsumerの中には関数を書く 引数でProviderのvalueの値を受け取れる*/}
    {
      ({ counter, increment, decrement, increment10, decrement10 })=>{
        return (
          <React.Fragment>
            <div>count: {counter}</div>
            <button onClick={increment}>+1</button>
            <button onClick={increment10}>+10</button>
            <button onClick={decrement}>-1</button>
            <button onClick={decrement10}>-10</button>
          </React.Fragment>
        )
      }
    }
  </CounterContext.Consumer>
)
export default Counter;