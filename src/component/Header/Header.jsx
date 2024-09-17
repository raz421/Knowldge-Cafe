import profile from"../../assets/images/profile.png"
export default function Header(){
return(
    <header className="flex items-center justify-between max-w-7xl mx-auto border-b-2 p-3">
        <h3 className="text-4xl  exo-2-bold">Knowledge Cafe</h3>
        <img src={profile}></img>
    </header>
)
}