import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
	renderContent() {
		// console.log(this.props.auth);
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href='/auth/google'>Login With Google</a>
					</li>
				);
			default:
				return [
					<li>
						<Payments />
					</li>,
					<li style={{ margin: '0 10px' }}>
						Credits:{this.props.auth.credits}
					</li>,
					<li>
						<a href='/api/logout'>Logout</a>
					</li>
				];
		}
	}

	render() {
		return (
			<nav>
				<div className='nav-wrapper'>
					<Link to={this.props.auth ? '/surveys' : '/'} className='brand-logo'>
						Emaily
					</Link>
					<ul id='nav-mobile' className='right hide-on-med-and-down'>
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Header);
