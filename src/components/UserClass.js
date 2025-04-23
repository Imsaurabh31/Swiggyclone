import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "https://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Imsaurabh31");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate(){
    console.log("component did update");
    
  }

  componentWillUnmount(){
    console.log("component will unmount");
    
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

export default UserClass;

/**
 * constructor is called(dummy)
 * then render happend(dummy)
 * componentdidmount 
 * api call
 * 
 * this.setState: set variabe is updated
 * 
 * ----update
 * render(api data)
 * html loaded with new api data
 * then called componentdidupdate
 * 
 */

