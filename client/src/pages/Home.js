import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
// import {input} from "formik";
import {useHistory} from "react-router-dom";
function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);
    let history=useHistory();
    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            // console.log(response.data);
            setListOfPosts(response.data);
            // setUpEventListener();
        });
    }, []);
    return (
        <div className='posts'>
            {listOfPosts.map((value, key) => {
                 // var html;
                // html = <div className="post" id={key}><div className="title">{value.title}</div><div className="body">{value.postText}</div><div className="footer">{value.userName}</div></div>;
                return (
                    
                    <div className="post" onClick={()=>{history.push(`/Post/${value.id}`)}}>
                        <div className="title" >{value.title}</div>
                        <div className="body" >{value.postText}</div>
                        <div className="footer" >{value.userName}
                        {/* <input type="text" label="standard" variant="standard"></input><button id={key}>send</button> */}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
var setUpEventListener = () => {
    
    document.querySelector('.posts').addEventListener('click', (event) => {
        console.log(event.target);
        // console.log(event.target);
        // console.log(event.target.parentNode.id);
        // console.log(event.target.parentNode.parentNode);
    });
    

}
export default Home