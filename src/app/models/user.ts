export class User {
  userName: string;
  password: string;
  authData: string;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
