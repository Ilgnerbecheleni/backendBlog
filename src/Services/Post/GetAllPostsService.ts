import prismaClient from "../../prisma";

class GetAllPostsService {
    async execute() {
        const posts = await prismaClient.post.findMany();
        return posts;
    }
}

export default GetAllPostsService;