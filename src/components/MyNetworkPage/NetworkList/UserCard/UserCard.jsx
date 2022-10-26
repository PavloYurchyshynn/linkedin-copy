import style from './UserCard.module.css';

function SmallCard(props) {
  return (
    <div className={style.card}>
      <img src={props.user.backgroundPhoto} className={style.backgroundPhoto} />
      <div className={style.cardInfo}>
        <img src={props.user.photo} className={style.photo} />
        <div>
          <h1>{props.user.name}</h1>
        </div>
        <div>
          <p>{props.user.status}</p>
        </div>
        <div>
          <p>{props.user.connections} connections</p>
        </div>
        <div>
          {props.user.connectStatus ? (
            <button
              className={style.followBtn}
              onClick={() => {
                props.disconnect(props.user.id);
              }}>
              Disconnect
            </button>
          ) : (
            <button
              className={style.followBtn}
              onClick={() => {
                props.connect(props.user.id);
              }}>
              Connect
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
