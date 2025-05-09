import AddUser from "./addUser/AddUser";
import "./chatList.css";
import { useState } from "react";
const Chatlist = () => {
    const [addMode, setAddMode] = useState(false);
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar pixel-corners">
                    <img src="./search.png"></img>
                    <input type="text" placeholder="Search"></input>
                </div>
                <img 
                    className="plus pixel-corners" 
                    src={addMode? "./minus.png"  : "./plus.png"} 
                    onClick={()=>{setAddMode(!addMode)}}>
                </img>
            </div>
            <div className="item pixel-corners">
                <img src="./avatar.png"></img>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello mate how are you?</p>
                </div>
            </div>
            <div className="item pixel-corners ">
                <img src="./avatar.png"></img>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello mate how are you?</p>
                </div>
            </div>
            <div className="item pixel-corners">
                <img src="./avatar.png"></img>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello mate how are you?</p>
                </div>
            </div>
            <div className="item pixel-corners ">
                <img src="./avatar.png"></img>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello mate how are you?</p>
                </div>
            </div>
            {addMode? <AddUser /> : null}
        </div>
    )
}

export default Chatlist;    