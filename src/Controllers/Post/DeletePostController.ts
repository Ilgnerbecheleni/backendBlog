import { Request, Response } from "express";
import DeletePostService from "../../Services/Post/deletePostService";

class DeletePostController {
    async handle(request: Request, response: Response) {
        try {
            const id = request.params.id;
            const deletePostservice = new DeletePostService();
            const post = await deletePostservice.execute(id);

            response.json({ message: `post: ${post.title} deletado com sucesso!` });


        } catch (error) {
            response.status(400).json({ message: "post not found", error:error.message });
        }




    }
}

export default DeletePostController;