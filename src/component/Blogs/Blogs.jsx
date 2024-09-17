import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"
export default function Blogs({handlebookmarks,handleTime}){
    let [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch ("kNOWLDGE.json")
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[])
    return(
   <div className="w-2/3">
    <h1>Blogs : {blogs.length}</h1>
    <div >
        {
            blogs.map(blog =><Blog
                 key={blog.id} 
                 handlebookmarks={handlebookmarks}
                 handleTime={handleTime}
                 blog={blog}></Blog>)
        }
    </div>
   </div>
)}