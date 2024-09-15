import { CreateUserDto } from "../dtos/create-user.dto";
import { User } from "../entity/user.entity";

export abstract class IUserRepository {

    abstract create( createUserDto: CreateUserDto ): Promise<User>;
  
    abstract findById( id: string ): Promise<User>;
  
  }