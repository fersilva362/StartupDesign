import { useContext} from 'react'
import {Stack, Button} from '@chakra-ui/react'

import { UserContext} from '../Context'

export default function Categories(){
  const {category, setSortByCat,sortByCat}=useContext(UserContext)
  function handleSortByCat(e){
    setSortByCat(e)
  }
 
  return (
    <Stack direction='row' justifyContent='center' marginTop='30px' marginBottom='20px'>
      {category.map((item)=>
      <Button  fontWeight='500' width='200px' border='2px' colorScheme='teal'  variant={sortByCat===item.id?'solid':'outline'} key={item.id} onClick={()=>handleSortByCat(item.id)}>
        {item.name}
      </Button>)}

 
       {/* <Grid  justifyContent='center' padding={6} gap={3} templateColumns='repeat(auto-fit, minmax(5px,80px))'>
        {category.map((item)=>
          <Stack onClick={()=>setSortByCat(item.id)} overflow='hidden' alignItems='center' borderRadius='md' justifyContent='center' bg='cyan.400' direction='column' key={item.id} spacing='0'>
            <Image src={item.image}  objectFit='fill'/>
            <Text color='white'  textTransform='uppercase' fontWeight='500' key={item.name}>{item.name}</Text> 
          </Stack>)} 
          
      </Grid> */}
    </Stack>


     
  )
}