import request from '../../utils/request';

export function login(email, password) {
  return request.post('/login', { email, password });
}

export function register(data) {
  return request.post('/register', data);
}
