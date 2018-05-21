import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import HeaderMenu from '../../components/HeaderMenu'
import CurrentCity from '../../components/CurrentCity'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import CityList from '../../components/CityList'
import localStore from '../../util/localStore'
import {CITYNAME} from '../../config/localStoreKey'

class City extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return(
			<div>
				<HeaderMenu title='选择城市'/>
				<CurrentCity cityName={this.props.userinfo.cityName}/>
				<CityList changeCity={this.changeCity.bind(this)}/>
			</div>
		)
	}
	changeCity(newCityName){
		if(newCityName==null){
			return
		}

		//修改redux
		const userinfo = this.props.userinfo
		userinfo.cityName = newCityName
		this.props.userInfoActions.update(userinfo)
		//修改cookie
		localStore.setItem(CITYNAME,newCityName)
		//回到首页
		this.props.history.push('/');
	}
}

function mapStateToProps(state){
	return{
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {
		userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( City)
