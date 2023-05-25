import prismaClient from "../../prisma";

class DeletePostService {
    async execute(id) {
       try {
        const post = await prismaClient.post.delete({
            where: {
                id: id
            }
        });


            return post
       } catch (error) {
        throw new Error ("Post nao encontrado")
       }
        
        }
  
    }


export default DeletePostService;