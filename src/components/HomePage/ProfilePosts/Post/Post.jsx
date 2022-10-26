import style from './Post.module.css';

const Post = (props) => {
  return <div className={style.post}>{props.title}</div>;
};

export default Post;
