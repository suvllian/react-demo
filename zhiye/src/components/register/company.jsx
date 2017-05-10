import React, {Component} from 'react';
import { Link } from 'react-router';

import bg from './../../assets/reg_bg.jpg';

const RegBg = {
	backgroundImage: `url(${bg})`
}

export default class Register extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			isPhone: true
		}
	}


	render() {
		let isPhone = this.state.isPhone;

		return (
			<div className="register">
				<section className="register-container" style={RegBg}>
					<div className="register-form">
						<div className="row">
							<div className={isPhone ? "col-md-6 tab-caption text-center active-tab" : "col-md-6 tab-caption text-center"} 
								onClick={this.setIsPhone.bind(this, true)}>
								<p>手机注册</p>
							</div>

							<div className={isPhone ? "col-md-6 tab-caption text-center" : "col-md-6 tab-caption text-center active-tab"} 
								onClick={this.setIsPhone.bind(this, false)}>
								<p>邮箱注册</p>
							</div>
						</div>
						{ this.renderTab() }
						<p className="text-center">已有账号？<Link to="/login/company" className="color-link">立即登录</Link></p>
					</div>
				</section>
			</div>
		)
	}

	setIsPhone(isPhoneReg) {
		this.setState({ isPhone: isPhoneReg });
	}

	renderTab() {
		if (this.state.isPhone) {
			return (
				<form>
					<div className="form-item"> 
						<input type="text" placeholder="请输入手机号" />
					</div>
					<div className="form-item"> 
						<input type="text" placeholder="账户名（6-20位）" />
					</div>
					<div className="form-item"> 
						<input type="password" placeholder="密码（6-20位）" />
					</div>	
					<div className="form-item"> 
						<input type="submit" value="注册" className="sign-btn"/>
					</div>	
				</form>	
			)
		} else {
			return (
				<form>
					<div className="form-item"> 
						<input type="text" placeholder="请输入邮箱" />
					</div>
					<div className="form-item"> 
						<input type="text" placeholder="账户名（6-20位）" />
					</div>
					<div className="form-item"> 
						<input type="password" placeholder="密码（6-20位）" />
					</div>	
					<div className="form-item"> 
						<Link to="/register/comOne">
							<input type="submit" value="注册" className="sign-btn"/>
						</Link>
					</div>	
				</form>		
			)
		}
	}
}