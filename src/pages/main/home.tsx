import React, { useEffect } from 'react'
import Axios from '@/http'
const Home: React.FC = () => {
  useEffect(() => {
    Axios.get('list', { params: { h1: 1 } })
  }, [])
  return <div>这是首页</div>
}

export default Home
