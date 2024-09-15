export class CreateUserDto {

    private constructor(
        public readonly name: string,
        public readonly phone: string,
        public readonly email:string,
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateUserDto?] {

        const { name, phone, email } = props

        return [undefined, new CreateUserDto(name, phone, email)];

    }
}