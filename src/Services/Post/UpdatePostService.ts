import prismaClient from "../../prisma/index";



interface Postrequest {
  title: string;
  content: string;
  image: string;
}

class UpdatePostService {



  async execute(id: string, { title, content,  image }: Postrequest) {

    try {
      const post = await prismaClient.post.update({
        where: {
          id: id
        },
        data: {
          title: title,
          content: content,
          image: image
        }
  
      })
  
  
      return post;
    } catch (error) {
      throw new Error ("falha ao atualizar")
    }


  }


}


export default UpdatePostService;