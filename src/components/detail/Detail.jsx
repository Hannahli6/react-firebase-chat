import React from 'react';
import "./detail.css"; 

const Detail = () => {
    return (
        <div className='detail'>
            <div className='user'>
                <img src='./avatar.png'></img>
                <h2>John Doe</h2>
                <p>User Description</p>
            </div>
            <div className='info'>
                <div className='option'>
                    <div className='title'>
                        <span>Chat Settings</span>
                        <img src='./arrowUp.png ' className='pixel-corners'></img>
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Privacy & Help </span>
                        <img src='./arrowUp.png' className='pixel-corners'></img>
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared Photos</span>
                        <img src='./arrowDown.png' className='pixel-corners'></img>
                    </div>
                    <div className='photos'>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img className="pixel-corners" src='https://thumbs.dreamstime.com/b/laughing-old-man-using-laptop-computer-home-looking-screen-gesturing-30317501.jpg'></img>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src='./download.png' className='icons pixel-corners'></img>
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img className="pixel-corners" src='https://thumbs.dreamstime.com/b/laughing-old-man-using-laptop-computer-home-looking-screen-gesturing-30317501.jpg'></img>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src='./download.png' className='icons pixel-corners'></img>
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img className="pixel-corners" src='https://thumbs.dreamstime.com/b/laughing-old-man-using-laptop-computer-home-looking-screen-gesturing-30317501.jpg'></img>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src='./download.png' className='icons pixel-corners'></img>
                        </div>
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared Files</span>
                        <img src='./arrowUp.png' className='pixel-corners'></img>
                    </div>
                </div>
                <button className='blockedButton pixel-corners'>Block User</button>
                <button className='logoutButton pixel-corners'>Log Out</button>
            </div>
        </div>
    );
};

export default Detail;