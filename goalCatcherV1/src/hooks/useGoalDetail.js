import { useEffect, useState } from 'react';
import { fetchGoalDetail, fetchGoalRecords } from '../services/goal';

export function useGoalDetail(goalId) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    let mounted = true;
    if (goalId) {
      setLoading(true);

      Promise.all([fetchGoalDetail(goalId), fetchGoalRecords(goalId)])
        .then(data => {
          const [detailResult, recordsResult] = data;
          if (mounted) {
            setResult({
              ...detailResult,
              records: recordsResult,
            });
            setLoading(false);
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

  const reload = () => {
    setLoading(true);
    fetchGoalRecords(goalId).then(records => {
      setLoading(false);
      setResult(oResult => ({
        ...oResult,
        records,
      }));
    });
  };

  return [loading, result, reload];
}
