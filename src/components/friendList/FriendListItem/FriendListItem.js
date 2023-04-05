import PropTypes from 'prop-types';
import defaultImage from 'defaultImg.jpg';
import s from './FriendListItem.module.css';

export default function FriendListItem({
  avatar = defaultImage,
  name,
  isOnline,
}) {
  return (
    <li className={s.item}>
      <span className={`${s.status} ${s[isOnline]}`}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
