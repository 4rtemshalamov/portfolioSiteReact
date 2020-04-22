import React, { Component } from "react"
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Artem Shalamov</h2>
                        <img src="http://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" style={{ height: '250px' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lolem Ipsum</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr />
                    <div className="contact-list">
                        <List>
                            <div>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>    
                                    <div className="telephone">+7(999) 540 26 57</div>
                                </ListItemContent>
                            </ListItem>
                            </div>


                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-telegram" aria-hidden="true"/>    
                                    artemShalamov
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-vk" aria-hidden="true"/>    

                                </ListItemContent>
                            </ListItem>

                        </List>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact 