import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import localStorage from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionFromOtherFile from '../actions/userinfo'
import {withRouter} from 'react-router-dom'

class App extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			initDone : false
		}
	}
	render(){
		return(
			<div>
				{
					this.state.initDone?
					this.props.children
					: <div>正在加载中...</div>
				}
			</div>
		)
	}
	componentDidMount(){
		//获取位置信息
		let cityName = localStorage.getItem(CITYNAME)
		if(cityName == null){
			cityName='北京'
		}


		this.props.userInfoActions.update({
			cityName:cityName
		})

		//更改状态
		this.setState({
			initDone:true
		})
	}
}

//---------------------   redux react 绑定   -------------------------
function mapStateToProps(state){
	return{}
}

function mapDispatchToProps(dispatch){
	return {
		userInfoActions: bindActionCreators(userInfoActionFromOtherFile,dispatch)
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)( App))
