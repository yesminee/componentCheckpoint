import React from "react";
import pic from "../../images/moi.png";
import "../../App.css";

function profile(){
    return (
      <div> 
        <img className="pic" src={pic} alt="my pic" />
      </div>
    );
}
export default profile;