import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faLocationDot } from '@fortawesome/free-solid-svg-icons';

library.add(faPenToSquare, faLocationDot);


class ViewProfile extends React.Component {
    constructor(props){
        super(props);
        this.formatDate = this.formatDate.bind(this);
    }

    formatDate(inputDate) {
        const dateFormat = {month: "short", year: "numeric"};
        return new Date(inputDate).toLocaleDateString('en-us', dateFormat);
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
                                    {`${this.props.user?.developer?.city}, `}
                                    {`${this.props.user?.developer?.state}, `}
                                    {`${this.props.user?.developer?.country}`}
                                </span>
                               
                            </div>
                            { this.props.user?.developer?.education.length
                                ?   <div>
                                        <div className="d-flex justify-content-between align-items-center experience mt-5">
                                            <h4>Education</h4>
                                        </div>
                                        <br/>
                                        { this.props.user.developer.education.map(edu =>
                                            <div className='text-start ms-3 mb-3' key={edu.id}>
                                                <div className="col-md-12">
                                                    <span className="fw-bold">{edu.school}</span>
                                                </div> 
                                                <div className="col-md-12">
                                                    <span> {edu.degree}, {edu.field} </span>
                                                </div>
                                                <div className="col-md-12">
                                                    <span className='text-muted'>{this.formatDate(edu.end_date)} </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                : <div></div>
                            }
                            { this.props.user?.developer?.experience.length
                                ?   <div>
                                        <div className="d-flex justify-content-between align-items-center experience mt-5">
                                            <h4 className="text-start">Experience</h4>
                                        </div>
                                        <br/>
                                        { this.props.user.developer.experience.map(exp =>
                                            <div className='text-start ms-3'>
                                                <div className="col-md-12">
                                                    <span>{exp.company}</span>
                                                </div> 
                                                <div className="col-md-12">
                                                    <span className='fw-bold'>{exp.title}</span>
                                                </div>
                                                <div className="col-md-12">
                                                    <span className='text-muted'>
                                                        {this.formatDate(exp.start_date)} - {exp.current ? 'Present' : this.formatDate(exp.end_date)}
                                                    </span>
                                                </div>
                                                <div className="col-md-12">
                                                    <span className='text-muted'>{exp.location}</span>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <span>{exp.description}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                : <div></div>
                            }   

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewProfile;