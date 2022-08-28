import { AxiosResponse } from 'axios'
import request from 'src/utils/request'
import { IProfile } from 'src/types/user'

export const getProfileApi = (id: number): Promise<AxiosResponse<IProfile>> =>
  request.get(`/users/${id}`)
