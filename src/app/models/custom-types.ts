import { Role } from './role.model';
import { User } from './user.model';

export type DatabaseObjects = User | Role;

export type ObjectStringType = 'User' | 'Role';

export type HttpMethod = 'GET_ALL' | 'GET' | 'POST' | 'PUT' | 'DELETE';