import "./chatList.css";
import { useState } from "react";
const Chatlist = () => {
    const [addMode, setAddMode] = useState(false);
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png"></img>
                    <input type="text" placeholder="Search"></input>
                </div>
                <img 
                    className="plus" 
                    src={addMode? "./minus.png"  : "./plus.png"} 
                    onClick={()=>{setAddMode(!addMode)}}>
                </img>
            </div>
            <div className="item">
                <img src="./avatar.png"></img>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello mate how are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png"></img>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello mate how are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png"></img>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello mate how are you?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png"></img>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello mate how are you?</p>
                </div>
            </div>
        </div>
    )
}

export default Chatlist;    