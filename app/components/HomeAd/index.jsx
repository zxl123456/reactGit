import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {Link} from 'react-router-dom'
class HomeAd extends React.Component{
	constructor(props , context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
    const adItem=[],json=this.props.data
    for(var key in json){
      if(key!=='default'){
      adItem.push(<Link to='/search' key={key}>
				<div className="ad-item fl">
          <a href={json[key].link} target="_blank">
              <img src={json[key].img} alt={json[key].title}/>
          </a>
      </div></Link>)
      }
    }
		return(<div id="home-ad">
        <h2>超值特惠</h2>
        <div className="ad-container clear-fix">
          {adItem}
        </div>
      </div>
		)
	}
}

export default HomeAd
