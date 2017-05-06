import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import Aside from './aside.jsx';
import Main from './main.jsx';

export default class Home extends Component{
	render() {
		return (
			<div className="row home">
				<div className="container">
					<Aside />
					<Main />
				</div>
			</div>
		)
	}
}
