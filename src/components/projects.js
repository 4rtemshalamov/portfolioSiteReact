import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://i.ibb.co/p4r94zH/Screenshot-5.png) center / cover' }}></CardTitle>
                        <CardText>
                            Социальная сеть на 
                            React-Redux.
                            Для входа используйте Email: free@samuraijs.com Password: free

                    </CardText>
                        <CardActions border>
                            <Button href="https://artemwebdevep.github.io/reactSocialNetwork/" target="_blank" colored>Open project</Button>
                            <Button href="https://github.com/artemWebDevep/reactSocialNetwork/tree/master" target="_blank"colored>GitHub</Button>
                        </CardActions>
                

                    </Card>

                    {/* Project2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '215px', background: 'url(https://i.ibb.co/37PX3Kx/Screenshot-6.png) center / cover' }}></CardTitle>
                        <CardText>
                            Приложение для поиска рецептов 
                    </CardText>
                        <CardActions border>
                            <Button href="https://artemwebdevep.github.io/trainingAPIRecipe/" target="_blank" colored>Open project</Button>
                            <Button href="https://github.com/artemWebDevep/trainingAPIRecipe/tree/master" target="_blank" colored>GitHub</Button>
                        </CardActions>
                    

                    </Card>

                     {/* Project2
                     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover' }}>React project #1</CardTitle>
                        <CardText>
                            Lorem 
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodPen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card> */}

                </div>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://i.ibb.co/268xkKQ/Screenshot-7.png) center / cover' }}></CardTitle>
                        <CardText>
                            Survival Store
                            Магазин доставки товаров 
                    </CardText>
                        <CardActions border>
                            <Button href="https://artemwebdevep.github.io/shop/" target="_blank" colored>Open project</Button>
                            <Button href="https://github.com/artemWebDevep/shop" target="_blank" colored>GitHub</Button>
                        </CardActions>
                

                    </Card>
                    {/* Project2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://i.ibb.co/WHGm2j8/Screenshot-8.png) center / cover' }}></CardTitle>
                        <CardText>
                        Feedback Form
                    </CardText>
                        <CardActions border>
                            <Button href="https://codepen.io/artemwebdevep/pen/mdyRJqX" target="_blank" colored>Open project</Button>
                        </CardActions>
                

                    </Card>

                </div>
                
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is VueJS</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }


    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab>ReactJS</Tab>
                    <Tab>HTML/CSS</Tab>
                    {/* <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab> */}
                </Tabs>

                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>
            </div>
        )
    }
}
export default Contact 