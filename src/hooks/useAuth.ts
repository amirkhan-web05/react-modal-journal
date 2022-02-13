import { TypeRegisterForm } from './../types/index';
import { useTypedSelector } from "./useTypeSelector";

export const useAuth = () => {
  const {email, id, token} = useTypedSelector<TypeRegisterForm>(state => state.users.data)

  return {
    isAuth:!!email,
    email,
    id,
    token
  }
}