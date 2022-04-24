import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPlus } from '@fortawesome/free-solid-svg-icons';


library.add(faFloppyDisk, faPlus);


class EditProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {user: props.user};
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                        <span><label className="labels">Username</label> <input type="text" className="form-control" onChange={(e) => this.setState({user: {...this.state.user, username: e.target.value}})} value={this.state.user.username}/></span>

                        { this.state.editing 
                            ? <span><label className="labels">Email</label> <input type="text" className="form-control" value={this.state.user.email}/></span>
                            : <span className="font-weight-bold">{this.state.user.email}</span>
                        }  
                        
                        <span> </span>
                    </div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile</h4>
                            <button className='btn' onClick={this.submitUpdateProfile}> <FontAwesomeIcon icon="fa-floppy-disk"/></button>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                
                                { this.state.editing 
                                    ? <div><label className="labels">Full Name</label> <input type="text" className="form-control" onChange={(e) => this.setState({user: {...this.state.user, name: e.target.value}})} value={this.state.user.name}/></div>
                                    : <h2 className="font-weight-bold">{this.state.user.name ? this.state.user.name : "Name not set"}</h2>
                                }
                            </div>
                            <div className="col-md-6">
                                { this.state.editing 
                                    ? <div><label className="labels">City</label> <input type="text" className="form-control" onChange={(e) => this.setState({user: {...this.state.user, city: e.target.value}})} value={this.state.user.city}/></div>
                                    : <span className="font-weight-bold">{this.state.user.city ? this.state.user.city : "City not set"}</span>
                                }
                            </div>
                            <div className="col-md-6">
                                { this.state.editing 
                                    ? <div><label className="labels">State</label> <input type="text" className="form-control" onChange={(e) => this.setState({user: {...this.state.user, state: e.target.value}})} value={this.state.user.state}/></div>
                                    : <span className="font-weight-bold">{this.state.user.state ? this.state.user.state : "State not set"}</span>
                                }
                            </div>
                            
                            <div className="d-flex justify-content-between align-items-center experience mt-5">
                                <h4 className="text-right">Education</h4>
                            </div>
                            <br/>
                            <div className="col-md-12">
                                <label className="labels">School Name</label>
                                <input type="text" className="form-control" placeholder="experience" value=""/>
                            </div> 
                            <br/>
                            <div className="col-md-12">
                                <label className="labels">Field of Study</label>
                                <input type="text" className="form-control" placeholder="additional details" value=""/>
                            </div>

                            <div className='pt-5'>
                                <FontAwesomeIcon icon="fa-plus"/>
                            </div>

                            <div className="d-flex justify-content-between align-items-center experience mt-5">
                                <h4 className="text-right">Experience</h4>
                            </div>
                            <br/>
                            <div className="col-md-12">
                                <label className="labels">Experience in Designing</label>
                                <input type="text" className="form-control" placeholder="experience" value=""/>
                            </div> 
                            <br/>
                            <div className="col-md-12">
                                <label className="labels">Additional Details</label>
                                <input type="text" className="form-control" placeholder="additional details" value=""/>
                            </div>
                            <div className='pt-5'>
                                <FontAwesomeIcon icon="fa-plus"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;