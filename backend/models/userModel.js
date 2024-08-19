const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add a name"]
    },
    email:{
        type: String,
        require: [true, "Please add a email"],
        unique: true,
        trim: true,
        match: [
             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
           "Please enter a valid email"
        ]
    },
    password: {
        type: String,
        required: true,
        minLength: [6, "Password word must be upto 6 characters"]
    },
},{
    timestamps: true,
});


// Encrypt password before saving to DB
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next()
    };

// // Hash Password
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(this.password, salt);
this.password = hashedPassword;
  });

const User = mongoose.model("User", userSchema)
module.exports = User;