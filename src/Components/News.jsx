import { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
  render() {
    return (
        <div className='container my-3 m-auto'>
          <h1>Top Headlines</h1>
          <div className='grid grid-cols-3 gap-4'>
            <Newsitems title = "mytitle" discription = "mydiscription" imageurl ="https://images.unsplash.com/photo-1557231146-afde25e6598f?auto=format&fit=crop&q=80&w=2115&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Newsitems title = "mytitle" discription = "mydiscription" />
            <Newsitems title = "mytitle" discription = "mydiscription" />
            {/* <Newsitems title = "mytitle" discription = "mydiscription" /> */}
          </div>
        </div>
    )
  }
}
