import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faLocationDot } from '@fortawesome/free-solid-svg-icons';

library.add(faPenToSquare, faLocationDot);


class ViewProfile extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                        <span className="font-weight-bold">{this.props.user.username}</span>
                        <span className="font-weight-bold">{this.props.user.email}</span>  
                        <span> </span>
                    </div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-start">Profile</h4>
                            <button className="btn" onClick={this.props.activateEdit}> <FontAwesomeIcon icon="fa-pen-to-square" /> </button> 
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                
                                <h2 className="fw-bold">{this.props.user.first_name ? `${this.props.user.first_name} ${this.props.user.last_name}` : "Andrew I/O"}</h2>
                            
                            </div>
                            <div className="col-md-12">
                                <FontAwesomeIcon className='pe-2' icon="fa-location-dot"/>
                                <span className="font-weight-bold">
                                    {this.props.user.city ? `${this.props.user.city}, ` : "San Diego, "}
                                    {this.props.user.state ? `${this.props.user.state}, ` : "California, "}
                                    {this.props.user.country ? `${this.props.user.country}` : "USA"}
                                </span>
                               
                            </div>
                            
                            <div className="d-flex justify-content-between align-items-center experience mt-5">
                                <h4>Education</h4>
                            </div>
                            <br/>
                            {
                                <div className='text-start ms-3'>
                                    <div className="col-md-12">
                                        <span className="fw-bold">Western Governors University</span>
                                    </div> 
                                    <div className="col-md-12">
                                        <span> Bachelors of Science, Computer Science </span>
                                    </div>
                                    <div className="col-md-12">
                                        <span className='text-muted'>December 2021 </span>
                                    </div>
                                </div>
                            }

                            <div className="d-flex justify-content-between align-items-center experience mt-5">
                                <h4 className="text-start">Experience</h4>
                            </div>
                            <br/>

                            {
                                <div className='text-start ms-3'>
                                    <div className="col-md-12">
                                        <span>T-Mobile</span>
                                    </div> 
                                    <div className="col-md-12">
                                        <span className='fw-bold'>Software Engineer</span>
                                    </div>
                                    <div className="col-md-12">
                                        <span className='text-muted'>May 2021 - Present</span>
                                    </div>
                                    <div className="col-md-12">
                                        <span className='text-muted'>Remote</span>
                                    </div>
                                    <div className="col-md-12">
                                        <span>This is the description.</span>
                                    </div>
                                </div>
                            }   

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewProfile;