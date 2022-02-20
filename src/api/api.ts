import { TypeUsers } from './../types/index';
import axios from "axios";

export const getUsers = () => {
  return axios.get<TypeUsers[]>('https://jsonplaceholder.typicode.com/users?_limit=3')
}