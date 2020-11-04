import axios from 'axios'
import Link from 'next/link'
import { User } from '../../api/User'

import { GetServerSideProps } from 'next'

interface Props {
  items?: User[]
}

const Users = ({ items }: Props): JSX.Element =>{
  return (
    <>
      {items.map(({ name, id }, index) => (
        <section key={index}>
          <p>{id}</p>
          <p>{name}</p>
        </section>
      ))}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get('http://localhost:3000/api/handler')
  const items: User[] = await response.data
  return {
    props: { items }
  }
} 



export default Users