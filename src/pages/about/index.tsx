import {AboutStyle} from './style'

export default function AboutMe(){

  return (
    <>
      <AboutStyle>
        <div className="">
          <div className="title">关于我 Star</div>
          <div className="info">
            <p>熟悉前端Vue、React，后端PHP、Go的搬砖工</p>
            {/* <p>一个被社会催熟的（天真、善良）大叔</p> */}
            <p>喜欢自然、旅游、人性，心里相关、动漫、主机游戏</p>
          </div>

          <div className="title">关于博客</div>
          <div className="info">
            <p>阮老师说：“博客首先是一种知识管理工具，其次才是传播工具。”</p>
            <p>这个博客主要记录我正在学习的东西。</p>
            <p>博客内的评论、见解，只代表我个人观点，仅供参考。</p>
          </div>

          <div className="title">联系方式</div>
          <div className="info">
            <div>
              Github：
              <a href="https://github.com/listar" target="blank">
                star
              </a>
            </div>
            <div>Email： glovelistar@gmail.com</div>
          </div>
        </div>
      </AboutStyle>
    </>
  );
}
