import { Client, Account, ID } from 'appwrite';
import {project_id,endpoint} from './config';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(endpoint) // Your API Endpoint
            .setProject(project_id) // Your project ID);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}: {email: string, password: string, name: string}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}:{email: string, password: string}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService