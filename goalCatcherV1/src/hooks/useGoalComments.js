import { useEffect, useState } from 'react';
import { fetchGoalComments } from '../services/goal';

export function useGoalComments(goalId) {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  const reload = () => {
    setLoading(true);
    fetchGoalComments(goalId)
      .then(({ data }) => {
        setLoading(false);
        const comments = Array.isArray(data) ? data : [];
        setComments(comments);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    let mounted = true;
    if (goalId) {
      setLoading(true);
      fetchGoalComments(goalId)
        .then(({ data }) => {
          if (mounted) {
            setLoading(false);
            const comments = Array.isArray(data) ? data : [];
            setComments(comments);
          }
        })
        .catch(() => {
          if (mounted) {
            setLoading(false);
          }
        });
    }
    return () => {
      mounted = false;
    };
  }, [goalId]);

  return {
    loading,
    comments,
    reload,
  };
}
