import React, { useReducer } from "react";
import Typewriter from 'typewriter-effect';
import andrew from '../static/images/andrew_in_prague.jpg';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {applied: false};
        this.engStr = 'Software Engineer.';
        this.psStr = 'Problem Solver.';
        this.colStr = "Collaborator."
    }
    render()
    {
        return (
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                <div className="section">
                    <h1 className="mt-5">
                        Hello, my name is Andrew.
                    </h1>
                        <h3 className=" fst-regular d-flex flex-row">
                            <span className="me-2">I'm a</span>
                            <span className="border-bottom border-dark border-3 w-50">
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString(this.psStr)
                                        .pauseFor(500)
                                        .deleteChars(this.psStr.length)
                                        .typeString(this.colStr)
                                        .pauseFor(500)
                                        .deleteChars(this.colStr.length)
                                        .typeString(this.engStr)
                                        .start();  
                                    }}
                                    />
                                </span>
                            </h3>
                    <img className=" img-thumbnail rounded-circle mx-auto d-block w-75 m-5" src={andrew} alt='Andrew'/>
                </div>
                <div className="section">
                    <div>
                        {
                            !this.state.applied
                                ? <button className="btn btn-primary" onClick={() => this.setState({applied: true})}>View Resume</button>
                                : <div></div>
                        }
                        {
                            this.state.applied 
                                ?   <form>
                                        <p>View Resume</p>
                                        <div className="form-floating mb-3">
                                            <input type='text' className="form-control" id="jobId" aria-describedby="jobId" placeholder="job-id-123"/>
                                            <label for="jobId" className=" form-label">Job Id</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                : <div></div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;