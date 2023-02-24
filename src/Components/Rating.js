import {  HStack,Stack,Text } from '@chakra-ui/react'
import {useContext} from 'react'
import { UserContext } from '../Context'
export default function Rating(){
  const{ setRating}=useContext(UserContext)
  return(
    <Stack  color='#d4af37' cursor='pointer' bg='white' borderWidth='2px' borderColor='teal'padding='10px'>
      <Text color='teal' fontWeight='500'>Average rating</Text>
     <Stack letterSpacing='20px' paddingStart='10px' lineHeight='30px' spacing='0px' fontSize='25px'>
     <HStack  onClick={()=>setRating(5)} >
    <span >{'★'.repeat(5).padEnd(5,'  ☆')}</span>
    </HStack> 
    <HStack onClick={()=>setRating(4)} bg='white' spacing={5}  >
    <span>{'★'.repeat(4).padEnd(5,'☆')}</span>
    </HStack>
    <HStack onClick={()=>setRating(3)} bg='white' spacing={5}  >
    <span>{'★'.repeat(3).padEnd(5,'☆')}</span>
    </HStack>
    <HStack onClick={()=>setRating(2)} bg='white' spacing={5} >
    <span>{'★'.repeat(2).padEnd(5,'☆')}</span>
    </HStack>
    <HStack onClick={()=>setRating(1)} bg='white' spacing={5}  >
    <span>{'★'.repeat(1).padEnd(5,'☆')}</span>
    </HStack>

     </Stack>
    </Stack>
    
    
  )
}