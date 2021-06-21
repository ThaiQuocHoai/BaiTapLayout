import React, { Component } from 'react'
import Banner from './BodyComponents/Banner'
import Items from './BodyComponents/Items'

export default class Body extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Items/>
            </div>
        )
    }
}
