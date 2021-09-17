import style from './DialogRecommend.module.css'

function DialogRecommend(props) {
    return (
        <div className={style.dialogRecommend}>
            <img src={props.jobAdvertisement} />
        </div>
    );
}

export default DialogRecommend;