interface User {
  id?: string,
  name: string;
  lastName: string;
  email: string;
  username?: string;
  teams?: Array<String>;
  matches?: Array<any>
}

