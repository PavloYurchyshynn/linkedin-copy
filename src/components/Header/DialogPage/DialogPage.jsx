import DialogRecommend from "./DialogRecommend/DialogRecommend";
import DialogWindow from "./DialogWindow/DialogWindow";
import style from './DialogPage.module.css'

function DialogPage(props) {
    return (
        <div className={style.dialogPage}>
            <DialogWindow dialogUsers={props.dialogUsers} messages={props.messages}/>
            <DialogRecommend jobAdvertisement={props.jobAdvertisement}/>
        </div>
    );
}

export default DialogPage;