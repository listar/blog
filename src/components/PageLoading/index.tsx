require('./index.less')
function PageLoading(props: any) {
  const { text = '白平衡照相馆' } = props
  return (
    <>
      <div className='page-loading-layer'>
        <div className='page-loading'>
          <div className='spin'></div>
          <div className='logo'></div>
          <div className='text'>{text}</div>
        </div>
      </div>
    </>
  )
}
export default PageLoading
