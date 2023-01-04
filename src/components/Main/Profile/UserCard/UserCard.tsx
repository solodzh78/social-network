import { FC } from 'react'

import { IUserProfile } from '../../../../api/api';
import defaultUserFoto from '../../../../assets/image/user.svg'
import s from './UserCard.module.scss';


type propsType = {
  user: IUserProfile;
}

export const UserCard: FC<propsType> = (
  { user: { fullName, photos, aboutMe }}) => {

  return (
    <div className={s.main}>
      <div className={s.foto_container}>
        <img className={s.foto} src={photos.large ? photos.large : defaultUserFoto} alt="users foto" />
      </div>
      <div className={s.user_data}>
        <div className={s.user_name}>{fullName}</div>
        <div className={s.user_adress}>
          <div>Date of Birth: {'contacts.'}</div>
          <div>City: Minsk</div>
          <div>Education: BSU '11 Web</div>
          <div>Site: https://samuraijs.com</div>
          <div>{aboutMe}</div>
        </div>
      </div>
    </div>
  )
}
