import DialogWindow from "./DialogWindow/DialogWindow";
import style from './DialogPage.module.css'
import JobAdvertisement from "../JobAdvertisement/JobAdvertisement";

function DialogPage(props) {
    return (
        <div className={style.dialogPage}>
            <DialogWindow dialogUsers={props.dialogUsers} messages={props.messages}/>
            <JobAdvertisement />
        </div>
    );
}

export default DialogPage;