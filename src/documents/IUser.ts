import mongoDB from "mongodb";

export default interface IDocumentUser {
    _id: mongoDB.ObjectId;
    uid: string;
    name: string;
    password: string;
}
