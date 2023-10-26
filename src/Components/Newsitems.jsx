/* eslint-disable react/prop-types */
import { Component } from 'react'

export class Newsitems extends Component {
    constructor(){
        super();
        console.log("Hello I am a Constractor")
    }

    render() {
      let {title, discription, imageurl} = this.props
        return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/newsdetails">
                <img className="rounded-t-lg" src={imageurl} alt="" />
            </a>
            <div className="p-5">
                <a href="/newsdetails">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {discription} </p>
                <a href="/newsdetails" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</a>
            </div>
        </div>
        )
    }
}

export default Newsitems