import { FC } from 'react';

import { ProfileStateType } from '../../../redux/reducers/profileReducer';
import { Post } from './Post/Post';
import { SendPost } from './SendPost/SendPost';
import { UserCard } from './UserCard/UserCard';

import s from './Profile.module.scss';

type propsType = {
  state: ProfileStateType;
  newPostTextChangeHandler: (text: string) => void;
  addPostHandler: () => void;
}

export const Profile: FC<propsType> = ({state, addPostHandler, newPostTextChangeHandler}) => {

  return (
    <div className={s.main}>
      <img className={s.wallpapier} src={'https://www.schilderijenshop.com/media/catalog/product/cache/1/image/1100x/040ec09b1e35df139433887a97daa66f/s/t/stp151.jpg'} />
      <UserCard user={state.user}/>
      <div className={s.myposts}>
        <h3>My Posts</h3>
        <SendPost 
          newPostText={state.newPostText} 
          addPostHandler={addPostHandler} 
          newPostTextChangeHandler={newPostTextChangeHandler}
        />
        <div className={s.posts}>
          <div className={s.post}>
            {state.posts && state.posts.map(post => 
            <Post key={post.id} text={post.text} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
