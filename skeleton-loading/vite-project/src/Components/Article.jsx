import React, {useState, useEffect } from 'react'

function Article() {

    const[Article, setArticle] = useState(null)

    useEffect(()=>{
        setTimeout(async ()=>{
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            
        })
    },5000)
  return (
    <div>Article</div>
  )
}

export default Article