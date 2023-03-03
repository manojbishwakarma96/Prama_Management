const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a name"]
    },
    email:{
        type:String,
        required:[true,"Please add a email-address"],
        unique:true,
        trim:true,
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            "please enter a valid email-address"
        ]
    },
    password:{
        type: String,
        required:[true, "Please add a password"],
        minLength:[6, "Password must be upto 6 characters"],
        maxLength: [23, "Password must be more then 23 characters"],   
     },
    photo:{
        type:String,
        required:[true, "Please enter a photo"],
        default:"https://i.ibb.co/4pDNDk1/avatar.png"
    },
    phone:{
        type:String,
        default:"+977"
    },
    bio:{
        type:String,
        maxLength: [23, "Bio must be less then 250 characters"],
        default:"Bio"
    }
},{
    timestamps:true,
    
}


)
const User=mongoose.model("User",userSchema)

module.exports=User;