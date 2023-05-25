import { Request, Response } from "express";
import GetAllPostsServices from "../../Services/Post/GetAllPostsService";

class GetAllPostsController {
    async handle(request: Request, response: Response) {

        const postid = request.params.id;


        const getAllPosts = new GetAllPostsServices();
        const posts = await getAllPosts.execute();
        
        response.json(posts);


    }
}

export default GetAllPostsController;