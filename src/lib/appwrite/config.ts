import {Client,Storage,Account,Databases,Avatars} from 'appwrite'

export const appwriteConfig= {
    projectId : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    endpoitURL : import.meta.env.VITE_APPWRITE_ENDPOINT_URL,
    databaseId:import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId:import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId:import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    saveCollectionId:import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
    postCollectionId:import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,


 
}

export const client = new Client();
// Must set a configuration to client
client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.endpoitURL)
export const storage = new Storage(client);
export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);
