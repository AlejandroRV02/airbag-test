import { Request, Response } from "express";
import { IVehicleRepository } from "../../domain/repositories/vehicle.repository";
import { CreateVehicleDto } from "../../domain/dtos/create-vehicle.dto";
import { CreateVehicle } from "../../domain/use-cases/create-vehicle";
import { FindByIdVehicle } from "../../domain/use-cases/find-vehicle-by-id";
import { UpdateVehicleDto } from "../../domain/dtos/update-vehicle.dto";
import { UpdateVehicle } from "../../domain/use-cases/update-vehicle copy";
import { DeleteVehicle } from "../../domain/use-cases/delete-vehicle";

export class VehiclesController {

    constructor(private readonly repository: IVehicleRepository) {}

    createVehicle(req: Request, res: Response) {
        const [error, dto] = CreateVehicleDto.create({ ...req.body })

        if ( error ) return res.status( 400 ).json( { error } );

        new CreateVehicle(this.repository)
            .execute(
                dto!
            )
            .then(vehicle => res.json(vehicle))
            .catch(error => res.status(500).json({ error }))  
    }

    getVehicle(req: Request, res: Response) {

        const { id } = req.params

        new FindByIdVehicle(this.repository)
            .execute(id)
            .then(vehicle => res.json(vehicle))
            .catch(error => res.status(500).json({ error }))

    }

    updateVehicle(req: Request, res: Response) {

        const [error, dto] = UpdateVehicleDto.create({ ...req.body })
        const { id } = req.params

        if ( error ) return res.status( 400 ).json( { error } );

        new UpdateVehicle(this.repository)
            .execute(
                id,
                dto!
            )
            .then(vehicle => res.json(vehicle))
            .catch(error => res.status(500).json({ error }))  

    }
    
    deleteVehicle(req: Request, res: Response) {

        const { id } = req.params

        new DeleteVehicle(this.repository)
            .execute(id)
            .then(vehicle => res.json(vehicle))
            .catch(error => res.status(500).json({ error }))

    }

}