import request from '../../utils/request';

export function getAvatarUrl(avatar) {
  return `https://photo2.bigdreamer.com.cn/100things/${avatar}.png`;
}

export function fetchUserProfileById(userId = 0) {
  return request.post('/user/info', { userId }).then(({ data }) => {
    const user = data[0] || {};
    // "user_id": 10000,
    //         "avatar": "1",
    //         "nickname": "goalcatcher",
    //         "bronze": 0,
    //         "silver": 0,
    //         "gold": 0,
    //         "ordinary": 0,
    //         "followed_status": 0,
    //         "following_number": 0,
    //         "followed_number": 1
    return {
      id: user['user_id'],
      avatar: getAvatarUrl(user['avatar']),
      name: user['nickname'],
      followers: user['followed_number'],
      following: user['following_number'],
      gold: user['gold'],
      silver: user['silver'],
      bronze: user['bronze'],
      warmHearted: user['ordinary'],
      isFollow: user['followed_status'] === 1,
    };
  });
}

export function followUser(userId, active) {
  return request.post(`/user/follow`, { userId, followType: active ? 1 : 0 });
}

export function logout() {
  // return request.post('/user/logout');
  return new Promise(re => re());
}

export function searchUser(name) {
  return request.post('/search/user', { name }).then(({ data }) => ({
    data: data.map(item => ({
      id: item['user_id'],
      name: item['nickname'],
      followers: item['follower_number'],
      following: item['following_number'],
      goals: item['dream_number'],
      avatar: getAvatarUrl(item['avatar']),
    })),
  }));
}

export function fetchUserGoalList(userId = 0) {
  // id = 0,
  // title = '',
  // description = '',
  // dateTime = '',
  // isAchieve = false,
  // isLike = true,
  // likeAmount = 0,
  // hideDelete = false,

  // reqponse
  // intro: "我是介绍"
  // name: "我是标题"
  // project_id: 4
  // project_time: "2021-07-20T14:04:32.000Z"
  return request.post('/user/goal', { userId }).then(({ data }) => ({
    data: data.map(item => ({
      id: item.project_id,
      title: item.name,
      description: item.intro,
      dateTime: item['project_time'],
      isAchieve: item['isAchieved'] === 1,
      likeAmount: item['like_number'],
    })),
  }));
}

/**
 * 
 * avatar: "3"
follower_number: 1
following_number: 3
goal_number: 2
nickname: "ling"
user_id: 10031
 * @returns  avatar = '',
  name = 'Test',
  followers = 0,
  following = 0,
  goals = 0,
 */
export function fetchUserFollowing(userId) {
  return request.post('/user/following', { userId }).then(({ data }) =>
    data.map(item => ({
      id: item['user_id'],
      avatar: getAvatarUrl(item['avatar']),
      name: item['nickname'],
      followers: item['follower_number'],
      following: item['following_number'],
      goals: item['goal_number'],
    })),
  );
}

export function fetchUserFollowed(userId) {
  return request.post('/user/followed', { userId }).then(({ data }) =>
    data.map(item => ({
      id: item['user_id'],
      avatar: getAvatarUrl(item['avatar']),
      name: item['nickname'],
      followers: item['follower_number'],
      following: item['following_number'],
      goals: item['goal_number'],
    })),
  );
}
