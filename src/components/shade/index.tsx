import { useRef, forwardRef, useImperativeHandle, useState } from 'react'

function Shade(props, ref) {
  // const shadeLayer = useRef()
  const [isShow, setIsShow] = useState(false)

  useImperativeHandle(ref, () => ({
    show: () => {
      setIsShow(true)
    },
    hide: () => {
      setIsShow(false)
    },
  }))

  return <div className={'shade' + (isShow ? '' : ' hide')} />
}

export default forwardRef(Shade)
