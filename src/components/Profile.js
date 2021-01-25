import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from "react";
import styles from './Display.module.css'; // Import css modules stylesheet as styles

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
    }

    render() {

        return (

            <div>
                {/* *********************************************** */}
                {/* Profile Screen Content */}
                <div className="container">
                    <div className="row">
                        <h3>Profile</h3>
                        {console.log(this.state.user)}
                        <div className="col-md-4" >
                            <div className={`${styles.profileText}`}>
                                <img src={this.state.user.profilepicture} width="100" height="100" style={{ borderRadius: '50px' }}></img>
                                <p>{this.state.user.name}</p>
                                <p>
                                    Username : <strong>{this.state.user.username}</strong>
                                </p>
                                <p>
                                    Email : <strong>{this.state.user.email}</strong>
                                </p>
                                <p>
                                    Phone : <strong>{this.state.user.phone}</strong>
                                </p>
                                <p>
                                    Website : <strong>{this.state.user.website}</strong>
                                </p>
                                <hr />
                                <p>Company</p>

                                <p>Name : <strong>{this.state.user.company.name}</strong></p>
                                <p>catchphrase : <strong>{this.state.user.company.catchPhrase}</strong></p>
                            </div>

                        </div>
                        <div className="col-md-2">
                            <div className={`${styles.v1}`}></div>
                        </div>
                        <div className="col-md-5">

                            <div className={`${styles.addressText}`}>

                                <p>Address:</p>
                                <p>
                                    Street : <strong>{this.state.user.address.street}</strong>
                                </p>
                                <p>
                                    Suite : <strong>{this.state.user.address.suite}</strong>
                                </p>
                                <p>
                                    City : <strong>{this.state.user.address.city}</strong>
                                </p>
                                <p>
                                    Zipcode : <strong>{this.state.user.address.zipcode}</strong>
                                </p>
                            </div>
                            {/* ***** Google Map ****** */}
                            <Map
                                google={this.props.google}
                                zoom={14}
                                initialCenter={{
                                    lat: -37.3159,
                                    lng: 81.1496
                                }}
                            >
                            </Map>

                        </div>
                    </div>
                </div>
                {/* *********************************************** */}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    API_KEY: 'AIzaSyADin4lOYIefdD9ViX0nsV6g1yvF1p5QvE'
})(Profile);
