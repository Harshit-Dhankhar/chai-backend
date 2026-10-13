import mongoose,{Schema,model} from "mongoose";

const subscriptionSchema=Schema({
    subscriber:{
        type:Schema.Types.ObjectId, //one who is subscribing
        ref: "User"
    },
    channel:{
        type:Schema.Types.ObjectId, //jisko subscribe kr rhe h
        ref: "User"
    }
},{timestamps:true});

export const Subscription=model("Subscription",subscriptionSchema);