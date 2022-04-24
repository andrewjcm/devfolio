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
            profile: { 
                updateUser: false, 
                updateDev: false, 
                updateEdu: false, 
                updateExp: false 
            },
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

    submitUpdateProfile(edits) {
        // this.setState({user: edits});
        console.log(`New username: ${edits}`);
        this.editProfile();
    }

    editProfile(){
        this.setState({ editing: !this.state.editing });
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