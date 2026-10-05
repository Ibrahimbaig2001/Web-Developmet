import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const FeedPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then((res) =>{
            setPosts(res.data.posts)
        })
    },[])
  return (
    <section className='feed-section'>
        <h1>Feed Page</h1>
        <div className='posts-container'>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} className='post'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )}

        </div>
    </section>
  )
}

export default FeedPage
