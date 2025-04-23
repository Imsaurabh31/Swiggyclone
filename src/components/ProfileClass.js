import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
                avatar_url: "", // Safe default
            },
        };
        console.log("child-constructor " + this.props.name);
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Imsaurabh31");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json,
        });

        console.log("child-componentDidMount " + this.props.name);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="User Avatar" width="150" height="150" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @mishrasaurabh</h4>
            </div>
        );
    }
}

export default Profile;

