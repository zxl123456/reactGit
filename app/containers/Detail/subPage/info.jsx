import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as infoData from '../../../mock/detail/info'
import DetailInfo from '../../../components/DetailInfo/detaiInfo'
class Info extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			shopInfo:{}
		}
	}
	render(){
		return(
			<div>
				{ this.state.shopInfo==null?
				<p>暂无数据...</p>:
				<DetailInfo shopInfo={this.state.shopInfo}/>
			 }
			</div>
		)
	}
	componentDidMount(){
		this.setState({
			shopInfo:infoData
		})
	}
}

export default Info
