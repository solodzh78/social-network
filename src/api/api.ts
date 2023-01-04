import axios from 'axios';

import { API_KEY } from './../constants/api';

export interface IUserProfile {
  aboutMe: string;
  contacts: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string
  }
}

interface IAuth {
  resultCode: number;
  messages: string[];
  data: {
    id: number;
    email: string;
    login: string;
  };
}

export interface IUser {
  name: string;
  id: number;
  uniqueUrlName: string;
  photos: {
    small: string;
    large: string;
  },
  status: string;
  followed: boolean;
} 

export interface IUsers {
  items: IUser[];
  totalCount: number;
  error: string | null;
}

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": API_KEY,
  }
})

export const getMe = () => instance.get<IAuth>('auth/me')
export const followUser = (id: number) => instance.post(`follow/${id}`)
export const unfollowUser = (id: number) => instance.delete(`follow/${id}`)
export const getUsers = (currentPage: number, pageSize: number) => 
  instance.get<IUsers>(`users?page=${currentPage}&count=${pageSize}`)
export const getUserProfile = (userId: string) => 
  instance.get<IUserProfile>(`/profile/${userId}`) 
