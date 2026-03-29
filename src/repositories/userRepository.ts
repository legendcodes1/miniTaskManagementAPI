import type { User } from '../types/user.types.ts';
import { users as usersData } from '../users.ts';

const users: User[] = usersData;

export const userRepository = {
    findAll: (): User[] => users,
  
    findById: (id: string): User | undefined =>
      users.find(user => user.id === id),
  
    create: (user: User): User => {
      users.push(user);
      return user;
    },
  
    delete: (id: string): User | null => {
      const index = users.findIndex(user => user.id === id);
      if (index === -1) return null;
  
      return users.splice(index, 1)[0];
    }
  };