import React, { Component } from 'react'

class List extends Component {
	render(){
		var people = this.props.people
		return (
			people.length > 0 ?
			<div className="list">
				<span className="counter subtle title">20 profiles</span>
			{people.map(function(person, index){
					return <ListItem 
						key={person.id} 
						person={person}
						/>
				})
			}
			</div> : null
		)
	}
}

class ListItem extends Component {
	getProfile(profileId){
		this.context.router.push(`/profile/${profileId}`)
	}
	render(){
		return(
			<div className="list-item">
				<img src={this.props.person.avatar.small} alt={this.props.person.firstName}/>
				<div className="item-text-info">
					<div className="name">{ this.props.person.firstName +' '+ this.props.person.lastName}</div>
					<div className="subtle connections">{ this.props.person.children.length } direct connection</div>
				</div>
				<button onClick={this.getProfile.bind(this, this.props.person.id)}>Profile</button>
			</div>
		)
	}
}

ListItem.contextTypes = {
	router: React.PropTypes.object
}

export default List