import INews from 'api/news/interface'
import News, { NewsModel } from 'api/news/model'

export default class NewsController {

  public add(news: INews): Promise<NewsModel> {
    return News.create(news)
  }

}
