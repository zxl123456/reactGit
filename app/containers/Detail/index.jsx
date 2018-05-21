import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HeaderMenu from '../../components/HeaderMenu'
import Comment from './subPage/comment'
import Info from './subPage/info'
import './style.less'


class Detail extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return(
			<div>
				<HeaderMenu title='商户详情'/>
				<Info/>
				<Comment/>
			</div>
		)
	}
}

export default Detail
