import { CreateVehicleDto } from "../dtos/create-vehicle.dto";
import { Vehicle } from "../entity/vehicle.entity";
import { IVehicleRepository } from "../repositories/vehicle.repository";

interface ICreateVehicle {
    execute(dto: CreateVehicleDto): Promise<Vehicle>
}

export class CreateVehicle implements ICreateVehicle {

    constructor(private readonly repository: IVehicleRepository) {}

    execute(dto: CreateVehicleDto): Promise<Vehicle> {
        
        return this.repository.create(dto)

    }

}