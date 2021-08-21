import { useState } from 'react'
import Post from './Post/Post'
import style from './ProfilePosts.module.css'

function ProfilePosts(props) {

    const [post, setPost] = useState([])

    const [postTitle, setPostTitle] = useState('')

    const addPost = e => {
        if (e.key === 'Enter') {
            setPost([
                ...post,
                {
                    id: Date.now(),
                    title: postTitle,
                }
            ])
            setPostTitle('')
        }
    }

    let postElement = post.map(p => <Post title={p.title} />)

    return (
        <div className={style.profilePosts}>
            <div className={style.myPost}>
                <div>
                    <img src={props.state.homePage.profileInfo.userPhoto} className={style.userImg} />
                </div>
                <div>
                    <input
                        type="text"
                        className={style.postInput}
                        value={postTitle}
                        onChange={e => setPostTitle(e.target.value)}
                        onKeyPress={addPost}
                        placeholder='Start a post'
                    />
                </div>
            </div>
            <div className={style.postList}>
                {postElement}
            </div>
        </div>
    )
}

export default ProfilePosts