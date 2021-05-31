import React from "react"
import LoadingStyle from "./style"
// import Logo from "/public/static/favicon.ico"

export default ({ text = "正在拼命加载中..." }) => {

	return (
		<>
			<LoadingStyle>
				<div className="page-loading">
					<div className="dot-center">
						<div className="dot white"></div>
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
					{/* <div className="logo" style={ { backgroundImage: `url(${ Logo })` } }/> */}
					<div className="text">{ text }</div>
				</div>
			</LoadingStyle>
		</>
	)
}
