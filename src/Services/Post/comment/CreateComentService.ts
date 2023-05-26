import prismaClient from "../../../prisma";

interface createComentRequest {
    postId : string;
    userId : string;
    comment : string;
}

class CreateCommentService{

    async execute({comment,userId,postId}:createComentRequest){
      
       try{
        const post = await prismaClient.post.findFirst({
            where: {
                id: postId
            }
        });
      
        if (!post) {
            throw new Error("post inexistente!!")
        }
        
        const comments = await prismaClient.comments.create({
            data: {
                postId: postId,
                userId: userId,
                content:comment
            }
        });

        return comments;
       }catch(err){
        throw new Error(err.message);
       }


}

}

export default CreateCommentService;