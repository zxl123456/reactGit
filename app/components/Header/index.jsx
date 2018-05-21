import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { Link,browserHistory } from 'react-router-dom'

class Header extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		 this.state = {
			 value: ''
		 };
	}
	render(){
		return(
			<div className="cleafix" id='home-header'>
				<div className='fl home-header-left '>
					<Link to='/city' className='textdNone'>
					{this.props.cityName}
					<i className='icon-angle-down'></i>
					</Link>
				</div>
				<div className="home-header-right fr">
					<Link to='/login'>
						<i className="icon-user"></i>
					</Link>
				</div>
				<div className="home-header-middle">
					<div className="search-container">
							<i className="icon-search"></i>
							<input type="text" placeholder="请输入关键字" value={this.state.value} onKeyUp={this.bindSearch.bind(this)} onChange={this.changeInput.bind(this)}/>
					</div>
				</div>
			</div>
		)
	}
	changeInput(e){
		this.setState({ value: e.target.value } );
	}

	bindSearch(e){
		if(e.keyCode===13){
			this.props.toSearch(this.state.value)
		}
	}
}

export default Header
