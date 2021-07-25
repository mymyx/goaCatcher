export interface GoalListParams {
  pageSize?: number;
  current?: number;
}

export interface GoalItemData {
  id: number;
  userId: number; // 发表者id
  avatar: string; // 头像url
  username: string; // 姓名
  title: string; // goal标题
  description: string | false; // goal描述 false不显示
  feelings: string | false; // goal感想 false不显示
  pushTimeStr: string; // 发布时间 ,1天前，10分钟前
  isLike: boolean; // 是否喜欢
  likes: number; // 喜欢数量 不做处理
  comments: number; // 评论数量 不做处理

  /**
   * 姓名旁边的显示当前状态
   * created: Created a goal
   * updated: Updated the progress
   * achieved: Achieved a goal
   * @default create
   */
  status?: 'created' | 'updated' | 'achieved';

  // 如果有statusStr 就取显示，没有则根据status显示
  statusStr?: string;

  /**
   * 显示右上角删除按钮
   * true 显示删除按钮
   * false 不显示删除按钮
   * @description 字段为空 则取 userId === currentUserId
   * @default false
   */
  showDelete?: boolean;
}

export interface GoalCommentItemData {
  id: number;
  userId: number; // 发表者id
  avatar: string; // 头像
  username: string;
  content: string; // 评论内容
  time: string; // 时间 不做处理

  showDelete?: boolean; // 为true 就显示可以删除 不传则取 userId === currentUserId
}

export interface CommentGoalData {
  targetid: number; // 评论的id
  content: string; // 评论内容
}

export interface CreateGoalData {
  name: string;
  description: string;
  // [id, name]
  frequency: [number, string];
}

export interface UpdateGoalData {
  status: any;
  feelings: string;
}
