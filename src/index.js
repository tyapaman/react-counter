import React from 'react';
import ReactDOM from 'react-dom';
import CounterContext from './contexts/counter';
import Counter from './components/counter'

class App extends React.Component{
  constructor(props){
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.increment10 = this.increment10.bind(this);
    this.decrement10 = this.decrement10.bind(this);
    this.state = {
      counter: 0,
      increment: this.increment,
      decrement: this.decrement
    }
  }

  increment(){
    this.setState({counter:this.state.counter+1});
  }
  decrement(){
    this.setState({counter:this.state.counter-1});
  }

  increment10(){
    this.setState({counter:this.state.counter+10});
  }
  decrement10(){
    this.setState({counter:this.state.counter-10});
  }


  render(){
    return (
      // ここからがキモ
      <CounterContext.Provider value={this.state}>
        {/* CounterContext.Providerで渡された値を下のコンポーネントで使用できる */}
        <Counter/>
      </CounterContext.Provider>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
