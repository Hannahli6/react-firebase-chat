import React, { useEffect, useRef, useState } from 'react';
import "./chat.css"; 
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
    const [openEmoji , setOpenEmoji] = useState(false);
    const [text, setText] = useState("");

    const endRef = useRef(null)

    useEffect(()=>{
        endRef.current?.scrollIntoView({behavior: "smooth"});
    },[])

    const handleEmojiClick = (event) => {
        setText(text + event.emoji);
        setOpenEmoji(false);
    }

    return (
        <div className='chat'>
            <div className='top'>
                <div className='user'>
                    <img src="./avatar.png" alt="User Avatar" />
                    <div className='texts'>
                        <span>Jane Doe</span>
                        <p>user description here</p>
                    </div>
                </div>
                <div className='icons'>
                    <img src="./phone.png" alt="phone" />
                    <img src="./video.png" alt="video" />
                    <img src="./info.png" alt="info" />
                </div>
            </div>
            <div className='center'>
                <div className='message own'>
                    <div className='texts'>
                        <p className='pixel-corners'>Lorem Ipsum is simply dummy text of the printing an Lorem Ipsum is simply dummy text of the printing an Lorem Ipsum is simply dummy text of the printing an Lorem Ipsum is simply dummy text of the printing an Lorem Ipsum is simply dummy text of the printing an Lorem Ipsum is simply dummy text of the printing an Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <img src='./avatar.png'></img>
                    <div className='texts'>
                        <p className='pixel-corners'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <img src='./avatar.png'></img>
                    <div className='texts'>
                        <p className='pixel-corners'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div className='texts'>
                        <img className="pixel-corners" src='./avatar.png'></img>
                        <p className='pixel-corners'>Small Message</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <img src='./avatar.png'></img>
                    <div className='texts'>
                        <p className='pixel-corners'>Some text messages here and there</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className='bottom'>
                <div className='icons'>
                    <img src= "./img.png" alt=""/>
                    <img src= "./camera.png" alt=""/>
                    <img src= "./mic.png" alt=""/>
                </div>
                <input 
                    className='pixel-corners'
                    type='text' 
                    placeholder='Type a message...'
                    value={text}
                    onChange={(e)=>setText(e.target.value)}>
                </input>
                <div className='emoji'>
                    <img src="./emoji.png" onClick={()=>{setOpenEmoji(!openEmoji)}}/>
                    <div className='emojiPicker'>
                        <EmojiPicker open={openEmoji} onEmojiClick={handleEmojiClick}/>
                    </div>
                </div>
                <button className='sendButton pixel-corners'> Send </button>
            </div>
            <div></div>
        </div>
    );
};

export default Chat;