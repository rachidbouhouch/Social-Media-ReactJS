import {Client,Storage,Account,Databases,Avatars} from 'appwrite'

export const appwriteConfig= {
    projectId : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    endpoitURL : import.meta.env.VITE_APPWRITE_ENDPOINT_URL
 
}

export const client = new Client();
// Must set a configuration to client
client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.endpoitURL)
export const storage = new Storage(client);
export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);
