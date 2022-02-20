import { FunctionComponent } from "react"

export type TypeAddress = {
  street:string
  suite:string
  city:string
  zipcode:string
}

export type TypeUsers = {
  id:number
  name:string
  phone:string
  website:string
  popup:boolean | number
  onClickUsers: (id:number) => void
  hideModal: () => void
  value: string
  setValue: (e:React.ChangeEvent<HTMLInputElement>) => void
  title:string
  setTitle:(title:string) => void
  modal:boolean
  setModal: () => void
  address:TypeAddress
}

export type TypeUsersList = {
  users:TypeUsers[]
}

export type TypeButton = {
  btn:TypeUsers
  onClickButton: (id:number) => void 
}

export type TypeTaskList = {
  task:TypeTask[]
  id:number
  name:string,
  popup:boolean | number
  removeItem: (id:number) => void
}

export type TypeTask = {
  id:number
  title:string
}

export type TypeFormData = {
  email:string
  password:string
}

export type TypeRegisterForm = {
  email:any | string
  token:any | string
  id:any | string
}

export type TypeData = {
  id:number,
  name:string
}

export type TypeRoutes = {
  path:string
  Element:FunctionComponent
}