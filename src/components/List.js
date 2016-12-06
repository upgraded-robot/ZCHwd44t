import React, { Component } from 'react'

class List extends Component {
	render(){
		var people = this.props.people
		return (
			people.length > 0 ?
			<div className="list">
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
			<div>
				<img src={this.props.person.avatar.small} alt="user profile pic"/>
				<div>{ this.props.person.firstName +' '+ this.props.person.lastName}</div>
				<div>{ this.props.person.children.length }</div>
				<button onClick={this.getProfile.bind(this, this.props.person.id)}>Profile</button>
			</div>
		)
	}
}

ListItem.contextTypes = {
	router: React.PropTypes.object
}

export default List