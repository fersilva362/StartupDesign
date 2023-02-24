import { useContext} from 'react'
import {Box,Stack, Input,Text} from '@chakra-ui/react'

import { UserContext} from '../Context'

export default function Color(){
  const {product,setColor}=useContext(UserContext)
  const purgeColor=product.map((ele)=>{return ele['color']})
  const purgeFinal=purgeColor.filter((ele,index)=>purgeColor.indexOf(ele)===index)

  function handleColor(e){
    setTimeout(()=>setColor(e.target.value),800);
    
  }
  return (
      <Stack  bg='white' padding='10px' overflow='auto' maxHeight='320px' borderWidth='2px' borderColor='teal'>
        <Text color='teal' fontWeight='500'>Color</Text>
        <Input type='text' onChange={(e)=>handleColor(e)} borderColor='teal' borderWidth='1px' placeholder='Enter color'/>
        <Stack lineHeight='15px'>
        {purgeFinal.map((item,idx)=>
          <Stack spacing={0} alignItems='baseline' key={idx} paddingX='20px' direction='row'  >
            <Box fontSize='40px' boxSize='10px' bg={item} borderColor='black' borderWidth='1px'/>
           
            <Text paddingX='10px' color='teal' fontWeight='500'>{item}</Text>
          </Stack>)} 
        </Stack>  
      </Stack>
  )
}