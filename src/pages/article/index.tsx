require('./index.less');
import { useState } from 'react';

export default function ArticleList(props:any) {

  const {history} = props
  function redirectFunc(redirect: any) {
    history.push(redirect || '/');
  }

  return (
    <>
      <div className="article-list">
        <div className="item">
          <div className="title" onClick={() => redirectFunc('/article/0')}>
            标题
          </div>
          <div className="introduction">简介</div>
          <div className="time-tag">
            <div className="time">2021-05-12</div>
            <div className="tag-layer">
              <div className="tag">前端</div>
              <div className="tag">react</div>
            </div>
          </div>
          <hr className="post-list__divider"></hr>
        </div>

        <div className="item">
          <div className="title" onClick={() => redirectFunc('/article/1')}>
            访问 StreamAPI终端操作
          </div>
          <div className="introduction">
            JavaStream管道流是用于简化集合类元素处理的javaAPI。在使用的过程中分为三个阶段：将集合、数组、或行文本文件转换为javaStream管道流管道流式数据处理操作，处理管道中的每一个元素。上一个管道中的输出元素作为下一个管道的输入元素。管道流结果处理操作...
          </div>
          <div className="time-tag">
            <div className="time">2021-05-12</div>
            <div className="tag-layer">
              <div className="tag">java</div>
              <div className="tag">react</div>
            </div>
          </div>
          <hr className="post-list__divider"></hr>
        </div>

        <div className="item">
          <div className="title" onClick={() => redirectFunc('/article/0')}>
            访问 StreamAPI终端操作
          </div>
          <div className="introduction">
            JavaStream管道流是用于简化集合类元素处理的javaAPI。在使用的过程中分为三个阶段：将集合、数组、或行文本文件转换为javaStream管道流管道流式数据处理操作，处理管道中的每一个元素。上一个管道中的输出元素作为下一个管道的输入元素。管道流结果处理操作...
          </div>
          <div className="time-tag">
            <div className="time">2021-05-12</div>
            <div className="tag-layer">
              <div className="tag">java</div>
              <div className="tag">react</div>
            </div>
          </div>
          <hr className="post-list__divider"></hr>
        </div>

        <div className="item">
          <div className="title">访问 StreamAPI终端操作</div>
          <div className="introduction">
            JavaStream管道流是用于简化集合类元素处理的javaAPI。在使用的过程中分为三个阶段：将集合、数组、或行文本文件转换为javaStream管道流管道流式数据处理操作，处理管道中的每一个元素。上一个管道中的输出元素作为下一个管道的输入元素。管道流结果处理操作...
          </div>
          <div className="time-tag">
            <div className="time">2021-05-12</div>
            <div className="tag-layer">
              <div className="tag">java</div>
              <div className="tag">react</div>
            </div>
          </div>
          <hr className="post-list__divider"></hr>
        </div>
      </div>
    </>
  );
}
