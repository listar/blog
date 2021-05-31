import styled from "styled-components"

export default styled.div`
	position: fixed;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.page-loading {
		position: absolute;
		left:40%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 48px;
		height: 48px;
		.logo {
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			position: relative;
			z-index: 100;
		}
    .text{
      font-size:14px;
      padding-top:52px;
      white-space: nowrap;
      display: flex;
    justify-content: center;
    }
	}


	.dot-center{
		position: absolute;
		left:50%;
		top: 50%;
		transform: translate(-50%, -50%);
	    width: 40px;
	    height: 40px;
	    animation: rotate 2.4s linear infinite;
	    z-index: 50;
	}
	.dot {
	    position: absolute;
	    margin: auto;
	    width: 24px;
	    height: 24px;
	    border-radius: 100%;
	    transition: all 1s ease;
	    opacity: 0.6;
	}

	.white {
	    top: 0;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    background: white;
	    animation: flash 4.4s linear infinite;
	    opacity: 0;
	}
	.dot:nth-child(2) {
	    top: 0;
	    bottom: 0;
	    left: 0;
	    background: #FF4444;
	    animation: dotsY 4.4s linear infinite;
	}
	.dot:nth-child(3) {
	    left: 0;
	    right: 0;
	    top: 0;
	    background: #FFBB33;
	    animation: dotsX 4.4s linear infinite;
	}
	.dot:nth-child(4) {
	    top: 0;
	    bottom: 0;
	    right: 0;
	    background: #99CC00;
	    animation: dotsY 4.4s linear infinite;
	}
	.dot:nth-child(5) {
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background: #33B5E5;
	    animation: dotsX 4.4s linear infinite;
	}

	@keyframes flash {
	    33% {
	        opacity: 0;
	        border-radius: 0;
	    }

	    55% {
	        opacity: .6;
	        border-radius: 100%;
	    }
	    66% {
	        opacity: 0;
	    }
	}
	@keyframes dotsY {
	    20% {
	        opacity: .1;
	        width: 24px;
	    }
	    77% {
	        opacity: 0.6;
	        width: 0;
	    }
	}
	@keyframes dotsX {
	    20% {
	        opacity: .1;
	        height: 24px;
	    }
	    77% {
	        opacity: 0.6;
	        height: 0;
	    }
	}

	@keyframes rotate{
	    0% {
	        transform: translate(-50%, -50%)rotate(0)scale(1.2);
	        //width: 6.250em;
	        //height: 6.250em;
	    }
	    50% {
	        //width: 24px;
	        //height: 24px;
	        transform: translate(-50%, -50%)rotate(180deg)scale(1);
	    }
	    100% {
	        //width: 6.250em;
	        //height: 6.250em;
	        transform: translate(-50%, -50%)rotate(360deg)scale(1.2);
	    }
	}
`
