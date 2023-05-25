import prismaClient from "../../prisma";

class DetailPostService {
    async execute(id) {
        const post = await prismaClient.post.findFirst({
            where: {
                id: id
            }
        });

        if(post){
            const user = await prismaClient.usuario.findFirst({
                where: {
                    id: post.authorId
                },select:{
                    name:true,
                    }
            })

            return {post,autor:user.name}
        }
  
    }
}

export default DetailPostService;