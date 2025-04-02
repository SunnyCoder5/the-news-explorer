// Mock server

export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({
      token: 'fake-jwt-token',
      name: 'Fake User',
      _id: 'fake-id',
    });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: 'Fake User', email: 'fake@example.com', id: 'fake-id' },
    });
  });
};

export const register = ({ email, password, name }) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name, email, id: 'fake-id' },
    });
  });
};
