import { IVehicleRepository } from "../repositories/vehicle.repository";

interface IDeleteVehicle {
    execute(id: string): Promise<void>
}

export class DeleteVehicle implements IDeleteVehicle {

    constructor(private readonly repository: IVehicleRepository) {}

    execute(id: string): Promise<void> {
        
        return this.repository.delete(id)

    }

}