import React from 'react';
import { axiosPrivate } from '../Services/Api';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';


library.add(faTrashArrowUp);


class EditExperience extends React.Component {
    constructor(props) {
        super(props);
        this.index = props.key;
        this.state = { experience: props.data };
        this.updateExperience = this.updateExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
    }

    updateExperience(e, index, key) {
        let expUpdate = this.state.experience;
        if (key === 'current') {
            expUpdate['end_date'] = null;
            expUpdate[key] = !expUpdate[key];
        }
        else {
            expUpdate[key] = e.target.value;
        }
        expUpdate['updated'] = true;
        this.setState({Experience: expUpdate});

        this.props.updateExperienceProfile(this.state.experience, index);
    }

    async deleteExperience(){
        try {
            if (!this.state.experience?.added){
                await axiosPrivate.delete(`experience/${this.state.experience.id}/`);
            }
        
            this.props.deleteExperienceProfile(this.props.data);
        }
        catch (error){
            console.log(error);
        }
    }

    render(){
        return(
            <div>
                <div className="col-md-12">
                    <label className="labels">Company</label>
                    <input type="text" className="form-control"
                        onChange={(e) => this.updateExperience(e, this.index, 'company')} 
                        value={this.state.experience.company}/>
                </div> 
                <div className="col-md-12">
                    <label className="labels">Job Title</label>
                    <input type="text" className="form-control"
                        onChange={(e) => this.updateExperience(e, this.index, 'title')} 
                        value={this.state.experience.title}/>
                </div>
                <div className="col-md-12">
                    <label className="labels">Location</label>
                    <input type="text" className="form-control"
                        onChange={(e) => this.updateExperience(e, this.index, 'location')} 
                        value={this.state.experience.location}/>
                </div>
                <div className="col-md-12">
                    <label className="labels">Start Date</label>
                    <input type="date" className="form-control"
                        onChange={(e) => this.updateExperience(e, this.index, 'start_date')} 
                        value={this.state.experience.start_date}/>
                </div>
                { this.state.experience.current
                    ? <div></div>
                    :
                    <div className="col-md-12">
                        <label className="labels">End Date</label>
                        <input type="date" className="form-control"
                            onChange={(e) => this.updateExperience(e, this.index, 'end_date')} 
                            value={this.state.experience.end_date}
                            disabled={this.state.experience.current}/>
                    </div>
                }
                <div className="col-md-3 m-auto form-check">
                    <label className="form-check-label" >
                        Current?
                        <input type="checkbox" className="form-check-input"
                        checked={this.state.experience.current}
                        onChange={(e) => this.updateExperience(e, this.index, 'current')} />
                    </label>
                </div>
                <div className="col-md-12 mt-3">
                    <label className="labels">Description</label>
                    <textarea type="text" className="form-control" 
                        onChange={(e) => this.updateExperience(e, this.index, 'description')} 
                        value={this.state.experience.description}/>
                </div>
                <br/>
                <button className='btn' onClick={() => this.deleteExperience()}>
                    <FontAwesomeIcon icon='fa-trash-arrow-up'/>
                </button>
                <br/>
            </div>
        );
    }
}

export default EditExperience;