import { IUserDatasource } from "../../domain/datasource/user.datasource";
import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { User } from "../../domain/entity/user.entity";
import { IUserRepository } from "../../domain/repositories/user.repository";

export class UserRepository implements IUserRepository {

    constructor(
      private readonly datasource: IUserDatasource,
    ) { }
  
  
    create( createUserDto: CreateUserDto ): Promise<User> {
      return this.datasource.create( createUserDto );
    }
  
    findById( id: string ): Promise<User> {
      return this.datasource.findById( id );
    }
  
  }