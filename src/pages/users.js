import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

function Users({ users }){
  // const [users, setUsers] = useState([])

  // const fetchUsers = async () => {
  //   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

  //   setUsers(data)
  // }

  // useEffect(() => {
  //   fetchUsers()
  // }, [])
  return (
    <>
      {users.map(({ name, id}, index) => (
        <div>
          <Link key={index} href="/profile/[id]" as={`/profile/${id}`}>
            <a>{name}</a>
          </Link>
        </div>
      ))}
    </>
  )
}

export async function getStaticProps(context) {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  return {
    props: {
      users: data
    }
  }
}

export default Users