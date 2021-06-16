
import styled from 'styled-components'

export const IndexStyleLayout = styled.div`
.index-layer {
  display: block;
  position: fixed;
  z-index: 900;
  width: 100%;
  max-width: none;
  height: 100%;
  background: url(https://img-1251540275.cos.ap-shanghai.myqcloud.com/blog/27C42A4F-B78E-4BC2-BFF6-76B4E8A81D82-234c99ef38dd4b1e9d160eed9e161fee_1591776656401.jpeg)
    top left no-repeat #666666;
  background-size: cover;
  color: #fff;
  &.small {
    animation: contentShow 0.3s ease-out forwards;
  }
  &.all {
    animation: contentHide 0.4s ease-in forwards;
  }
  .index-main {
    padding: 0 40px;
    text-shadow: 0 1px 2px rgb(0, 0, 0, 0.6);
    text-align: center;
  }

  .jitang {
    color: #fff;
    position: absolute;
    width: 90%;
    margin-left: 5%;
    bottom: 40px;
    text-align: center;
    left: 0;
    font-size: 15px;
  }
  .poetry {
    padding-top: 60px;
    .title {
      color: #fff;
      font-weight: 600;
      font-size: 18px;
    }
    p {
      color: #fff;
      text-indent: 30px;
      margin-top: 5px;
    }
    .content{
      color: #fff;
      line-height:30px;
          white-space: pre-line;
    }
  }
  .nav-box {
    padding-top: 60px;
    line-height: 1em;
    display: flex;
    flex-wrap: wrap;
        justify-content: center;

    a {
      margin-right: 10px;
      opacity: 0.8;
      padding: 10px 20px;
      border: 1px solid #fff;
      box-shadow: 1px 1px 3px;
      border-radius: 20px;
      font-size: 0.9em;
      font-weight: bold;
      -webkit-font-smoothing: antialiased;
      color: #fff;
      margin-top: 10px;
    }
  }
  .copyright {
    font-size: 10px;
    text-align: right;
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    a {
      color: #fff;
      margin-left: 4px;
    }
  }
}
.content-wrapper {
  width: 70%;
  margin-left: 30%;
  min-height: 100vh;
  z-index: 1000;
  box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.08);

  .content-wrapper__inner {
    margin: 0 10%;
    padding: 50px 0;
    max-width: 850px;

  }
}

`
