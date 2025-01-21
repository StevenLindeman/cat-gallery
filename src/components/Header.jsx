import CatIcon from "/cat_icon.png"

export default function Header(){
    return (
        <>
            
            <header>
                <img src={CatIcon} className="catIcon" alt="cat icon"/>
                <h1>Cat Gallery</h1>
            </header>
        </>
    )
}