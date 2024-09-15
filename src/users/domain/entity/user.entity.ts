export class User {

    constructor(
        public id: string,
        public name: string,
        public phone: string,
        public email: string
    ) {}


    public static fromObject( object: {[key: string]: any} ): User {
        const { id, name, phone, email } = object
    
        return new User(id, name, phone, email)
      }
}