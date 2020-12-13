declare namespace ArticleGlobal {
  interface ArticleState {
    errors: Error
    isLoading: boolean
    article: Article
  }

  interface Article {
    id: number
    title: string
    body: string
    userId: number
  }
}
