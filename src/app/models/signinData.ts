export class SignInData {
  //private id?: number;
  private user!: string;
  private pass!: string;

  constructor(user:string, pass:string){
    this.user = user;
    this.pass = pass;
  }
  getUser(): string{
    return this.user;
  }
  getPassword(): string{
    return this.pass;
  }

}
