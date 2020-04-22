import React, {Component} from "react"
import {Grid, Cell} from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}><img
                        src="https://i.ibb.co/2qbzk9X/Untitled.png"
                        alt="avatar"
                        className="avatar-img"/></Cell>


                    <div className="banner-text">
                        <h1>Front end Web Developer</h1>

                        <hr/>

                        <p>HTML/CSS | JavaScript | React  | Redux</p>

                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="https://linkedin.com/in/artemShalamov" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true"/>
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/artemWebDevep?tab=repositories" rel="noopener noreferrer"
                               target="_blank">
                                <i className="fa fa-github" aria-hidden="true"/>
                            </a>

                            {/* VK */}
                            <a href="https://vk.com/id96105457" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-vk" aria-hidden="true"/>
                            </a>

                            {/* Telegram */}
                            <a href="https://t.me/artemShalamov" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-telegram" aria-hidden="true"/>
                            </a>
                        </div>

                    </div>
                </Grid>
            </div>
        )
    }
}

export default Landing



