/**
 * @description
 * Implementation of the user registration object
 * @param {string} firstName Name
 * @param {string} lastName NazwiskSurname
 * @param {string} email Email
 * @param {string} password Password
 */
export interface SignUpUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
