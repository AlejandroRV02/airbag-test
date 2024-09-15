import { Router } from 'express';
import { UserRoutes } from './users/presentation/routes/user.routes';
import { VehicleRoutes } from './vehicles/presentation/routes/vehicle.routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    router.use('/api/users', UserRoutes.routes );
    router.use('/api/vehicles', VehicleRoutes.routes );

    return router;
  }


}