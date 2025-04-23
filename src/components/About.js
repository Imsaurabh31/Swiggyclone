
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);

   // console.log("parent constructor");
  }

  componentDidMount() {
   // console.log("parent component did mount");
  }

  render() {
   // console.log("parent render");

    return (
      <div>
        <UserClass
          name={"First"}
          location={"Sitamarhi Class"}
          contact={"@mishrasaurabh"}
        />
      </div>

    
      
    );
  }
}

export default About;
