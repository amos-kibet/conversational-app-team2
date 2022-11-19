const username = async (model, payload) => {
  const exists = model.findOne({ username: payload });
  return exists;
};

const email = async (model, payload) => {
  const exists = model.findOne({ email: payload });
  return exists;
};

module.exports = { username, email };
