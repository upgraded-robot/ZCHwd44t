import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props){
    super(props)
    this.state = {
      people:[],
      pages:0,
      currentPage:1
    }
  }
  getPeople(page) {
    const token = '898805d35cf1339f418a771e0740e6dc348a27ef1146fea9792953f3480f69bd'
    fetch(`https://monoku-fronoku-fake-api-dzvpmhixuf.now.sh/people?token=${token}&size=20&page=${page}`)
    .then(res => res.json())
      .then((data) => {
          this.setState({people:data.items, pages:data.pages, currentPage:data.page})
    })
  }
  componentDidMount(){
      this.getPeople(1)
  }  
  render() {
    var next = parseInt(this.state.currentPage) + 1
    var prev = parseInt(this.state.currentPage) - 1
    console.log(typeof(this.state.currentPage ))
    return (
      <div className="app">
        <div className="route-title title">{this.props.location.pathname === '/' ? 'people list' : 'profile' }</div>
        { this.props.children && React.cloneElement(this.props.children, {
          people: this.state.people
        }) }
        {
          this.props.location.pathname === '/' ?
          <div className="pagination">
            { this.state.currentPage === 1 ? null : <button>previous</button> }
            <span>page {this.state.currentPage}</span>
            { this.state.currentPage === this.state.pages ? null : <button onClick={ this.getPeople.bind(this, next) }>next</button> }
          </div>
          : null
        }
        
      </div>
    );
  }
}

export default App;
