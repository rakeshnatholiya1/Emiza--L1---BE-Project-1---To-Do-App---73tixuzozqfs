body.password;

    //Write your code here.

}



/*

Post request json file structure
    obj =  {
        name:name,
        email:email,
        password: password,
        role: role
    }



*/

const signupUser = async (req, res) => {

    const {email, password, name, role} = req.body;

     //Write your code here.

}

module.exports = { loginUser , signupUser };

