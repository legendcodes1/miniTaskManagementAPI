import { error } from "console";
import { userRepository } from "../repositories/userRepository.ts"
import type { User } from "../types/user.types.js";


export const userService = {

    getAllUsers() {
        return userRepository.findAll()
    },

    getUserById(id: String) {
        const user = userRepository.findById(id);

        if(!user){
             throw new Error("User does not exists")
        }
        return user
    },

    createUser(data : any) {
        const {id, username, password, email, role} = data;

        const newUser: User = {
            id,
            username,
            password,
            email,
            role,
            createdAt: new Date().toISOString(),
            isActive: true
          };
      
       return userRepository.create(newUser);
    },

    deleteUser(id : string){
        const deletedUser = userRepository.delete(id);

        if(!deletedUser){
            throw Error("user not found")
        }
        return deletedUser;
    }
}