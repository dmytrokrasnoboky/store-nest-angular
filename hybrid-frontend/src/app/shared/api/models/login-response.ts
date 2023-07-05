/* tslint:disable */
/* eslint-disable */
import { Role } from './role';
export interface LoginResponse {

  /**
   * Customer roles
   */
  roles: Array<Role>;

  /**
   * JWT token
   */
  token: string;

  /**
   * Customer ID
   */
  userId: string;
}
