import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Plans from './plans';
import './index.css'
import axios from 'axios';

const urll = 'https://jsonplaceholder.typicode.com/users'

class Sex extends React.Component {
  constructor (props) {
    super(props)
    axios.get(urll).then((res) => {this.setState({plan: res.data})})
    this.state = {
    plan : []
  }
    this.deletplan = this.deletplan.bind(this)
}
  render() {
    return (<div>
      <div>
        <Plans plans={this.state.plan} deletplan = {this.deletplan}/>
      </div>

      </div>
    )
  }
  deletplan(id){
    this.setState({plan : this.state.plan.filter((el) => el.id !== id)})
  }
}



const ele = ReactDOMClient.createRoot(document.getElementById("1"))
ele.render(<Sex />)
