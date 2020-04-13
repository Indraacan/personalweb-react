import React, { Component } from 'react'
import Content from '../component/Content'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Content/>
                <Footer/>

            </div>
        )
    }
}
export default Home