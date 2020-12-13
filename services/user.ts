import { AxiosResponse } from 'axios'
import request from 'src/utils/request'

export const getProfileApi = (id: number): Promise<AxiosResponse<UserGlobal.Profile>> =>
  request.get(`/users/${id}`)
