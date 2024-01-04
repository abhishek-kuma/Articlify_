import { Client, Databases, Query } from "appwrite";
import { project_id, database_id, endpoint, collection_id } from "./config";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(project_id)

const databases = new Databases(client);

export async function getArticles() {
  try {
    const response = await databases.listDocuments(
      database_id,
      collection_id,
      [
        Query.limit(20)
      ]
    );
    return response;
  } catch (error) {
    throw error; // Rethrow the error for handling in the component
  }
}

