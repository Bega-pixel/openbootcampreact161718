import React from "react";


const Profile = ({ cards ,name, setName ,email, setEmail, handleSubmit, hadleChange }) => {

    return (
    <div>
        <form>

            <div className="mb-3">
                <label htmlFor="exampleInputnewCardsName" className="form-label">
                Name
                </label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                className="form-control"
                id="exampleInputName"
                hadleChange={hadleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
                </label>hadleChange
                <input
                value={email}
                onChange={(e) => 
                                setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //hadleChange={hadleChange}
                />
            <div id="emailHelp" className="text ">
                We'll never share your email with anyone else.
            </div>
            </div>
        
            <button
                onClick={handleSubmit}
                type="submit"
                value={cards} 
                className="btn btn-outline-info m-3">
            Add User
            </button>
        </form>
        
        
    </div>
  );
};


export default Profile;