import { IVehicleDatasource } from "../../domain/datasource/vehicle.datasource";
import { CreateVehicleDto } from "../../domain/dtos/create-vehicle.dto";
import { UpdateVehicleDto } from "../../domain/dtos/update-vehicle.dto";
import { Vehicle } from "../../domain/entity/vehicle.entity";
import { IVehicleRepository } from "../../domain/repositories/vehicle.repository";

export class VehicleRepository implements IVehicleRepository {

    constructor(
        private readonly datasource: IVehicleDatasource,
      ) { }
    
    create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
        return this.datasource.create(createVehicleDto)
    }
    
    findById(id: string): Promise<Vehicle> {
        return this.datasource.findById(id)
    }
    
    update(id: string, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
        return this.datasource.update(id, updateVehicleDto)
    }
    
    delete(id: string): Promise<void> {
        return this.datasource.delete(id)
    }

}