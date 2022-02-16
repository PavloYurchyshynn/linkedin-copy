import JobPhoto from '../../images/JobAdvertisement.jpg'
import s from './JobAdvertisement.module.css'

function JobAdvertisement(props) {
    return (
        <div className={s.photo}>
            <img src={JobPhoto}/>
        </div>
    );
}

export default JobAdvertisement;