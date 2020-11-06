import { EnvProps } from '../../api/User';

export default function Envs(props: EnvProps){
  return (
    <>
    <span>Props: {process.env.NEXT_PUBLIC_MONGO_DB}</span>
    <pre>
      {JSON.stringify(props, null, 4)}
    </pre>
    </> 
  )
}

export async function getServerSideProps(){
  return {
    props: {
      mongoDbUri: process.env.NEXT_PUBLIC_MONGO_DB
    }
  }
}