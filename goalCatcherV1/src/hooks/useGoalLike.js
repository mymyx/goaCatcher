import { useState } from 'react';
import { likeGoalById } from '../services/goal';

export default function useGoalLike(id, isLike = false) {
  const [goalLike, setGoalLike] = useState(isLike);

  const changeGoalLike = callback => {
    const nextLike = !goalLike;
    likeGoalById(id, nextLike).then(result => {
      setGoalLike(nextLike);
      callback && callback(nextLike);
    });
  };

  return {
    goalLike,
    changeGoalLike,
  };
}
