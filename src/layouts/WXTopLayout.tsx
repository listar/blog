import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Drawer } from 'antd'
require('./layout.less')

const TopLayout: React.FC = (props) => {
  const menuArr = [
    {
      name: '开始预约',
      redirect: '/',
    },
    {
      name: '我的订单',
      redirect: '/my/order',
    },
    {
      name: '个人中心',
      redirect: '/my',
    },
    {
      name: '门店信息',
      redirect: '/shopinfo',
    },
    {
      name: '拍摄需知',
      redirect: '/shootalert',
    },
  ]
  const { children, location, route, history } = props
  const [isShowMenu, setIsShowMenu] = useState(false)
  const [title, setTitle] = useState('白平衡')

  function redirectFunc(params: any) {
    setIsShowMenu(false)
    history.push(params.redirect || '/')
  }

  useEffect(() => {
    const current = route.routes.filter((item) => item.path === location.pathname)
    setTitle(current[0]?.name || '白平衡')
    document.title = current[0]?.name || '白平衡'
  }, [location.pathname])

  console.log(location.pathname, route.routes, props)

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={title} />
      </Helmet>
      <div className='top-nav-layer'>
        <div className='nav-title'>
          <div
            className='menu-icon-back'
            onClick={() => {
              history.goBack()
            }}
          >
            <i className='bph icon-bph-arrow'></i>
          </div>
          <div className='title'>白平衡</div>
          <div
            className='menu-icon'
            onClick={() => {
              setIsShowMenu(!isShowMenu)
            }}
          >
            <i className='bph icon-bph-fold'></i>
          </div>
        </div>

        {/* <div className={['menu-list'].concat(isShowMenu ? 'is-show' : '').join(' ')}>
          {menuArr.map((item) => {
            return (
              <div
                className='menu-item'
                key={item.name}
                onClick={() => {
                  redirectFunc(item)
                }}
              >
                {item.name}
              </div>
            )
          })}
          <div className='close-menu'>
            <i
              className='bph icon-bph-searchclose'
              onClick={() => {
                setIsShowMenu(false)
              }}
            ></i>
          </div>
        </div> */}

        <Drawer
          placement='right'
          closable={false}
          onClose={() => {
            setIsShowMenu(false)
          }}
          visible={isShowMenu}
        >
          <div className='menu-list'>
            {menuArr.map((item) => {
              return (
                <div
                  className='menu-item'
                  key={item.name}
                  onClick={() => {
                    redirectFunc(item)
                  }}
                >
                  {item.name}
                </div>
              )
            })}

            <div className='close-menu'>
              <i
                className='bph icon-bph-searchclose'
                onClick={() => {
                  setIsShowMenu(false)
                }}
              ></i>
            </div>
          </div>
        </Drawer>
      </div>

      <div className='content-layer'>{children}</div>
      <div className='footer'></div>
    </HelmetProvider>
  )
}

export default TopLayout
