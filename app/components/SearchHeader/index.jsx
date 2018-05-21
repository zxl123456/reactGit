import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class SearchHeader extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state={
			value:''
		}
	}
	render(){
		return(
      <div className='searchHeader'>
				<span className="back-icon fl" onClick={this.clickHandle.bind(this)}>
            <i className="icon-chevron-left"></i>
        </span>
				<div className="home-header-middle">
					<div className="search-container">
							<i className="icon-search"></i>
							<input type="text" placeholder="请输入关键字" value={this.state.value} onKeyUp={this.bindSearch.bind(this)} onChange={this.changeInput.bind(this)}/>
					</div>
				</div>
			</div>
		)
	}

	clickHandle(e){
		window.history.back()
	}

	bindSearch(e){

	}

	changeInput(e){
		this.setState({
			value:e.target.value
		})
	}
}
export default SearchHeader
