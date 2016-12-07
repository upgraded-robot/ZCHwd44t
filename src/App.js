import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props){
    super(props)
    this.state = {
      people:[]
    }
  }
  getPeople() {
    const token = '898805d35cf1339f418a771e0740e6dc348a27ef1146fea9792953f3480f69bd'
    fetch(`https://monoku-fronoku-fake-api-dzvpmhixuf.now.sh/people?token=${token}`)
    .then(res => res.json())
      .then((data) => {
          this.setState({people:data.items})
    })
  }
  componentDidMount(){
      this.getPeople()
  }  
  render() {
    return (
      <div className="app">
        <div className="route-title title">{this.props.location.pathname === '/' ? 'people list' : 'profile' }</div>
        { this.props.children && React.cloneElement(this.props.children, {
          people: this.state.people
        }) }
      </div>
    );
  }
}

export default App;
