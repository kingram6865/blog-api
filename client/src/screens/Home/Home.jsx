import React from 'react'
import './Home.css'
import PostCards from '../../components/PostCards/PostCards.jsx'
import Layout from '../../components/shared/Layout/Layout'

function Home(props) {
  return (
    <Layout>
      <div className="home">
        <PostCards />
      </div>
    </Layout>
  )
}

export default Home