import { Router } from "express";
import { VehicleDatasource } from "../../infrastructure/datasources/vehicle.datasource";
import { VehicleRepository } from "../../infrastructure/repositories/vehicle.repository";
import { VehiclesController } from "../controllers/vechicle.controller";

export class VehicleRoutes {

    static get routes(): Router {

        const router = Router()

        const vehicleDatasource = new VehicleDatasource()
        const vehicleRepository = new VehicleRepository(vehicleDatasource)
        const vehicleController = new VehiclesController(vehicleRepository)

        router.get('/:id', (req, res) => vehicleController.getVehicle(req, res))
        router.post('/', (req, res) => vehicleController.createVehicle(req, res))
        router.put('/:id', (req, res) => vehicleController.updateVehicle(req, res))
        router.delete('/:id', (req, res) => vehicleController.deleteVehicle(req, res))

        return router
    }

}