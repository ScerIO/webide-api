import INews from 'site-api/news'
import VK from 'vk-io'

const {
  VK_APP_ID: APP_ID,
  VK_APP_SECRET: APP_SECRET,
  VK_TOKEN: TOKEN,
} = process.env

/**
 * Post news in vk
 * *
 * @param news
 * @param groupId
 */
export default async function vkPost(news: INews, groupId: number): Promise<{ post_id: number }> {
  const postTemplate = `${news.title}\n${news.description}`

  const vk = new VK({
      app: APP_ID,
      key: APP_SECRET,
      token: TOKEN,
  })

  const upload = await vk.upload.wallPhoto({
    source: news.image,
  })

  return await (vk.api as any).wall.post({
    owner_id: groupId,
    from_group: true,
    message: postTemplate,
    attachments: `photo${upload.getOwnerId()}_${upload.getId()}`,
  })
}
