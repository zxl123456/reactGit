import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as OrderListData from '../../../mock/orderList/orderList'
import OrderListComponent from '../../../components/OrderList'

import './style.less'

class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            listdata: {}
        }
    }
    render() {
        return (
            <div className="order-list-container">

                <h2>您的订单</h2>
                {
                    OrderListData
                    ? <OrderListComponent data={OrderListData} submitComment={this.submitComment.bind(this)}/>
                    : <div>{/* loading */}</div>
                }
            </div>
        )
    }

    componentDidMount(){
      this.setState({
        listdata: OrderListData
      })
    }
    submitComment(){
      return;
    }
}

export default OrderList
