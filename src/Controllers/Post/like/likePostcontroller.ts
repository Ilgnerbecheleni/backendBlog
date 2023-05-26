import { Request, Response } from "express";
import likePostService from "../../../Services/Post/like/likePostService";

class likePostContrtoller {
    async handle(request: Request, response: Response) {
  try {
    const { postId } = request.params;
    const authorId = request.user_id
    const likeService = new likePostService();

    const like = await likeService.execute(postId,authorId)
    return response.json(like);
  } catch (error) {
    response.status(400).send({erro:error.message})
  }

    }
}

export default likePostContrtoller 