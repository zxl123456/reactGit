import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { browserHistory } from 'react-router-dom'
import './style.less'
class HeaderMenu extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return(
      <div id="common-header">
        <span className="back-icon" onClick={this.clickHandle.bind(this)}>
            <i className="icon-chevron-left"></i>
        </span>
        <h1>{this.props.title}</h1>
      </div>
		)
	}
	componentDidMount(){

	}
  clickHandle(){
		if(this.props.title=='个人中心'){
			this.props.toHome()
		}else{
			  window.history.back()
		}
  }
}
export default HeaderMenu
