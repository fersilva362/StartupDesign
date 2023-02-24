import { Stack, VStack, Image,Text} from '@chakra-ui/react'
import Stars from '../Components/Stars'
export default function ProductCard({item}){
  return(
  <Stack borderWidth='2px' bg='white' borderRadius='lg'  boxShadow='md'  >
    <Stack  paddingY='20px'  alignItems='center' >
      <Image width='70%' objectFit='contain' src={item.image} />
    </Stack>
    <VStack  spacing={0} lineHeight='20px' direction='row' >
      <Text fontWeight='700' color='teal'>{item.name}</Text>
      <Stars item={item}/>
      <Text paddingBottom='10px' color='gray.600' fontWeight='400'>{new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"}).format(item.price)}</Text>
    </VStack>
  
</Stack>)

}