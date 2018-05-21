import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class loadMore extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return(
			<div ref='wrapper'>
      {
        this.props.data?
        <p onClick={this.handerClick.bind(this)}>加载更多</p>:<p>加载中.....</p>
      }
      </div>
		)
	}
  handerClick(){
    this.props.handLoadMore();
  }
  componentDidMount(){
    //使用滚动是自动加载更多
    const loadMore = this.props.handLoadMore
    const wrapper = this.refs.wrapper
    let timer
    function callBack(){
      const top = wrapper.getBoundingClientRect().top
      const windowHeight = window.screen.height
      if(top && top<windowHeight ){
        loadMore()
      }
    }
    window.addEventListener('scroll',function(){
      this.timer = setTimeout(callBack,
      500 );
      if(this.props.data){
        return
      }
      if(this.timer){
        clearTimeout(timer)
      }

    }.bind(this),false)
  }
}

export default loadMore
