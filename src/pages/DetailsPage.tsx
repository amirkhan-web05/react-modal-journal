import React from 'react'
import { useParams } from 'react-router-dom'

export const DetailsPage:React.FC = () => {
  const {id} = useParams()
  
  return (
    <h1>{id}</h1>
  )
}