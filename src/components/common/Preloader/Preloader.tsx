import spinner  from '../../../assets/image/spinner.gif';

import s from './Preloader.module.scss';

export const Preloader = () => {
  return (
    <div className={s.main}>
      <div className={s.block}>
        <img src={spinner} alt="preloader"  />
        <div>LOADING...</div>
      </div>
    </div>
  )
}
