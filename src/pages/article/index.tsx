require('./index.less');
import { useEffect, useState } from 'react';
import { articleDetail, articleList } from '../services/article';
import {Spin} from 'antd'

export default function ArticleList(props:any) {

  const {history} = props
  function redirectFunc(redirect: any) {
    history.push(redirect || '/');
  }

  // const articleData = [
  //   {
  //     id: '0',
  //     title: '155个JavaScript基础问题（1-5）',
  //     time: '2021-05-31',
  //     tags: ['前端', 'react', 'JavaScript'],
  //     introduction:
  //       '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
  //   },
  //   {
  //     id: '1',
  //     title: '155个JavaScript基础问题（1-5）',
  //     time: '2021-05-31',
  //     tags: ['前端', 'react', 'JavaScript'],
  //     introduction:
  //       '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
  //   },
  //   {
  //     id: '2',
  //     title: '一个合格的中级前端工程师需要掌握的技能笔记（上）',
  //     time: '2021-05-31',
  //     tags: ['前端', 'react', 'JavaScript'],
  //     introduction:
  //       'article元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。',
  //   },
  //   {
  //     id: '3',
  //     title: '155个JavaScript基础问题（1-5）',
  //     time: '2021-05-31',
  //     tags: ['前端', 'react', 'JavaScript'],
  //     introduction:
  //       '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
  //   },
  //   {
  //     id: '4',
  //     title: '155个JavaScript基础问题（1-5）',
  //     time: '2021-05-31',
  //     tags: ['前端', 'react', 'JavaScript'],
  //     introduction:
  //       '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
  //   },
  //   {
  //     id: '5',
  //     title: '155个JavaScript基础问题（1-5）',
  //     time: '2021-05-31',
  //     tags: ['前端', 'react', 'JavaScript'],
  //     introduction:
  //       '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
  //   },
  //   {
  //     id: '6',
  //     title: '155个JavaScript基础问题（1-5）',
  //     time: '2021-05-31',
  //     tags: ['前端', 'react', 'JavaScript'],
  //     introduction:
  //       '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
  //   },
  //   {
  //     id: '7',
  //     title: '155个JavaScript基础问题（1-5）',
  //     time: '2021-05-31',
  //     tags: ['前端', 'react', 'JavaScript'],
  //     introduction:
  //       '答案是：undefined和报错 因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。',
  //   },
  // ];

  const [articleData, setArticleData] = useState([])
  const [loading, setLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageEnd, setPageEnd] = useState(false);
  const pageSize = 10;

  useEffect(() => {
    articleList({
      pageIndex: pageIndex,
      pageSize: pageSize,
    }).then(res=>{
      setLoading(false)
      if(res.code)return;
      setArticleData(articleData.concat(res.data.result));
      // console.log(res.data.result.length, res.data.result.length != pageSize);
      if(res.data.result.length != pageSize){
        setPageEnd(true)
      }
    })
  }, [pageIndex]);

  // 滚动操作
  function  handleScroll(){
    //文档内容实际高度（包括超出视窗的溢出部分）
    var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    //滚动条滚动距离
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //窗口可视范围高度
    var clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);

    if(clientHeight + scrollTop >= scrollHeight){
        if(pageEnd){
          return;
        }
        setPageIndex(pageIndex+1);
        // console.log('===加载更多内容……===', pageIndex, pageEnd);
    }
  }

  useEffect(()=> {
    let sc = ()=> {
      document.addEventListener('scroll', handleScroll);
    }
    sc()
    return ()=>{
      document.removeEventListener('scroll', sc);
    }
  }, [])

  return (
    <>
      <div className="article-list">
        {loading ? (
          <Spin size="large"></Spin>
        ) : (
          articleData.map((item) => {
            return (
              <div className="item" key={item.ID}>
                <div
                  className="title"
                  onClick={() => redirectFunc('/article/' + item.ID)}
                >
                  {item.Title}
                </div>
                <div className="introduction">{item.Intro}</div>
                <div className="time-tag">
                  <div className="time">{item.CreatedAt.slice(0, 10)}</div>
                  <div className="tag-layer">
                    {item.Tags.split(',').map((t) => {
                      return (
                        <div className="tag" key={t}>
                          {t}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <hr className="post-list__divider"></hr>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
