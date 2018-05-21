import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as getList from '../../../mock/home/list'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import './style.less'
class List extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      listdata:[],
			hasMore:false,
			page:0
    }
	}
	render(){
		return(
      <div className='clear-fix'>
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          this.state.listdata.length?
          <ListComponent data={ this.state.listdata }/>:
          <div>加载中...</div>
        }
				{
					this.state.hasMore?
					<LoadMore data={this.state.hasMore} handLoadMore={this.handLoadMore.bind(this)}/>
					: <div className='loadMore'>没有更多数据</div>
				}


    </div>
		)
	}
  componentDidMount(){
    this.setState({
      listdata: getList.data,
			hasMore:getList.hasMore
    })
  }
	handLoadMore(){
		if(this.state.page>=3){
			this.setState({
				hasMore:false
			})
			return;
		}
		const count=this.state.page+1;
		this.setState({
			page:count,
			listdata: this.state.listdata.concat(getList.data),
			hasMore:true
		})
	}
}

export default List
