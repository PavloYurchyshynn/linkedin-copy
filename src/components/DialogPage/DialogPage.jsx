import DialogWindow from './DialogWindow/DialogWindow';
import style from './DialogPage.module.css';
import JobAdvertisement from '../JobAdvertisement/JobAdvertisement';

function DialogPage(props) {
  return (
    <div className={style.dialogPage}>
      <DialogWindow
        dialogUsers={props.dialogUsers}
        getMessages={props.getMessages}
        message={props.message}
        dialogId={props.match.params.dialogId}
      />
      <JobAdvertisement />
    </div>
  );
}

export default DialogPage;
