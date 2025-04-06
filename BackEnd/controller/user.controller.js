import User from "../model/user.model.js"
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const {fullName, email, password} = req.body;

        const user = await User.findOne({email});

        if(user) {
            return res.status(400).json("User already exists");
        }

        const hashPassword = await bcryptjs.hash(password, 10);

        const createdUser = new User({
            fullName: fullName,
            email: email,
            password: hashPassword
        })

        await createdUser.save();

        res.status(201).json({message: "User Created Successfully"});
    }
    catch(error) {
        console.log("Error" + error.message);
        res.status(500).json({message: "Internal Server error"});
     }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        const isMatch = await bcryptjs.compare(password, user.password);

        if(!user || !isMatch) {
            return res.status(400).json({message: "Invalid Email or Password"});
        }

        else {
            return res.status(200).json({message: "Login Successfully", 
                user : {
                    _id: user._id,
                    fullName: user.fullName,
                    email: user.email
                }
            });
        }
    }
    catch(error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}