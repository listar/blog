import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import DetailStyle  from './style'

export default function ArticleInfo() {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| 1 | 2 |


- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格


  > 这是引用的内容
  >> 这是引用的内容
  >>>>>>>>>> 这是引用的内容

\`\`\`javascript
 console.log('hello world')
\`\`\`

`;

  return (
    <>
      <DetailStyle>
        <div className="time-tags">
          <div className="time">2021-05-31</div>
          <div className="tags">
            <div className="item">React</div>
            <div className="item">Vue</div>
            <div className="item">JavaScript</div>
          </div>
        </div>
        <div className="title">文章详情</div>
        <div className="detail">
          <ReactMarkdown
            remarkPlugins={[gfm]}
            children={markdown}
          ></ReactMarkdown>
        </div>
      </DetailStyle>
    </>
  );
}
