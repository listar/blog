import { articleDetail } from '@/pages/services/article';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import DetailStyle  from './style'
require('github-markdown-css')
import {Spin} from 'antd'

export default function ArticleInfo(props:any) {
//   const markdown = `A paragraph with *emphasis* and **strong importance**.

// > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

// * Lists
// * [ ] todo
// * [x] done

// A table:

// | a | b |
// | - | - |
// | 1 | 2 |


// - 列表内容
// + 列表内容
// * 列表内容

// 注意：- + * 跟内容之间都要有一个空格


//   > 这是引用的内容
//   >> 这是引用的内容
//   >>>>>>>>>> 这是引用的内容

//   # 一级标题
//   ## 一级标题
//   ### 一级标题
//   #### 一级标题

// \`\`\`javascript
//  console.log('hello world')
// \`\`\`

// `;
const ID = parseInt(props.match.params.id);
const [detail, setDetail] = useState({
  CreatedAt: '',
  Content: ''
});
const [loading, setLoading] = useState(true)

useEffect(() => {
  articleDetail({
    ID: ID
  }).then(res=> {
    console.log(res);
    setLoading(false)
    const tagArr = res.data.result.Tags.split(",")
    setDetail({
      ...res.data.result,
      tagArr
    });
  })
}, [ID]);

  return (
    <>
      {loading ? (
        <Spin size="large"></Spin>
      ) : (
        <DetailStyle>
          <div className="time-tags">
            <div className="time">{detail.CreatedAt.slice(0, 10)}</div>
            <div className="tags">
              {detail.Tags &&
                detail.tagArr.map((t) => {
                  return (
                    <div className="item" key={t}>
                      {t}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="title">{detail.Title}</div>
          <div className="detail markdown-body">
            <ReactMarkdown
              remarkPlugins={[gfm]}
              children={detail.Content}
            ></ReactMarkdown>
          </div>
        </DetailStyle>
      )}
    </>
  );
}
