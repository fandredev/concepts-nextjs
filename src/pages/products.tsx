import Link from 'next/link'

export default function Products() : JSX.Element{
  return (
  <div>
    <h1>Produtos</h1>
    <Link href="/category/product">
      <a>Produtos de categorias</a>
    </Link>
  </div>
  )
  
}