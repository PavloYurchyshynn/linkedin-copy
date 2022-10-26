import JobPhoto from '../../images/JobAdvertisement.jpg';
import s from './JobAdvertisement.module.css';

function JobAdvertisement() {
  return (
    <div className={s.photo}>
      <img src={JobPhoto} />
    </div>
  );
}

export default JobAdvertisement;
