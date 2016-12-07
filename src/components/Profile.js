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
			<div className="profile">
				<img src={this.state.person.avatar['x-large']} />
				<div className="profile-details">
					<h1 className="title">
						<span>{ this.state.person.firstName }</span>
						<span>{ this.state.person.lastName }</span>
					</h1>
					<div className="profile-extra-info subtle">
						<span>{ this.state.person.country }</span>
						<span>
							<a href={ 'https://twitter.com/'+this.state.person.twitterUser }>
								@{ this.state.person.twitterUser }
							</a>
						</span>
					</div>
					<p>{ this.state.person.bio }</p>
				</div>
				
				<div className="profile-children"> 
					<h2 className="subtle"># of Conections</h2>
					<table>
						<thead>
							<tr>
								<th>1st level</th>
								<th>2nd level</th>
								<th>3rd level</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{ this.state.person.children.length }</td>
								<td> </td>
								<td> </td>
							</tr>
						</tbody>
					</table>
				</div>
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