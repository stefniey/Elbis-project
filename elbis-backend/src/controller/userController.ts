// // logics behind what the app should do in response to user actions or requests.

// // imports
// import { Request, Response } from 'express';
// import { getRepository } from 'typeorm';
// import { User } from '../entity/User';
// import * as bcrypt from 'bcryptjs';
// import * as jwt from 'jsonwebtoken';

// export const createUser = async (req: Request, res: Response) => {
//   const userRepository = getRepository(User);
//   const { username, email, password } = req.body;

//   try {
//     const user = new User();
//     user.name = username;
//     user.email = email;
//     user.password = password;

//     await userRepository.save(user);

//     res.status(201).send({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(400).send({ message: 'Error creating user', error });
//   }
// };

// export const loginUser = async (req: Request, res: Response) => {
//   const userRepository = getRepository(User);
//   const { email, password } = req.body;

//   try {
//     const user = await userRepository.findOne({ where: { email } });

//     if (!user) {
//       return res.status(400).send({ message: 'Invalid credentials' });
//     }

//     // const isValidPassword = await bcrypt.compare(password, user.password);
//     const isValidPassword = user.password ? await bcrypt.compare(password, user.password) : false;


//     if (!isValidPassword) {
//       return res.status(400).send({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

//     res.send({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(400).send({ message: 'Error logging in', error });
//   }
// };


import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export const createUser = async (req: Request, res: Response) => {
  const userRepository = getRepository(User);
  const { name, email, password } = req.body; // Change 'username' to 'name'

  try {
    const user = new User();
    user.name = name;  // Use 'name' here
    user.email = email;
    user.password = await bcrypt.hash(password, 10); // Hash the password before saving

    await userRepository.save(user);

    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error creating user', error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const userRepository = getRepository(User);
  const { email, password } = req.body;

  try {
    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }

    const isValidPassword = user.password ? await bcrypt.compare(password, user.password) : false;

    if (!isValidPassword) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.send({ message: 'Login successful', token });
  } catch (error) {
    res.status(400).send({ message: 'Error logging in', error });
  }
};
