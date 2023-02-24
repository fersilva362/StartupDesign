import {Stack,Input,Text} from '@chakra-ui/react'
import {useContext} from 'react'
import { UserContext } from '../Context'

export default function Price(){
  const {setMinPrice, setMaxPrice}=useContext(UserContext)
  //const Reg=/^\d+$/gm
  function handleMin(e){
  //if(!Reg.test(e.target.value)) setMinPrice(undefined)else
   setTimeout(()=>setMinPrice(parseInt(e.target.value)),800)
  }
  function handleMax(e){
    //if(!Reg.test(e.target.value)) setMaxPrice(undefined)else
     setTimeout(()=>setMaxPrice(parseInt(e.target.value)),800)
  }
  return(
    <Stack direction='column' bg='white' alignItems='flex-start' padding='10px' borderWidth='2px' borderColor='teal' width='100%'>
      <Text color='teal' fontWeight='500'>Price Range</Text>
      <Stack direction='row'>
        <Input borderColor='teal' type='number'  onChange={(e)=>handleMin(e)} size='sm' borderRadius='md' placeholder='From ($)'/>
        <Input borderColor='teal' type='number'  onChange={(e )=>handleMax(e)} size='sm' borderRadius='md'  placeholder='to ($)' />
    </Stack>
  </Stack>
  )
}