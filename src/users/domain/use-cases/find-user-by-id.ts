import { User } from "../entity/user.entity";
import { IUserRepository } from "../repositories/user.repository";

interface IFindByIdUser {
    execute(id: string): Promise<User>
}

export class FindByIdUser implements IFindByIdUser {

    constructor(private readonly repository: IUserRepository) {}

    execute(id: string): Promise<User> {
        
        return this.repository.findById(id)

    }

}