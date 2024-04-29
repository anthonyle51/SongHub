import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [search, setSearch] = useState('Search');
    return (
        <div>
            <div className="dashboard">
                <h2 id="title">
                    <Link style={{color: 'white', 'textDecoration': 'none'}} to={'/'}>SongHub</Link>
                </h2>
                <input className='search dashboard-input' value={search} onChange={e => setSearch(e.target.value)}/>
                <p id="create-post">
                    <Link to={'/create-post'} style={{color: 'white', 'textDecoration': 'none'}}>Create New Post</Link>
                </p>
            </div>
        </div>
    )
}

export default Dashboard