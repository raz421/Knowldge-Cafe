let Bookmark=({bookmark})=>{
    console.log(bookmark)
    let {title,author}=bookmark
    
    return(
        <div className="bg-white shadow-xl rounded-md p-5">
            
            <h3 className="text-2xl">{title}</h3>
           
        </div>
    )
}
export default Bookmark