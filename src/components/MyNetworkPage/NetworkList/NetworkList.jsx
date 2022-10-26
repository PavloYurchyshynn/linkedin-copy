import PageCard from './PageCard/PageCard';
import UserCard from './UserCard/UserCard';
import style from './NetworkList.module.css';

function NetworkList(props) {
  let networkPages = props.networkPages;
  let networkUsers = props.networkUsers;

  let networkPagesElement = networkPages.map((e) => (
    <PageCard key={e.id} page={e} follow={props.followPage} unfollow={props.unfollowPage} />
  ));
  let networkUsersElement = networkUsers.map((e) => (
    <UserCard key={e.id} user={e} connect={props.connectUser} disconnect={props.disconnectUser} />
  ));

  return (
    <div>
      <div className={style.invitations}>
        <div>No pending invitations</div>
        <div>Manage</div>
      </div>
      <div className={style.networkList}>
        <div className={style.networkLogos}>
          <div>People skilled in HTML also follow these pages</div>
          <div>See all</div>
        </div>
        <div className={style.smallCards}>{networkPagesElement}</div>
        <div className={style.networkLogos}>
          <div>Software Engineers you may know</div>
          <div>See all</div>
        </div>
        <div className={style.smallCards}>{networkUsersElement}</div>
      </div>
    </div>
  );
}

export default NetworkList;
