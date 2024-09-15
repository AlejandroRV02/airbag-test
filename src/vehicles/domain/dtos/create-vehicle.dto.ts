import { VehicleType } from "../enums/vehicle-type.enum";

export class CreateVehicleDto {

    private constructor(
        public readonly plates: string,
        public readonly niv: string,
        public readonly brand:string,
        public readonly type: VehicleType,
        public readonly user: string,
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateVehicleDto?] {

        const { plates, niv, brand, type, user } = props

        if(!user) throw new Error('User must be defined')

        return [undefined, new CreateVehicleDto(plates, niv, brand, type, user)];

    }
}