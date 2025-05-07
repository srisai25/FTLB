import React from 'react';

class LifecycleCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor: Component initialized');
  }


  componentDidMount() {
    console.log('componentDidMount: Component mounted');
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`componentDidUpdate: Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  
  componentWillUnmount() {
    console.log('componentWillUnmount: Component will unmount');
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>React Lifecycle Counter</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default LifecycleCounter;
