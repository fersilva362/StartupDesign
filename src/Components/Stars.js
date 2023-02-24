import {  HStack } from '@chakra-ui/react'
export default function Star({item}){
  
  return(
    <HStack bg='white'  color='#d4af37' fontSize='25px'   >
   <span>{'★'.repeat(item.rating).padEnd(5,'☆')}</span>
    </HStack> 
  )
}