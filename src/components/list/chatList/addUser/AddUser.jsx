import "./addUser.css";
const AddUser = () => {
    return (
        <div className="addUser pixel-corners">
            <form>
                <input type="text" placeholder="Username" name="username"/>
                <button>Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" alt=""/>
                    <div className="info">
                        <span>John Doe</span>
                    </div>
                </div>
                <button className="">add user</button>
            </div>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" alt=""/>
                    <div className="info">
                        <span>John Doe</span>
                    </div>
                </div>
                <button className="">add user</button>
            </div>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" alt=""/>
                    <div className="info">
                        <span>John Doe</span>
                    </div>
                </div>
                <button className="">add user</button>
            </div>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" alt=""/>
                    <div className="info">
                        <span>John Doe</span>
                    </div>
                </div>
                <button className="">add user</button>
            </div>
            
        </div>
    )
}

export default AddUser;