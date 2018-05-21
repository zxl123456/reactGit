import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as getAdData from '../../../mock/home/ad'
import HomeAd from '../../../components/HomeAd'

class Ad extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
			data : []
		}
	}
	render(){
		return(
			<div>
        {
					this.state.data!==[] ?
				<HomeAd data={this.state.data}/>
				:<div>加载中...</div>
				}

      </div>
		)
	}
  componentDidMount(){
		this.setState({
			data: getAdData
		})

	   /* result.then((res)=>{
	      return res.json()
	    }).then((json)=>{
	      if(json.length){
	        this.setState({
	          data:json
	        })
	      }
	    })*/
    }
  }



//使用require.ensure异步加载，还不支持ES6的export
//
export default Ad
