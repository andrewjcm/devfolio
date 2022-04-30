import React from 'react';
import EditEducation from './EditEducation';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPlus, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';


library.add(faFloppyDisk, faPlus, faTrashArrowUp);


class EditProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            edits : {
                user: false,
                developer: false,
                education: false,
                experience: false
            },
            user: this.props.user
        };

        this.onSubmitUpdateProfile = this.onSubmitUpdateProfile.bind(this);
        this.updateEducation = this.updateEducation.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
    }

    onSubmitUpdateProfile() {
        this.props.profileEdits(this.state.user, this.state.edits);
    }

    updateUser(e, key){
        let newData = this.state.user;
        newData[key] = e.target.value;

        this.setState({
            user: newData,
            edits: {
                ...this.state.edits,
                user: true
            }
        });
    }

    updateDeveloper(e, key){
        let newData = this.state.user;
        newData.developer[key] = e.target.value;

        this.setState({
            user: newData,
            edits: {
                ...this.state.edits,
                developer: true
            }
        });
    }

    updateEducation(education, index) {
        let eduArray = this.state.user.developer.education;
        eduArray[index] = education;

        this.setState({
            edits: {
                ...this.state.edits,
                education: true
            },
            user: {
                ...this.state.user, 
                developer: {
                    ...this.state.user.developer, 
                    education: eduArray
                }
            }
        });

    }

    addEducation(){
        let eduArray = this.state.user.developer.education;
        eduArray.push({
            school: '', 
            degree: '', 
            field: '', 
            end_date: '',
            added: true,
            developer: this.state.user.developer.id
        });

        this.setState({
            edits: {
                ...this.state.edits,
                education: true
            },
            user: {
                ...this.state.user, 
                developer: {
                    ...this.state.user.developer, 
                    education: eduArray
                }
            }
        });
    }

    deleteEducation(index) {
        let eduArray = this.state.user.developer.education;
        eduArray.splice(index, 1);
        this.setState({
            edits: {
                ...this.state.edits,
                education: true
            },
            user: {
                ...this.state.user, 
                developer: {
                    ...this.state.user.developer, 
                    education: eduArray
                }
            }
        });
    }

    updateExperience(e, index, key) {
        let expArray = this.state.user.developer.experience;
        expArray[index][key] = e.target.value;

        this.setState({profile: {...this.state.profile, updateExp: true},
            user: {...this.state.user, developer: 
                {...this.state.user.developer, experience: expArray}
        }});

    }

    addExperience(){
        let expArray = this.state.user.developer.experience;
        expArray.push({company: '', title: ''});

        this.setState(
            {...this.state.user, developer: 
                {...this.state.user.developer, experience: expArray}
        });
    }

    deleteExperience(index) {
        let expArray = this.state.user.developer.experience;
        if (index > -1){
            expArray.splice(index, 1);
        }
        this.setState({profile: {...this.state.profile, updateExp: true},
            user: {...this.state.user, developer: 
                {...this.state.user.developer, experience: expArray}
        }});
    }


    render(){
        return (
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                        <label className="labels">Username</label> 
                        <input type="text" className="form-control" 
                            onChange={(e) => this.updateUser(e, 'username')} 
                            value={this.state.user.username}/>
                        <label className="labels">Email</label> 
                        <input type="text" className="form-control"
                            onChange={(e) => this.updateUser(e, 'email')} 
                            value={this.state.user.email}/>
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
                                <label className="labels">First Name</label> 
                                <input type="text" className="form-control" 
                                    onChange={(e) => this.updateUser(e, 'first_name')} 
                                    value={this.state.user.first_name}/>
                            </div>
                            
                            <div className="col-md-6">
                                <label className="labels">Last Name</label> 
                                <input type="text" className="form-control" 
                                    onChange={(e) => this.updateUser(e, 'last_name')} 
                                    value={this.state.user.last_name}/>
                            </div>
                            <div className="col-md-6">
                                <label className="labels">City</label> 
                                <input type="text" className="form-control" 
                                    onChange={(e) => this.updateDeveloper(e, 'city')} 
                                    value={this.state.user?.developer?.city}/>
                            </div>
                            <div className="col-md-3">
                                <label className="labels">State</label> 
                                <input type="text" className="form-control" 
                                    onChange={(e) => this.updateDeveloper(e, 'state')} 
                                    value={this.state.user?.developer?.state}/>
                            </div>
                            <div className="col-md-3">
                                <label className="labels">Country</label> 
                                <input type="text" className="form-control" 
                                    onChange={(e) => this.updateDeveloper(e, 'country')} 
                                    value={this.state.user?.developer?.country}/>
                            </div>
                            <div className="d-flex justify-content-between align-items-center experience mt-5">
                                <h4 className="text-right">Education</h4>
                            </div>
                            <br/>
                            { this.state.user.developer.education.map((edu, i) => 
                                <EditEducation 
                                    key={i} 
                                    data={edu} 
                                    updateEducationProfile={this.updateEducation}
                                    deleteEducationProfile={this.deleteEducation} />
                            )}
                            <div className='pt-5'>
                                <button className='btn' onClick={() => this.addEducation()} > 
                                    <FontAwesomeIcon icon="fa-plus"/>
                                </button>
                            </div>
                                

                            <div className="d-flex justify-content-between align-items-center experience mt-5">
                                <h4 className="text-right">Experience</h4>
                            </div>
                            <br/>
                            <div className="col-md-12">
                                <label className="labels">Company</label>
                                <input type="text" className="form-control" value=""/>
                            </div> 
                            <br/>
                            <div className="col-md-12">
                                <label className="labels">Job Title</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                            <div className="col-md-4">
                                <label className="labels">Start Date</label>
                                <input type="date" className="form-control" value=""/>
                            </div>
                            <div className="col-md-4">
                                <label className="labels">End Date</label>
                                <input type="date" className="form-control" value=""/>
                            </div>
                            <div className="col-md-3 m-auto form-check">
                                <label className="form-check-label">Current?</label>
                                <input type="checkbox" className="form-check-input" value=""/>
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="labels">Description</label>
                                <textarea type="text" className="form-control" value=""/>
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