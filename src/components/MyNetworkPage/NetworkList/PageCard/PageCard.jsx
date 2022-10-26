import style from './PageCard.module.css';

function SmallCard(props) {
  return (
    <div className={style.card}>
      <img src={props.page.backgroundPhoto} className={style.backgroundPhoto} />
      <div className={style.cardInfo}>
        <img src={props.page.photo} className={style.photo} />
        <div>
          <h1>{props.page.name}</h1>
        </div>
        <div>
          <p>{props.page.followers} followers</p>
        </div>
        <div>
          {props.page.followStatus ? (
            <button
              className={style.followBtn}
              onClick={() => {
                props.unfollow(props.page.id);
              }}>
              Unfollow
            </button>
          ) : (
            <button
              className={style.followBtn}
              onClick={() => {
                props.follow(props.page.id);
              }}>
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
