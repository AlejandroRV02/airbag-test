import { Router } from "express"
import { UsersController } from "../controller/user.controller"
import { UserDatasource } from "../../infrastructure/datasources/user.datasource";
import { UserRepository } from "../../infrastructure/repositories/user.repository";

export class UserRoutes {

    static get routes(): Router {

        const router = Router()

        const usersDatasource = new UserDatasource()
        const usersRepository = new UserRepository(usersDatasource)
        const usersController = new UsersController(usersRepository)

        router.get('/:id',(req, res) => usersController.getUser(req, res))
        router.post('/', (req, res) => usersController.createUser(req, res))

        return router

    }
}