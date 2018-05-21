import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import CateGory from '../../components/CateGory'
import Ad from './subpage/Ad'
import List from './subpage/List'

class Home extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return(
			<div className="header-content">
				<Header toSearch={this.toSearch.bind(this)} cityName={this.props.userinfo.cityName}/>
				<CateGory/>
				<div style={{ height: '15px' }}></div>
				<Ad/>
				<List/>
			</div>
		)
	}
	toSearch(){
		this.props.history.push('/search')
	}

}

function mapStateToProps(state){
	return{
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( Home)
