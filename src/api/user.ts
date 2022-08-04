import axios from 'axios'
interface User {
  name: string
  age: number
}

axios.get<User[]>('xxx')
