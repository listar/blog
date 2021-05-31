import settingsConfig from '../../../config/defaultSettings';
// import {Button} from 'antd'
import { useState } from 'react';
import { IndexStyleLayout } from './style';

const IndexLayout: React.FC = (props) => {
  const { children, history} = props;
  const [showContent, setShowContent] = useState(false);
  const navArr: any = {
    index: {
      route: '/',
      name: '首页',
      action: () => {
        setShowContent(false);
      },
    },
    article: {
      route: '/article',
      name: '文章',
      action: () => {
        if (!showContent) setShowContent(true);
        history.push('/article');
      },
    },
    hero: {
      route: '/hero',
      name: '英雄',
      action: () => {
        if (!showContent) setShowContent(true);
        history.push('/hero');
      },
    },
    noun: {
      route: '/noun',
      name: '名词',
      action: () => {
        if (!showContent) setShowContent(true);
        history.push('/noun');
      },
    },
    books: {
      route: '/books',
      name: '书籍',
      action: () => {
        if (!showContent) setShowContent(true);
        history.push('/books');
      },
    },
    about: {
      route: '/about',
      name: '关于我',
      action: () => {
        if (!showContent) setShowContent(true);
        history.push('/about');
      },
    },
  };

  return (
    <IndexStyleLayout>
      <div
        className={'index-layer' + (showContent ? ' small' : ' all')}
        style={showContent ? {} : {}}
      >
        <div className="index-main">
          <div className="poetry">
            <div className="title">水调歌头</div>
            <div className="content">
              <p>丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。</p>
              <p>
                明月几时有，把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
              </p>
              <p>
                转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。
              </p>
            </div>
          </div>
          <div className="nav-box">
            {Object.keys(navArr).map((item:any) => {
              return (
                <a key={item} onClick={navArr[item]['action']}>{navArr[item]['name']}</a>
              );
            })}
          </div>

          <div className="jitang">问世间情为何物，直教生死相许。</div>
          <div className="copyright">
            Copyright © 2021
            <a href={settingsConfig.copyright_http} target="_bank">
              {settingsConfig.copyright}
            </a>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-wrapper__inner">{children}</div>
      </div>
    </IndexStyleLayout>
  );
};

export default IndexLayout;
