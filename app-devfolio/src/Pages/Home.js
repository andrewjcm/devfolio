import React, { useReducer } from "react";
import Typewriter from 'typewriter-effect';
import andrew from '../static/images/andrew_in_prague.jpg';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {applied: false};
        this.engStr = 'Software Engineer.';
        this.psStr = 'problem solver.';
        this.colStr = "collaborator."
    }
    render()
    {
        return (
            <div className="container-fluid">
                <div className="section">
                    <h1 className="text-center mt-5">
                        Hello, my name is Andrew.
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("I'm a " + this.psStr)
                                .pauseFor(500)
                                .deleteChars(this.psStr.length)
                                .typeString(this.colStr)
                                .pauseFor(500)
                                .deleteChars(this.colStr.length)
                                .typeString(this.engStr)
                                .start();  
                            }}
                            />
                    </h1>
                    <img className=" img-thumbnail rounded-circle mx-auto d-block w-25 m-5" src={andrew} alt='Andrew'/>
                </div>
                <div className="section d-flex justify-content-center">
                    <div className=" d-inline">
                        {
                            !this.state.applied
                                ? <button className="btn btn-primary" onClick={() => this.setState({applied: true})}>View Resume</button>
                                : <div></div>
                        }
                        {
                            this.state.applied 
                                ?   <form>
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