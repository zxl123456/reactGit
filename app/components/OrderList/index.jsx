import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './item'
class OrderList extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      data:this.props.data
    }
	}
	render(){
		const data = this.props.data
		const str=[]
		console.log(data)
		for ( let item in  data){
			if(item){
				str.push(<Item key={item} data={data[item]}/>)
			}
		}
		return(
			<div>
				{str}
      </div>
		)
	}
  componentDidMount(){
  }
}
export default OrderList
