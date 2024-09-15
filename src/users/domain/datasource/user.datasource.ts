import { User } from "../entity/user.entity";
import { CreateUserDto } from "../dtos/create-user.dto";

export abstract class IUserDatasource {

    abstract create( createUserDto: CreateUserDto ): Promise<User>;

    abstract findById( id: string ): Promise<User>;

}