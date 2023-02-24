import {UserContext } from '../Context'
import {useContext} from 'react'
import {Grid, Stack,Text} from '@chakra-ui/react'
import ProductCard from './ProductCard'
import { WarningIcon } from '@chakra-ui/icons'

export default function Grilla({productFiltered}){
 
  const {color,rating, minPrice, maxPrice, sortByCat, product, idxPrev,idxNext} = useContext(UserContext)
 
  if(productFiltered.length===0&&(sortByCat||color||minPrice||maxPrice || rating)){return <Stack justifyContent='center' padding='50px' boxShadow='md' borderWidth='2px' directin='column'  alignItems='center' bg='white'><WarningIcon w={150} h={150} color="red.500"  width='650px'/>
  <Text color='teal' fontSize={30} fontWeight='400'>Items Not Found</Text></Stack>}
  
 return(

    <Stack width='auto' justifyContent='flex-start'   height='100%'>
      <Text color='teal' fontWeight='600' padding='5px' >{productFiltered.length!==0?`Search Results: ${productFiltered.length} items`:`Total Products: ${product.length} items`}</Text>
      <Grid  gap={6} templateColumns='repeat(2, minmax(230px, 1fr))' >
        {(productFiltered.length===0?product:productFiltered).slice(idxPrev,idxNext).map((item)=>
          <ProductCard key={item.id}  item={item}/>)
        }
     </Grid>
    
    </Stack>
  )
}