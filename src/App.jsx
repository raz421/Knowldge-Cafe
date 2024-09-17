
import { useState } from 'react'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'
function App() {
 let [bookmarks,setBookmarks]=useState([])
 let handlebookmarks=(blog)=>{
 
 let newbookmarks=[...bookmarks,blog]
  setBookmarks(newbookmarks)
 }
 let [time,setTime]=useState(0)
 let handleTime=(read_time)=>{
  let new_time=time + read_time;
  console.log(new_time)
  setTime(new_time)
 }
  return (
    <>
      <Header></Header>
      <div className='flex gap-6 h-full max-w-7xl mx-auto mt-8'>
        <Blogs 
        handlebookmarks={handlebookmarks}
        handleTime={handleTime}
        ></Blogs>
        <Bookmarks 
        key={bookmarks.id} 
        bookmarks={bookmarks}
        time={time}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
