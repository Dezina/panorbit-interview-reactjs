import Profile from './Profile';
import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // Import css modules stylesheet as styles

import { Card, Avatar, Image, Divider } from 'antd';

const { Meta } = Card;



export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: []
        };
        this.getuserList = this.getuserList.bind(this);
        this.getuserList();
    }

    getuserList = async () => {
        axios.get(`https://panorbit.in/api/users.json`).then((res) => {
            const data = res.data;
            const user = data.users;
            this.setState({
                userList: user
            });
            console.log(this.state.userList);
        });
    };

    render() {

        if (this.state.userList.length === 0) {
            return <h2>Loading</h2>;
        }

        return (
            <React.Fragment>

                <div className={`${styles.pattern} ${styles.section}`} style={{ position: 'relative', zIndex: '1' }}>
                    <div className={`${styles.geeks}`}>

                        <div className="panel panel-default" style={{ position: 'relative', borderRadius: '30px', width: '450px', zIndex: '2' }}>
                            <div className="panel-heading" style={{ padding: '15px', borderRadius: '50px' }}><h4>Select an account</h4></div>
                            <div className={`panel-body ${styles.height}`}>
                                {this.state.userList.map(user => {

                                    return (

                                        <Link to={{
                                            pathname: '/display/profile',
                                            state: {
                                                userdata: user
                                            }
                                        }}>
                                            {/* <div className="col-md-1">
                                                        <img src={user.profilepicture} width="40" height="30" style={{ borderRadius: '50px' }}></img>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <p>{user.name}</p>
                                                    </div> */}
                                            <div className="card">
                                                <p>{user.name}</p>
                                                <hr />
                                            </div>
                                            {/* <div className="panel panel-default">
                                                <div className="panel-body">
                                                    <p>{user.name}</p>
                                                </div>
                                            </div> */}
                                        </Link>



                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}