import { CreateVehicleDto } from "../dtos/create-vehicle.dto";
import { UpdateVehicleDto } from "../dtos/update-vehicle.dto";
import { Vehicle } from "../entity/vehicle.entity";

export abstract class IVehicleDatasource {

    abstract create( createUserDto: CreateVehicleDto ): Promise<Vehicle>

    abstract findById( id: string ): Promise<Vehicle>
    
    abstract update( id: string, updateVehicleDto: UpdateVehicleDto ): Promise<Vehicle>

    abstract delete( id: string ): Promise<void>;

}