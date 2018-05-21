import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HeaderMenu from '../../components/HeaderMenu'
import OrderList from './subpage'
import './style.less'

class User extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return(
			<div className="header-content">
				<HeaderMenu title="个人中心" toHome={this.toHome.bind(this)}/>
				<OrderList/>
			</div>
		)
	}

	toHome(){
		this.props.history.push('/')
	}

}

export default User
