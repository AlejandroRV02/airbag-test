import { VehicleType } from "../enums/vehicle-type.enum";

export class UpdateVehicleDto {

    private constructor(
        public readonly plates: string,
        public readonly type: VehicleType,
        public readonly user?: string,
    ) {}

    static create(props: { [key: string]: any }): [string?, UpdateVehicleDto?] {

        const { plates, type } = props

        return [undefined, new UpdateVehicleDto(plates, type)];

    }

}