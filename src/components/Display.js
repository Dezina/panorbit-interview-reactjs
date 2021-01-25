import { DownOutlined } from '@ant-design/icons';

import { GoogleApiWrapper } from 'google-maps-react';

import React, { Component } from 'react';

import styles from './Display.module.css'; // Import css modules stylesheet as styles
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Posts from './Posts';
import Gallery from './Gallery';
import ToDo from './ToDo';

import "antd/dist/antd.css";

import { Layout, Menu, Dropdown } from 'antd';
import Profile from './Profile';
const { Header, Footer, Sider, Content } = Layout;

{/* ******** Menu code ******** */ }
const menu = (
    <Menu style={{ borderRadius: '20px', minHeight: '50px' }}>
        <Menu.Item key="1">
            <div>
                {/* <a href="">
                    <img src={this.state.user.profilepicture} width="40" height="30" style={{ borderRadius: '50px', padding: '2px' }}></img>
                    {this.state.user.name}
                </a>
                <hr /> */}
                <a href="http://localhost:3000/" className="btn btn-sm btn-danger" style={{ borderRadius: '15px', position: 'absolute', left: '30%' }}>logout</a>
            </div>

        </Menu.Item>
    </Menu>
);
{/* ******** End Menu ******** */ }

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.state.userdata
        };
    }


    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: '#fff', marginTop: '0px' }} >
                <Router>
                    <Layout className={`${styles.layout}`}>

                        {/* ******** Sidebar menu code ******** */}

                        <Sider
                            breakpoint="lg"
                            collapsedWidth="0"
                            onBreakpoint={broken => {
                                console.log(broken);
                            }}
                            onCollapse={(collapsed, type) => {
                                console.log(collapsed, type);
                            }}
                            className={`${styles.menu}`}
                            theme="light"
                            style={{ paddingTop: '150px', backgroundImage: "linear-gradient(to right, #6d56d4, #5c3fdd)", borderRadius: '20px', height: '670px', width: '450px' }}
                        >

                            <Menu mode="vertical" defaultSelectedKeys={['1']} style={{
                                backgroundImage: "linear-gradient(to right, #6d56d4, #5c3fdd) "

                            }}>
                                <Menu.Item key="1" style={{ color: '#2d3642', fontSize: '17px' }}>
                                    <Link to="/display/profile">
                                        Profile
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key="2" style={{ color: '#2d3642', fontSize: '17px' }}>
                                    <Link to="/posts">
                                        Posts
                                    </Link>
                                </Menu.Item>

                                <Menu.Item style={{ color: '#2d3642', fontSize: '17px' }}>
                                    <Link to="/gallery">
                                        Gallery
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key="4" style={{ color: '#2d3642', fontSize: '17px' }}>
                                    <Link to="/todo">
                                        ToDo
                                    </Link>
                                </Menu.Item>

                            </Menu>
                        </Sider>
                        <Layout>
                            {/* ******** End Sidebar menu ******** */}

                            {/* ****** Page Content code; Also added Header inside the Content *******/}

                            <Content style={{ margin: '24px 16px 0' }}>
                                <div className={`${styles.content}`} style={{ padding: 24, minHeight: 580 }}>


                                    {/* ******** Header code ******** */}

                                    <Header theme="light" style={{ padding: 0, backgroundColor: '#fff' }}>

                                        <Dropdown overlay={menu} >

                                            <a style={{ float: 'right', padding: '3px' }}>

                                                <img src={this.state.user.profilepicture} width="40" height="30" style={{ borderRadius: '50px', padding: '2px' }}></img>

                                                {this.state.user.name} <DownOutlined />
                                            </a>
                                        </Dropdown>

                                    </Header>
                                    {/* ******** End Header code ******** */}

                                    {/* Code To Display The Screens */}
                                    <Switch>
                                        <Route path="/display/profile">
                                            <Profile user={this.state.user} />
                                        </Route>
                                        <Route path="/posts">
                                            <Posts />
                                        </Route>
                                        <Route path="/gallery">
                                            <Gallery />
                                        </Route>
                                        <Route path="/todo">
                                            <ToDo />
                                        </Route>

                                    </Switch>
                                    {/* ******** End Display Screens ******** */}
                                </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}></Footer>
                        </Layout>
                    </Layout>
                </Router>
            </ div>
        );
    }
}

export default GoogleApiWrapper({
    API_KEY: 'AIzaSyADin4lOYIefdD9ViX0nsV6g1yvF1p5QvE'
})(Display);
