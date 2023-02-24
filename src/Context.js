import { createContext, useState,useEffect, useMemo } from 'react';
import apiCategory from '../src/api/apiUser'
import {apiProduct} from '../src/api/apiUser'

export const UserContext = createContext()

export function PassContext({children}){
  const [category,setCategory]=useState()
  const [product,setProduct]=useState()
  const [sortByCat, setSortByCat]=useState()
  const [minPrice,setMinPrice]=useState()
  const [maxPrice,setMaxPrice]=useState()
  const [color,setColor]=useState()
  const [currentPage, SetCurrentPage]=useState(1)
  const [rating, setRating] = useState()
  const [selection, setSelection]= useState([])
  const [idxPrev, setIdxPrev]=useState(0)
  const [idxNext, setIdxNext]=useState(4)
  

  useEffect(()=> {apiCategory.fetch().then(resolve=>
    setCategory(resolve));
    apiProduct.fetch().then(resolve=>setProduct(resolve))
  },[])

  const value=useMemo(()=> ({idxNext, setIdxNext,idxPrev, setIdxPrev,selection, setSelection,rating, setRating,currentPage, SetCurrentPage,color,setColor,sortByCat, setSortByCat,category,setCategory,product,setProduct,minPrice,setMinPrice,maxPrice,setMaxPrice}),[selection, rating,color,category,sortByCat, currentPage, product,minPrice,maxPrice, idxNext, idxPrev])
  if(!value.category) return
  if(!value.product) return
 
return(
  <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>)
}
