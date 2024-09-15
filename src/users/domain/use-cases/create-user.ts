import { CreateUserDto } from "../dtos/create-user.dto";
import { User } from "../entity/user.entity";
import { IUserRepository } from "../repositories/user.repository";

interface ICreateUser {
    execute(dto: CreateUserDto): Promise<User>
}

export class CreateUser implements ICreateUser {

    constructor(private readonly repository: IUserRepository) {}

    execute(dto: CreateUserDto): Promise<User> {
        
        return this.repository.create(dto)

    }

}