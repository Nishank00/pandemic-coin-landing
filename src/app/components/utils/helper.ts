import crypto from 'crypto'
import jwt from 'jsonwebtoken';

export function generateRandomCode() {
    // Generate a random number between 100000 and 999999
    const randomCode = Math.floor(Math.random() * 900000) + 100000;
    return randomCode; 
}

export const formatResponse = (status: boolean, data:any, message:string) => {
    return JSON.stringify({
        status,
        data,
        message
    })
}


export function generatePassword(password: string): string {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
      .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
      .toString('hex');
    return `${salt}:${hash}`;
  }

export function comparePasswords(providedPassword: string, storedPassword: string): boolean {
    const [storedSalt, storedHash] = storedPassword.split(':');
  
    const hashedPassword = crypto
      .pbkdf2Sync(providedPassword, storedSalt, 10000, 64, 'sha512')
      .toString('hex');

    return hashedPassword === storedHash;
  }
  
export function generateAccessToken(data:any): string {
    const expiresIn = '3d'; // Token expiration time, e.g., 1 hour
  
    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn });
  
    return token;
  }

export function verifyAccessToken(token: string): boolean {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return true;
    } catch (error) {
      return false; 
    }
  }
  
