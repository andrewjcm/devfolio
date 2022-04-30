import React from 'react';
import EditEducation from './EditEducation';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPlus, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import EditExperience from './EditExperience';


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
        
        this.updateExperience = this.updateExperience.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
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

    deleteEducation(edu) {
        let eduArray = this.state.user.developer.education;
        let index = eduArray.indexOf(edu);
        if (index > -1) {
            eduArray.splice(index, 1);
        }
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

    
    updateExperience(experience, index) {
        let expArray = this.state.user.developer.experience;
        expArray[index] = experience;

        this.setState({
            edits: {
                ...this.state.edits,
                experience: true
            },
            user: {
                ...this.state.user, 
                developer: {
                    ...this.state.user.developer, 
                    experience: expArray
                }
            }
        });

    }

    addExperience(){
        let expArray = this.state.user.developer.experience;
        expArray.push({
            company: '', 
            title: '',
            location: '', 
            start_date: '', 
            end_date: '',
            current: false,
            description: '',
            added: true,
            developer: this.state.user.developer.id
        });

        this.setState({
            edits: {
                ...this.state.edits,
                experience: true
            },
            user: {
                ...this.state.user, 
                developer: {
                    ...this.state.user.developer, 
                    experience: expArray
                }
            }
        });
    }

    deleteExperience(exp) {
        let expArray = this.state.user.developer.experience;
        let index = expArray.indexOf(exp);
        if (index > -1) {
            expArray.splice(index, 1);
        }
        this.setState({
            edits: {
                ...this.state.edits,
                experience: true
            },
            user: {
                ...this.state.user, 
                developer: {
                    ...this.state.user.developer, 
                    experience: expArray
                }
            }
        });
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
                            { this.state.user.developer.experience.map((exp, i) => 
                                <EditExperience 
                                    key={i} 
                                    data={exp} 
                                    updateExperienceProfile={this.updateExperience}
                                    deleteExperienceProfile={this.deleteExperience} />
                            )}
                            <div className='pt-5'>
                                <button className='btn' onClick={() => this.addExperience()} > 
                                    <FontAwesomeIcon icon="fa-plus"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;