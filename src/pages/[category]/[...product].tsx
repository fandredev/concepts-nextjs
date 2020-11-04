import { NextRouter, useRouter } from 'next/router'

export default function Product(){
  const router: NextRouter = useRouter()
  // console.log(router, 'Router')
  return (
    <h1>
      {`${router.query.product} ${router.query.category} ${router.query?.product_name}`}
    </h1>
  )
}