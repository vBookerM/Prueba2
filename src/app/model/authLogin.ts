export type AuthLogin = {
username: string;
password: string;
}

export type AuthRespuesta = {
  id: number;
  username:string;
  email:string;
  firstName: string;
  lastName: string;
  gender: 'Male' | 'Femal';
  token: string;
}
