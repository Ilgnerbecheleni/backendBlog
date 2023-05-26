import { Request, Response } from "express";
import CreateComentService from "../../../Services/Post/comment/CreateComentService";

class CreateCommentController {
    async handle(request: Request, response: Response) {
  try {
    const { postId } = request.params;
    const userId = request.user_id;
    const {comment}=request.body;
    const commentService = new CreateComentService();
if(!comment){
  return response.status(400).json({
    status: 400,
    error: "Comment is required",
  });
}
    const like = await commentService.execute({comment,postId,userId})
    return response.json(like);
  } catch (error) {
    response.status(400).send({erro:error.message})
  }

    }
}

export default CreateCommentController 