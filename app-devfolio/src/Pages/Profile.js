import React from 'react';
import { axiosPrivate } from '../Services/Api';
import ViewProfile from '../Components/ViewProfile';
import EditProfile from '../Components/EditProfile';



class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true, 
            editing: false,
            user: {}
        }
        this.userId = props.auth.userId
        this.submitUpdateProfile = this.submitUpdateProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }


    componentDidMount() {
        this.getUserDetail();
        this.setState({loading: false});
    }

    async getUserDetail() {
        try {
            const response = await axiosPrivate.get(`users/${this.userId}/`);
            this.setState({user: response.data});
        } 
        catch (error) {
            console.log(error);
        }
    }

    submitUpdateProfile(edits, changes) {
        this.setState({user: edits});
        this.editProfile();

        if (changes.user.updated){
            this.updateUser(changes.user.data);
        }

        if (changes.developer.updated) {
            this.updateDeveloper(changes.developer.updatedData);
        }
        
        if (changes.developer.added) {
            this.addDeveloper(changes.user.developer.addedData);
        }

        if (changes.education.updated) {
            for (let edu of changes.education.updatedData) {
                this.updateEducation(edu);
            }
        }
        
        if (changes.education.added) {
            for (let edu of changes.education.addedData) {
                this.addEducation(edu);
            }
        }

        if (changes.education.deleted) {
            for (let edu of changes.education.deletedId) {
                this.deleteEducation(edu);
            }
        }

        if (changes.experience.updated) {
            for (let exp of changes.experience.updatedData) {
                this.updateExperince(exp);
            }
        }
        
        if (changes.experience.added) {
            for (let exp of changes.experience.addedData) {
                this.addExperince(exp);
            }
        }

        if (changes.experience.deleted) {
            for (let exp of changes.experience.deletedId) {
                this.deleteExperince(exp);
            }
        }
    }

    editProfile(){
        this.setState({ editing: !this.state.editing });
    }

    async updateUser(user) {
        try {
            const response = await axiosPrivate.put(`users/${this.userId}/`, user);
        } catch (error) {
            console.log(error);
        }
    }

    async addDeveloper(developer) {
        try {
            const response = await axiosPrivate.post(`developers/`, developer);
        } catch (error) {
            console.log(error);
        }
    }

    async updateDeveloper(developer) {
        try {
            const response = await axiosPrivate.put(`developers/${developer.id}/`, developer);
        } catch (error) {
            console.log(error);
        }
    }

    async updateEducation(education) {
        try {
            const response = await axiosPrivate.put(`education/${education.id}/`, education);
        } catch (error) {
            console.log(error);
        }
    }

    async addEducation(education) {
        try {
            const response = await axiosPrivate.post(`education/`, education);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteEducation(id) {
        try {
            const response = await axiosPrivate.delete(`education/${id}/`);
        } catch (error) {
            console.log(error);
        }
    }

    async updateExperince(experience) {
        try {
            const response = await axiosPrivate.put(`experience/${experience.id}/`, experience);
        } catch (error) {
            console.log(error);
        }
    }

    async addExperince(experience) {
        try {
            const response = await axiosPrivate.post(`experience/`, experience);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteExperince(id) {
        try {
            const response = await axiosPrivate.delete(`experience/${id}/`);
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        if (this.state.loading || !this.state.user) {
            return <h1>Loading...</h1>;
        }

        return (
            <div className="container rounded bg-white mt-5 mb-5">
                { this.state.editing 
                    ? <EditProfile user={this.state.user} profileEdits={this.submitUpdateProfile}/>
                    : <ViewProfile user={this.state.user} activateEdit={this.editProfile}/>
                }
            </div>
        );
    }
}

export default Profile;