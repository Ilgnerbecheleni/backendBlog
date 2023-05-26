import prismaClient from "../../../prisma";

class likePostService {

    async execute(postId: string, userId: string) {

        try {
          
            //verifica se post existe
            const post = await prismaClient.post.findFirst({
                where: {
                    id: postId
                }
            });
          
            if (!post) {
                throw new Error("post inexistente!!")
            }
      
            //verifica se já tem post marcado
            const like = await prismaClient.likes.findFirst({

                where: {
                    AND:{
                     postId,
                     userId
                    }}
                    });
            console.log(like)
            // //verifica se já tem post marcado
            // const like = await prismaClient.likes.findUnique({
            //     where: {
            //         liked: {
            //             postId: postId,
            //             userId: userId,
            //         }
            //     },
            // });

            if (!like) {

                const likeInsert = await prismaClient.likes.create({
                    data: {
                        postId: postId,
                        userId: userId,
                      
                    }
                });

                return likeInsert;

            } else {
                throw new Error("like ja inserido!!")
            }

        } catch (err) {
            throw new Error(err.message)
        }



    }



}

export default likePostService;