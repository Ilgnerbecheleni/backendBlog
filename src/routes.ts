import { Router, Request, Response } from "express";
import multer from "multer";
import CreateUsercontroller from "./Controllers/User/createUsercontroller";
import AuthUserController from "./Controllers/User/AuthUserController";
import DetailUserController from "./Controllers/User/DetailUserController";
import uploadConfig from './config/multer'
import { isAutenticated } from "./middlewares/isAuthenticated";
import { isAdmin } from "./middlewares/isAdmin";
import DeleteUserController from "./Controllers/User/DeleteUserController";
import { isyou } from "./middlewares/isYou";
import CreatePostcontroller from "./Controllers/Post/createPostController";
import DetailPostController from "./Controllers/Post/DetailPostController";
import GetAllPostsController from "./Controllers/Post/GetAllPostsController";
import DeletePostController from "./Controllers/Post/DeletePostController";
import UpdatepostController from "./Controllers/Post/UpdatepostController";
const router = Router()

const upload = multer(uploadConfig.upload("./tmp"));


router.get('/home', (req: Request, res: Response) => {
    return res.json({ Api: "Versão 1.0.0" })
})


//rotas de usuario
router.post('/users', upload.single('file'), new CreateUsercontroller().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAutenticated, new DetailUserController().handle)
router.delete('/users/:id', isAutenticated,isAdmin,isyou, new DeleteUserController().handle)


//rotas posts
router.post('/posts', upload.single('file'),isAutenticated,isAdmin, new CreatePostcontroller().handle)
router.get('/posts/:id',isAutenticated,new DetailPostController().handle)
router.get('/posts',new GetAllPostsController().handle)
router.put('/posts/:id', upload.single('file'),isAutenticated,isAdmin, new UpdatepostController().handle)
router.delete('/posts/:id',isAutenticated,isAdmin , new DeletePostController().handle)




export { router }