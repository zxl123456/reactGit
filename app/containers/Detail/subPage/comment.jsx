import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ConmentList from '../../../components/CommentList'
import * as comentData from '../../../mock/detail/comment'
import LoadMore from '../../../components/LoadMore'
class Comment extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			data:[],
			hasMore:false,
			page:0
		}
	}
	render(){
		return(
			<div>
				{
					this.state.data==null?
					<p>暂无评论...</p>:
					<ConmentList data={this.state.data}/>
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
			data:comentData.data,
			hasMore:comentData.hasMore
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
			data: this.state.data.concat(comentData.data),
			hasMore:true
		})
	}
}
export default Comment
