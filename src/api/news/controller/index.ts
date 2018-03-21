import AddNewsInput from 'api/news/input/add'
import News, { NewsModel } from 'api/news/model'
import ApiError from 'error'
import vkPost from 'share/vk'
import { InstanceType } from 'typegoose'
import Logger from 'utils/logger'

/**
 * Error codes
 */
export enum Errors {
  CREATE_NEWS_ERROR = 0x0,
}

/**
 * Error messages
 */
export enum ErrorMessages {
  CREATE_NEWS_ERROR = 'Create news error',
}

/**
 * News controller
 */
export default class NewsController {
  /**
   * Create new news
   * *
   * @param newsInput
   */
  public async add(newsInput: AddNewsInput): Promise<NewsModel | null> {
    let news: InstanceType<NewsModel> | null = null

    try {
      const { shareVK } = newsInput
      delete newsInput.shareVK

      news = await News.create(newsInput)

      if (news !== null && shareVK) {
        vkPost(news, Number(process.env.VK_GROUP_ID))
          .then((response) => Logger.info(`VK Share success | news ID: ${news!!.id} | post ID: ${response.post_id}`))
          .catch((error) => Logger.error('VK Share error: ', error))
      }
    } catch (error) {
      Logger.error('Add news error', error)
      throw new ApiError(ErrorMessages.CREATE_NEWS_ERROR, { errorCode: Errors.CREATE_NEWS_ERROR })
    } finally {
      Logger.info(`Add news success | news ID: ${news!!.id} | news title: ${news!!.title}`)
    }

    return news
  }
}
