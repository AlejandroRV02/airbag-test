import { UserModel } from "../../../datasources/mongo/models/user.model";
import { IUserDatasource } from "../../domain/datasource/user.datasource";
import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { User } from "../../domain/entity/user.entity";

export class UserDatasource implements IUserDatasource{
    
    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = await UserModel.create(createUserDto)

        return User.fromObject(user)
    }
    
    
    async findById(id: string): Promise<User> {

        const user = await UserModel.findById(id)

        return User.fromObject(user!)
    }

}