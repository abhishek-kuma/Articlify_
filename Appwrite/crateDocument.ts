import { Client, Databases, ID } from "appwrite";
import { project_id, database_id, endpoint, collection_id } from "./config";

const client = new Client()

client.setEndpoint(endpoint).setProject(project_id);
const databases = new Databases(client);
export async function createPost({ title, imageLink, article, userid, name }: { title: string, imageLink: string, article: string, userid: string, name: string}) {
    const promise = databases.createDocument(
        database_id,
        collection_id,
        ID.unique(),
        {
            userid: userid,
            name: name,
            imgurl: imageLink,
            Title: title,
            article: article
        }
    );
    promise.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}
