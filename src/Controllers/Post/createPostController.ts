import { Request, Response } from "express";
import CreatePostService from "../../Services/Post/createPostService";

class CreatePostcontroller {
    async handle(request: Request, response: Response) {
        const { title, content } = request.body;
        const authorId = request.user_id
        const createUserService = new CreatePostService();

        if (!request.file) {
            throw new Error("error upload file")
        } else {
            const { originalname, filename: image } = request.file;

               const user = await createUserService.execute({ title, content, authorId, image })
               return response.json(user);
        }


    }
}

export default CreatePostcontroller 