// Please don't change the pre-written code
// Import the necessary modules here

const users = [];
let id = 0;

class UserSchema {
  constructor(name, email, password) {
    this.id = ++id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
};



export const addUser = (data) => {
  // Write your code here
  const newUser = new UserSchema(data.name, data.email, data.password)
  users.push(newUser);
  return newUser;
};
addUser({ name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" });


export const confirmLogin = (data) => {
  // Write your code here
  const isvalidUser = users.find(
    (user) => data.email == user.email && user.password == data.password
  );
  return isvalidUser;
};

export const getAllUsers = () => {
  return users;
};
