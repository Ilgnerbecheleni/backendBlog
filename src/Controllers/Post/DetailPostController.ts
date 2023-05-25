import { Request, Response } from "express";
import DetailPostService from "../../Services/Post/DetailPostService";


class DetailPostController {
    async handle(request: Request, response: Response) {

        const postid = request.params.id;


        const detailUserService = new DetailPostService();
        const post = await detailUserService.execute(postid);
        
        response.json(post);


    }
}

export default DetailPostController;