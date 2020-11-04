import axios from 'axios'
import Link from 'next/link'
import {User} from '../../api/User'

interface UserProps {
  users?: Array<User>
}

function Users({ users }: UserProps){
  return (
    <>
      {users.map(({ name, id }, index) => (
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