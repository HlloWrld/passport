const userModel = require("../models/userModel").userModel;

const getUserByEmailIdAndPassword = (email, password) => {
  let user = userModel.findOne(email);
  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }
  return null;
};

const getUserById = (id) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};

function isUserValid(user, password) {
  return user.password === password;
}

const gitHubFind = (profile) => {
  let user = userModel.findById(profile.id);
  if (user) {
    console.log('User exists in Database.');
    return user;
  }
  let createdUser = userModel.createUser(profile);
  return createdUser;
}

module.exports = {
  getUserByEmailIdAndPassword,
  isUserValid,
  getUserById,
  gitHubFind
};
