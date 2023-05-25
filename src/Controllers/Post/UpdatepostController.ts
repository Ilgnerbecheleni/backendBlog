import { Request, Response } from "express";
import UpdatePostService from "../../Services/Post/UpdatePostService";

class UpdatepostController {
    async handle(request: Request, response: Response) {
        try {
            const { title, content } = request.body;
        const id = request.params.id
        const updateUserService = new UpdatePostService();

        if (!request.file) {
            throw new Error("error upload file")
        } else {
            const { originalname, filename: image } = request.file;

               const user = await updateUserService.execute(id,{ title, content, image })
               response.json(user);
        }
        } catch (error) {
            response.status(401).send({message:error.message})
        }


    }
}

export default UpdatepostController 