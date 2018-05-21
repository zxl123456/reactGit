import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class CurrentCity extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return(
			<div className='curCity'>
        {this.props.cityName}
				<span>GPS定位</span>
      </div>
		)
	}
}
export default CurrentCity
