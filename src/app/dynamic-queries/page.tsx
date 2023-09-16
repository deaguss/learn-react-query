import { FC } from 'react'
import DynamicQueries from '@/components/DynamicQueries'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div><DynamicQueries ids={[1, 4]}/></div>
}

export default page