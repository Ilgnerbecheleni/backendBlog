import prismaClient from "../../prisma";

class DetailPostService {
    async execute(id) {
        const post = await prismaClient.post.findFirst({
            where: {
                id: id
            }
        });

        if(post){
            const view = post.view+1;

            const postUpdated = await prismaClient.post.update({
                where: {id:id},data:{title:post.title,
                    content:post.content,
                    image:post.image,
                    view:view}
            })


            const user = await prismaClient.usuario.findFirst({
                where: {
                    id: post.authorId
                },select:{
                    name:true,
                    }
            })

            return {postUpdated,autor:user.name}
        }
  
    }
}

export default DetailPostService;