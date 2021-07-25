import request from '../../utils/request';
import moment from 'moment';
import { getAvatarUrl } from '../user';

function getPostTypeStr(postType) {
  const strs = {
    0: 'Created a goal',
    1: 'Updated the progress',
    2: 'Achieved a goal',
  };
  return strs[postType];
}

export function fetchGoalList(data) {
  // id={item.id}
  // userData={{
  //   userId: item.userId,
  //   username: item.username,
  //   lastTime: item.pushTimeStr,
  //   status: item.status,
  //   statusStr: item.statusStr,
  // }}
  // title={item.title}
  // feelings={item.feelings}
  // description={item.description}
  // likeNumber={item.likes}
  // commentNumber={item.comments}
  // isLike={item.isLike}

  // avatar: "3"
  // comment_number: 0
  // feelings: "212"
  // like_number: 0
  // name: "Wwww"
  // nickname: "ling"
  // post_id: 10009
  // post_time: "2021-07-22T14:32:59.000Z"
  // project_id: 6
  // user_id: 10031

  return request.post('/goal/list', data).then(({ data }) => ({
    data: data.map(item => ({
      id: item['post_id'],
      title: item['name'],
      description: item['intro'],
      avatar: getAvatarUrl(item['avatar']),
      comments: item['comment_number'],
      feelings: item['feelings'],
      likes: item['like_number'],
      username: item['nickname'],
      userId: item['user_id'],
      pushTimeStr: item['post_time'] ? moment(item['post_time']).fromNow() : '',
      isLike: item['like_status'] === 1,
      statusStr: getPostTypeStr(item['post_type']),
    })),
  }));
  // return new Promise(re => {
  //   re({
  //     data: [
  //       {
  //         id: 1,
  //         title: 'UUSSS',
  //         description: 'DAFUOEJFJOIJFOIEQFJO',
  //         username: 'Ling',
  //         pushTimeStr: '2021-01-01',
  //         isLike: true,
  //         commentNumber: 10,
  //       },
  //     ],
  //   });
  // });
}

export function fetchGoalDetail(goalId) {
  //   finish_status: 0
  // frequency: 0
  // intro: "我是介绍"
  // like_number: 0
  // name: "我是标题"
  // project_id: 4
  // project_status: 1
  // project_time: "2021-07-20T14:04:32.000Z"
  // user_id: 10031
  return request.post(`/goal/info`, { goalId }).then(({ data }) => {
    const goal = data[0] || {};
    return {
      title: goal['name'],
      description: goal['intro'],
      status: goal['finish_status'],
      likes: goal['like_number'],
      favorites: 0,
    };
  });
  // return new Promise(re => {
  //   re({
  //     status: 10,
  //     likes: 20,
  //     favorites: 20,
  //     hideFavorite: false,
  //     description:
  //       'I want to be a lazy teletubby!I want to be a lazy teletubby!I want to be a lazy teletubby!I want to be a lazy teletubby!',
  //     goalList: [
  //       {
  //         id: 1,
  //         name: 'Ling Wang',
  //         title: 'Ling Wang',
  //         description: '1233',
  //         likeNumber: 123,
  //         commentNumber: 10,
  //         isLike: true,
  //         feelings: 'SSSW',
  //         userData: {
  //           username: 'LW',
  //           lastTime: '102',
  //           userId: 1,
  //           status: 'Created',
  //           // statusStr: '22',
  //         },
  //       },
  //     ],
  //   });
  // });
}

/**
 * 
 *  // id={item.id}
  //             title={item.title}
  //             description={item.description}
  //             likeNumber={item.likeNumber}
  //             commentNumber={item.commentNumber}
  //             feelings={item.feelings}
  //             isLike={item.isLike}
  //             userData={item.userData}
  // username, lastTime, userId, status, statusStr, avatar

  //   avatar: "3"
  // comment_number: 0
  // feelings: "123"
  // like_number: 0
  // like_status: 0
  // name: "Wwww"
  // nickname: "ling"
  // post_id: 10019
  // post_time: "2021-07-24T05:24:31.000Z"
  // post_type: 2
  // project_id: 6
  // user_id: 10031
 * @param {*} goalId 
 * @returns 
 */
export function fetchGoalRecords(goalId) {
  return request.post('/goal/all', { goalId }).then(({ data }) =>
    data.map(item => ({
      id: item['post_id'],
      title: item['name'],
      description: item['intro'],
      commentNumber: item['comment_number'],
      likeNumber: item['like_number'],
      feelings: item['feelings'],
      isLike: item['like_status'] === 1,
      userData: {
        username: item['nickname'],
        userId: item['user_id'],
        statusStr: getPostTypeStr(item['post_type']),
        avatar: getAvatarUrl(item['avatar']),
        lastTime: moment(item['post_time']).fromNow(),
      },
    })),
  );
}

export function likeGoalById(goalId, like) {
  return request.post(`/goal/like`, { likeType: like ? 1 : 0, postId: goalId });
}

export function fetchGoalComments(goalId) {
  //       id: 22,
  //       name: 'Ling',
  //       comment: 'Yes I do',
  //       time: '12:00',
  //       userId: 12,
  //       avatar: 'ss',

  // reponse
  // comment_id: 10006
  // comment_time: "2021-07-21T15:00:02.000Z"
  // content: "123"
  // user_id: 10031
  return request
    .post(`/goal/comment/get`, { postId: goalId })
    .then(({ data }) => ({
      data: data.map(item => ({
        id: item['comment_id'],
        comment: item.content,
        name: item['nickname'],
        time: item['comment_time']
          ? moment(item['comment_time']).format('hh:mm')
          : '',
        userId: item['user_id'],
        avatar: getAvatarUrl(item['avatar']),
      })),
    }));
}

export function commentGoal(goalId, data) {
  return request.post(`/goal/comment/add`, {
    postId: goalId,
    content: data.value,
  });
}

export function deleteComment(id) {
  return request.post('/goal/comment/delete', { commentId: id });
}

export function createGoal(data) {
  return request.post('/goal/create', data);
}

export function updateGoal(id, data) {
  return request.post(`/update/create`, { goalId: id, ...data });
}

export function deleteGoalById(id) {
  return request.post(`/goal/delete`, { goalId: id });
}

export function fetchAllCurrentGoal() {
  return request.post(`/user/goal`, { userId: 0 }).then(({ data }) =>
    data.map(item => ({
      value: item.project_id,
      label: item.name,
    })),
  );
}

export function fetchFrequency() {
  return new Promise(r =>
    r([
      {
        label: 'daily',
        value: 0,
      },
      {
        label: 'weekly',
        value: 1,
      },
      {
        label: 'monthly',
        value: 2,
      },
    ]),
  );
}
