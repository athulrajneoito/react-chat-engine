import firebase from 'firebase/app';
import { auth } from "../config/firebase";
import Axios from 'axios';
import { chatConfig } from "../config/chatEngine";

export const googleLogin = () => {
   return auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
}
export const getUser = async (username: string, userId: string) => {
    const headers = {
        "Project-ID": chatConfig.projectId,
        "User-Name": username,
        "User-Secret": userId
    }
    try {
        const data = await Axios.get(`${chatConfig.baseUrl}/users/me`, {
            headers: { ...headers }
        });
        console.log(data);
        return data;

    } catch (error) {
        return { error: error.message };
    }

}

export const createUser = async (userData: FormData) => {
    const headers = {
        "private-key": chatConfig.private,
    }
    try {
        const newUser = Axios.post(`${chatConfig.baseUrl}/users/`, userData, {
            headers: { ...headers }
        });
        return newUser
    } catch (error) {
        return { error: error.message };
    }
}