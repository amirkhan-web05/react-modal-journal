import React from 'react'
import { BiAnalyse, BiCategoryAlt, BiChevronDown, BiBuoy } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { TypeData } from '../types';

const data:TypeData[] = [
  {
    id:1,
    name:'Leanne Graham'
  },
  {
    id:2,
    name:'Ervin Howell'
  },
  {
    id:3,
    name:'Clementine Bauch'
  }
]

export const Sidebar:React.FC = ():JSX.Element => {
  const [accordion, setAccordion] = React.useState<boolean>(false)

  const onClickHandler = ():void => {
    setAccordion(!accordion)
  }

  return (
    <div className='sidebar'> 
      <div className="logo-details">
        <BiAnalyse className='logo-details__icon'/> <span className='logo-details__name'>BiAnalyse</span>
      </div>
      <ul className='list'>
        <li className='list-details'>
          <Link className='list-details__item' to='/'>
            <BiCategoryAlt className='list-details__icon'/>
            <span className='list__name'>Dashoboard</span>
          </Link>
        </li>
        <li className='list-details'>
          <div onClick={onClickHandler} className="list-details__drop">
            <Link className='list-details__item' to='/'>
            <BiBuoy className='list-details__icon'/>
              <span className='list__name'>Category</span>
              {accordion ? <BiChevronDown className='list-details__rotate'/> : <BiChevronDown className='list-details__icon'/>}
            </Link>
          </div>
          {accordion ? <ul className='sub-menu'>
            {data.map((item) => (
              <li key={item.id} className={accordion ? `sub-menu__list active` : 'sub-menu__list'}>{item.name}</li>
            ))}
          </ul> : ''}
        </li>
      </ul>
    </div>
  )
}