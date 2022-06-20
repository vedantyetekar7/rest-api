import { v4 as uuidv4 } from "uuid";

let users = [];

export const readUser = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ id: uuidv4(), ...user });
  res.send(`User with name ${user.first_name} added to the database!`);
};

export const getUserById = (req, res) => {
  const id = req.params.id;
  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);

  res.send(`User with id: ${id} is deleted from the database!`);
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  if (user.first_name) user.first_name = req.body.first_name;
  if (user.last_name) user.last_name = req.body.last_name;
  if (user.age) user.age = req.body.age;

  res.send(`User with id: ${req.params.id} is updated!`);
};
