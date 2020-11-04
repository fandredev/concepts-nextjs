import { MongoClient, Db } from 'mongodb'
const { MONGODB_URI, MONGODB_DB } = process.env

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

let cachedClient: MongoClient = null
let cachedDb: Db = null

export async function connectToDatabase(){
  if(cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb
    }
  }
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  const client = await MongoClient.connect(MONGODB_URI,opts)

  const db = await client.db(MONGODB_DB)

  cachedClient = client
  cachedDb = db

  return {
    client, db
  }
}