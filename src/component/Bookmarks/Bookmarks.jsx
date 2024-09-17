import Bookmark from "../Bookmark/Bookmark";

let Bookmarks = ({bookmarks,time}) => {
    return (  
      

           <div className="w-1/3 text-center bg-[#1111110D] space-y-6 p-4">
            <div className="bg-[#6047EC1A]">
            <h3 className="text-3xl  exo-2-bold p-5 text-[#6047EC]">Spending times: {time}</h3>
            </div>
               {
                bookmarks.map((bookmark,indx)=><Bookmark key={indx}  bookmark={bookmark}></Bookmark>)
               }
            </div>
     
     
      
    );
  };
  
  export default Bookmarks;
  