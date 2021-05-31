require('./index.less');
import { useState } from 'react';

export default function ArticleList(props:any) {

  const {history} = props
  function redirectFunc(redirect: any) {
    history.push(redirect || '/');
  }

  const articleData = [
    {
      id: '0',
      title: '155个JavaScript基础问题（1-5）',
      time: '2021-05-31',
      tags: ['前端', 'react', 'JavaScript'],
      introduction:
        '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
    },
    {
      id: '1',
      title: '155个JavaScript基础问题（1-5）',
      time: '2021-05-31',
      tags: ['前端', 'react', 'JavaScript'],
      introduction:
        '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
    },
    {
      id: '2',
      title: '一个合格的中级前端工程师需要掌握的技能笔记（上）',
      time: '2021-05-31',
      tags: ['前端', 'react', 'JavaScript'],
      introduction:
        'article元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。',
    },
    {
      id: '3',
      title: '155个JavaScript基础问题（1-5）',
      time: '2021-05-31',
      tags: ['前端', 'react', 'JavaScript'],
      introduction:
        '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
    },
    {
      id: '4',
      title: '155个JavaScript基础问题（1-5）',
      time: '2021-05-31',
      tags: ['前端', 'react', 'JavaScript'],
      introduction:
        '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
    },
    {
      id: '5',
      title: '155个JavaScript基础问题（1-5）',
      time: '2021-05-31',
      tags: ['前端', 'react', 'JavaScript'],
      introduction:
        '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
    },
    {
      id: '6',
      title: '155个JavaScript基础问题（1-5）',
      time: '2021-05-31',
      tags: ['前端', 'react', 'JavaScript'],
      introduction:
        '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
    },
    {
      id: '7',
      title: '155个JavaScript基础问题（1-5）',
      time: '2021-05-31',
      tags: ['前端', 'react', 'JavaScript'],
      introduction:
        '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
    },
  ];

  return (
    <>
      <div className="article-list">
        {articleData.map(item=>{
          return (
            <div className="item" key={item.id}>
              <div
                className="title"
                onClick={() => redirectFunc('/article/' + item.id)}
              >
                {item.title}
              </div>
              <div className="introduction">{item.introduction}</div>
              <div className="time-tag">
                <div className="time">{item.time}</div>
                <div className="tag-layer">
                  {
                    item.tags.map(t=>{
                      return <div className="tag" key={t}>{t}</div>;
                    })
                  }
                </div>
              </div>
              <hr className="post-list__divider"></hr>
            </div>
          );
        })}





      </div>
    </>
  );
}
