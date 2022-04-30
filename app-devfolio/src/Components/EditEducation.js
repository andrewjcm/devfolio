import React from 'react';


class EditEducation extends React.Component {
    constructor(props) {
        super(props);

        this.state = { education: this.props.education }
    }

    render() {
        return(
            <div>
                <div className="col-md-12">
                    <label className="labels">School Name</label>
                    <input type="text" className="form-control" 
                        onChange={(e) => this.updateEducation(e, i, 'school')} 
                        value={this.state.education.school}/>
                </div> 
                <div className="col-md-12">
                    <label className="labels">Degree</label>
                    <input type="text" className="form-control" 
                        onChange={(e) => this.updateEducation(e, i, 'degree')} 
                        value={this.state.education.degree}/>
                </div> 
                <div className="col-md-12">
                    <label className="labels">Field of Study</label>
                    <input type="text" className="form-control"
                        onChange={(e) => this.updateEducation(e, i, 'field')} 
                        value={this.state.education.field}/>
                </div>
                <div className="col-md-12">
                    <label className="labels">Graduation Date</label>
                    <input type="date" className="form-control" 
                        onChange={(e) => this.updateEducation(e, i, 'end_date')} 
                        value={this.state.education.end_date}/>
                </div> 
                <br/>
                <button className='btn' onClick={() => this.deleteEducation(i)}>
                    <FontAwesomeIcon icon='fa-trash-arrow-up'/>
                </button>
                <br/>
            </div>

        );
    }
}