import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPlus } from '@fortawesome/free-solid-svg-icons';


library.add(faFloppyDisk, faPlus);


class EditProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {user: this.props.user};

        this.onSubmitUpdateProfile = this.onSubmitUpdateProfile.bind(this);
    }

    onSubmitUpdateProfile() {
        this.props.profileEdits(this.state.user);
    }


    render(){
        return (
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                        <label className="labels">Username</label> <input type="text" className="form-control" onChange={(e) => this.setState({user: {...this.state.user, username: e.target.value}})} value={this.state.user.username}/>
                        <label className="labels">Email</label> <input type="text" className="form-control" value={this.state.user.email}/>
                        <span> </span>
                    </div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile</h4>
                            <button className='btn' onClick={this.onSubmitUpdateProfile}> <FontAwesomeIcon icon="fa-floppy-disk"/></button>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label className="labels">First Name</label> <input type="text" className="form-control" onChange={(e) => this.setState({user: {...this.state.user, first_name: e.target.value}})} value={this.state.user.first_name}/>
                            </div>
                            
                            <div className="col-md-6">
                                <label className="labels">Last Name</label> <input type="text" className="form-control" onChange={(e) => this.setState({user: {...this.state.user, last_name: e.target.value}})} value={this.state.user.last_name}/>
                            </div>
                            <div className="col-md-6">
                                <label className="labels">City</label> <input type="text" className="form-control" onChange={(e) => this.setState({user: {...this.state.user, city: e.target.value}})} value={this.state.user.city}/>
                            </div>
                            <div className="col-md-3">
                                <label className="labels">State</label> <input type="text" className="form-control" onChange={(e) => this.setState({user: {...this.state.user, state: e.target.value}})} value={this.state.user.state}/>
                            </div>
                            <div className="col-md-3">
                                <label className="labels">Country</label> <input type="text" className="form-control" onChange={(e) => this.setState({user: {...this.state.user, country: e.target.value}})} value={this.state.user.country}/>
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