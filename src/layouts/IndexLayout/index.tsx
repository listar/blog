import settingsConfig from '../../../config/defaultSettings';
// import {Button} from 'antd'
import { useEffect, useState } from 'react';
import { IndexStyleLayout } from './style';
import { sayingList } from '@/pages/services/saying';
import { poetryList } from '@/pages/services/poetry';
import {shuffle} from 'lodash'

const IndexLayout: React.FC = (props) => {
  const { children, history, location} = props;
  const [showContent, setShowContent] = useState(location.pathname === "/" ? false : true);
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

  const [sayingInfo, setSayingInfo] = useState({ Content: '' });
  const [poetryInfo, setPoetryInfo] = useState({ Title: '', Content: '' });

  useEffect(()=>{
    sayingList({
      pageIndex:1,
      pageSize: 20
    }).then(res=>{
      setSayingInfo(shuffle(res.data.result)[0]);
    })
    poetryList({
      pageIndex:1,
      pageSize: 20
    }).then(res=>{
      setPoetryInfo(shuffle(res.data.result)[0]);
    })
  }, [])

  return (
    <IndexStyleLayout>
      <div
        className={'index-layer' + (showContent ? ' small' : ' all')}
        style={showContent ? {} : {}}
      >
        <div className="index-main">
          <div className="poetry">
            <div className="title">{poetryInfo.Title}</div>
            <div className="content">{poetryInfo.Content}</div>
          </div>
          <div className="nav-box">
            {Object.keys(navArr).map((item: any) => {
              return (
                <a key={item} onClick={navArr[item]['action']}>
                  {navArr[item]['name']}
                </a>
              );
            })}
          </div>

          <div className="jitang">{sayingInfo.Content}</div>
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
