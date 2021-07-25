import { useEffect, useState } from 'react';
import { followUser } from '../services/user';

export function useFollowUser(userId, follow) {
  const [isFollow, setIsFollow] = useState(follow);

  useEffect(() => {
    setIsFollow(follow);
  }, [follow]);

  const onChangeFollow = () => {
    const curIsFollow = !isFollow;
    followUser(userId, curIsFollow).then(() => {
      setIsFollow(curIsFollow);
    });
  };

  return {
    isFollow,
    onChangeFollow,
  };
}
