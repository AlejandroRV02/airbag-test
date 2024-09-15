import { VehicleModel } from "../../../datasources/mongo/models/vehicle.model";
import { IVehicleDatasource } from "../../domain/datasource/vehicle.datasource";
import { CreateVehicleDto } from "../../domain/dtos/create-vehicle.dto";
import { UpdateVehicleDto } from "../../domain/dtos/update-vehicle.dto";
import { Vehicle } from "../../domain/entity/vehicle.entity";

export class VehicleDatasource implements IVehicleDatasource {
    
    async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
        const vehicle = await VehicleModel.create(createVehicleDto)

        return Vehicle.fromObject(vehicle)
    }
    
    async findById(id: string): Promise<Vehicle> {
        const vehicle = await VehicleModel.findById(id)

        return Vehicle.fromObject(vehicle!)
    }
    
    async update(id: string, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
        const vehicle = await VehicleModel.findByIdAndUpdate(id, updateVehicleDto, 
            { new: true } )

        return Vehicle.fromObject(vehicle!)
    }
    
    async delete(id: string): Promise<void> {
        await VehicleModel.findByIdAndDelete(id)
    }

}