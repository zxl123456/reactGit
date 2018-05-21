import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Item from './Item'
import {Link} from 'react-router-dom'

class List extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		var itemData=[],json=this.props.data;
		for( var i= 0 ; i<json.length ; i++ ){
			itemData.push(<Link to='/detail'  key={i}><Item data={json[i]}/ ></Link>)
		}
		return(
			<div className="list-container">
				{itemData}
			</div>
		)
	}

}
export default List
