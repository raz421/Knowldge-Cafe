import { IoBookmarksOutline } from "react-icons/io5";

let Blog=({blog,handlebookmarks,handleTime})=>{
    let {cover,title,author,author_img,posted_date,reading_time,hashtag}=blog
   
    return(
        <div className="mb-20">
            <img src={cover} className="w-full rounded-xl mb-8"></img>
            <div className="flex justify-between items-center mb-4">
               <div className="flex items-center gap-6">
                <img src={author_img} className="w-14"></img>
                <div>
                    <h3 className="text-2xl exo-2-bold">{author}</h3>
                    <p className="exo-2-semibold text-[#11111199]">{posted_date}</p>
                </div>
               </div>
               <div className="flex items-center gap-2">
                <span className="text-[#11111199]">{reading_time} read</span>
                <button onClick={()=>{handlebookmarks(blog)}}><IoBookmarksOutline></IoBookmarksOutline></button>
               </div>
            </div>
            <h3 className="text-4xl exo-2-bold mb-4">{title}</h3>
            {
                hashtag.map((hash, indx)=><p key={indx} className="text-[#11111199] mb-4">{hash}</p>)
            }
            <button className="text-blue-600" onClick={()=>{handleTime(reading_time)}}>mark as read</button>
        </div>
    )
    
}
export default Blog