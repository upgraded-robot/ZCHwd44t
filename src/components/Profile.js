import React, { Component } from 'react'

class Profile extends Component {
	constructor(props){
		super()
		this.state = {
			person: {
				children:[], 
				avatar:[]
			}	
		} 
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			person: nextProps.people.find(function(person){
				return person.id === nextProps.params.profileId
			})
		})
	}
	render(){
		return (
			<div>
				<div> {this.state.person.children.length}</div>
				<img src={this.state.person.avatar['x-large']} />
				<div>{ this.state.person.firstName +' '+ this.state.person.lastName}</div>
				<div>{ this.state.person.twitterUser}</div>
				<div>{ this.state.person.bio }</div>
				<div>{ this.state.person.country }</div>
				{/*<div>
					<span>children</span>
					<span>grandchildren </span>
					<span>great grandchildren </span>
				</div>*/}
			</div>
		)
	}
}

Profile.contextTypes = {
	router: React.PropTypes.object
}

export default Profile