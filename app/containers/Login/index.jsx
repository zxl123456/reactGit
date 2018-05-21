import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import {USERNAME} from '../../config/localStoreKey'
import LoginComponent from '../../components/Login'
import HeaderMenu from '../../components/HeaderMenu'
import localStore from '../../util/localStore'
class Login extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			check:true
		}
	}
	render(){
		return(
			<div>
				<HeaderMenu title='登录'/>
				{
					this.state.check?
					<LoginComponent userLogin={this.userLogin.bind(this)}/>
					:''
				}

			</div>

		)
	}
  componentDidMount(){
		this.setState({
			check:this.props.userinfo.userName==undefined
		})
		if(!this.state.check){
				this.props.history.push('/user')
		}
  }

	userLogin(userName){
		const userinfo =this.props.userinfo
		userinfo.userName = userName
		this.props.userInfoActions.update(userinfo)

		//修改cookie
		localStore.setItem(USERNAME,userName)
		this.props.history.push('/user')
	}

}
function mapStateToProps(state){
  return{
    userinfo:state.userinfo
  }
}
function mapDispatchToProps(dispatch){
  return{
		userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
	}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
