import { Request, Response } from "express";
import { IUserRepository } from "../../domain/repositories/user.repository";
import { CreateUser } from "../../domain/use-cases/create-user";
import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { FindByIdUser } from "../../domain/use-cases/find-user-by-id";

export class UsersController {

    constructor(private readonly repository: IUserRepository) {}

    createUser(req: Request, res: Response) {

        const [error, dto] = CreateUserDto.create({ ...req.body })

        if ( error ) return res.status( 400 ).json( { error } );

        new CreateUser(this.repository)
            .execute(
                dto!
            )
            .then(user => res.json(user))
            .catch(error => res.status(500).json({ error }))  

    }
    
    getUser(req: Request, res: Response) {

        const { id } = req.params

        new FindByIdUser(this.repository)
            .execute(id)
            .then(user => res.json(user))
            .catch(error => res.status(500).json({ error }))

    }

}