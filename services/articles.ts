import { AxiosResponse } from 'axios'
import request from 'src/utils/request'

export const getArticles = (): Promise<AxiosResponse<ArticleGlobal.Article[]>> =>
  request.get(`/posts`)
