/*
 * @Author: your name
 * @Date: 2022-04-11 18:16:42
 * @LastEditTime: 2022-04-11 18:19:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3ts_admin\src\api\modules\knowledgeBase.ts
 */
import service from '@/api/http';

// 创建知识库
export const createKnowledge = (obj: object) => service.post(`/wechat/hxTelKnowledge/createKnowledge`, obj)
// 更新知识库
export const updateKnowledge = (obj: object) => service.post(`/wechat/hxTelKnowledge/updateKnowledge`, obj)
// 根据条件查询知识库
export const sreachKnowledge = (obj: object) => service.post(`/wechat/hxTelKnowledge/sreachKnowledge`, obj)
//   删除知识库
export const delKnowledge = (id: number | string) => service.get(`/wechat/hxTelKnowledge/delKnowledge/${id}`)