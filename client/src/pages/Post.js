import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// import { useEffect } from "react";
import axios from "axios";
function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/ById/${id}`).then((response) => {
            setPostObject(response.data);

            // console.log(response.data);
        });
        axios.get(`http://localhost:3001/Comments/${id}`).then((response) => {
            setComments(response.data);
        });
    }, []);
    const addComment = () => {
        axios.post("http://localhost:3001/Comments", {
            userName: newComment,
            PostId: id
        },
            {
                headers: {
                    accessToken: sessionStorage.getItem("accessToken")
                },
            }).then((response) => {
                // console.log(response.data);
                if (response.data.error) {
                    alert("Login First");
                    console.log(response.data.error)
                } else {
                    const addedComment = { userName: newComment, PostId: id };
                    setComments([...comments, addedComment]);
                    setNewComment("");
                }
                // console.log("comment added");
            });
    }
    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title">{postObject.title}</div>
                    <div className="body">{postObject.postText}</div>
                    <div className="footer">{postObject.userName}</div>
                </div>
            </div>
            <div className="rightSide">
                <div className="addCommentContainer">
                    <input type="text" placeholder="Comment..." value={newComment} onChange={(event) => { setNewComment(event.target.value) }}></input>
                    <button onClick={addComment}>submit</button>
                </div>
                <div className="listOfComments">
                    {comments.map((comment, key) => {
                        return <div key={key} className="comment">{comment.userName}</div>
                    })}
                </div>
            </div>

        </div>
    );
}

export default Post