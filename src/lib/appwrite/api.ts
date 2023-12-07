import { INewUser } from "@/types/types";
import { account } from "./config";
import {ID} from 'appwrite'

export async function createUserAccount(user:INewUser){
    try {
        const newUser=await account.create(
            ID.unique(),
            user.email,
            user.username,
            user.password
        )
        return newUser;
    }
    catch(error){
        console.log(error)
        return error;
    }
}