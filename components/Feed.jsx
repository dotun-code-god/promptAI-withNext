"use client"

import { useState, useEffect } from "react"
import Promptcard from "./Promptcard"

const PromptCardList = (data, handleTagClick) => {
  return (
    <div>
      {data.map((post) => (
        <Promptcard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState(null)

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data)  
    }
    fetchPosts();
  }, []);
  
  return (
    <div>
      <form>
        <input type="text" value={searchText} onChange={handleSearchChange} />
      </form>

      <PromptCardList 
        data={posts}
        handleTagClick={() => {}}
      />
    </div>
  )
}

export default Feed