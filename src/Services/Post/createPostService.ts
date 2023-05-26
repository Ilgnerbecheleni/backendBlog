import prismaClient from "../../prisma/index";



interface Postrequest {
  title: string;
  content: string;
  authorId: string;
  image: string;
}

class CreatePostService {



  async execute({ title, content, authorId, image }: Postrequest) {

    const post = await prismaClient.post.create({
      data: {
        title: title,
        content: content,
        authorId: authorId,
        image: image,
        view:0,
        like:0
      }

    })


    return post;


  }


}


export default CreatePostService;