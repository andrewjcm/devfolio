import React from 'react';
import { axiosPrivate } from '../Services/Api';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';


library.add(faTrashArrowUp);


class EditEducation extends React.Component {
    constructor(props) {
        super(props);
        this.index = props.key;
        this.state = { education: props.data }
        this.updateEducation = this.updateEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
    }
    
    updateEducation(e, index, key) {
        e.preventDefault();
        let eduUpdate = this.state.education;
        eduUpdate[key] = e.target.value;
        eduUpdate['updated'] = true;
        this.setState({education: eduUpdate});

        this.props.updateEducationProfile(this.state.education, index);
    }

    async deleteEducation(){
        try {
            if (!this.state.education?.added){
                await axiosPrivate.delete(`education/${this.state.education.id}/`);
            }
        
            this.props.deleteEducationProfile(this.props.data);
        }
        catch (error){
            console.log(error);
        }
    }

    render() {
        return(
            <div>
                <div className="col-md-12">
                    <label className="labels">School Name</label>
                    <input type="text" className="form-control" 
                        onChange={(e) => this.updateEducation(e, this.index, 'school')} 
                        value={this.state.education.school}/>
                </div> 
                <div className="col-md-12">
                    <label className="labels">Degree</label>
                    <input type="text" className="form-control" 
                        onChange={(e) => this.updateEducation(e, this.index, 'degree')} 
                        value={this.state.education.degree}/>
                </div> 
                <div className="col-md-12">
                    <label className="labels">Field of Study</label>
                    <input type="text" className="form-control"
                        onChange={(e) => this.updateEducation(e, this.index, 'field')} 
                        value={this.state.education.field}/>
                </div>
                <div className="col-md-12">
                    <label className="labels">Graduation Date</label>
                    <input type="date" className="form-control" 
                        onChange={(e) => this.updateEducation(e, this.index, 'end_date')} 
                        value={this.state.education.end_date}/>
                </div> 
                <br/>
                <button className='btn' onClick={() => this.deleteEducation()}>
                    <FontAwesomeIcon icon='fa-trash-arrow-up'/>
                </button>
                <br/>
            </div>

        );
    }
}

export default EditEducation;