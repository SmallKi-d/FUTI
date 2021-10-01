import React from 'react'
import styled from 'styled-components'
//[ package ]

import { ReactComponent as Code } from 'assets/svg/info_Code.svg'
import Ribbon from 'components/Ribbon'
//[ component ]

//=> DOM
export default (props: any) => {
	return (
		<MoreInfo>
			<div>
				<Introduce>
					<div>
						<nav>
							<p>Hi, I'm</p>
							<p className='default'>LF112</p>
						</nav>
						<Ribbon />
					</div>
				</Introduce>
				<Info>
					<div>
						<Code />
						<div>Dev</div>
					</div>
				</Info>
			</div>
		</MoreInfo>
	)
}

//=> Style
const MoreInfo = styled.main`
	width: 100%;
	height: 105px;
	overflow: hidden;
	position: relative;
`

const Introduce = styled.div`
	position: relative;
	text-align: center;
	margin: 0 auto;
	> div {
		overflow: hidden;
		display: inline-block;
		> nav {
			display: flex;
			align-items: center;
			text-align: center;
			margin-top: 2px;
			padding: 0 25px;
			user-select: none;
			> p {
				font-size: 2em;
				color: hsla(0, 0%, 100%, 0.9);
			}
			> p + p {
				margin-left: 8px;
			}
			.addFont {
				font-family: 'ZCOOL KuaiLe' !important;
			}
			.default {
				font-family: 'RuiZi' !important;
			}
		}
		> div {
			margin-top: 10px;
			> div {
				border-radius: 20px;
				/* background: linear-gradient(
					90deg,
					#eb6349,
					#eca474,
					#35d9e4,
					#636161,
					#878787
				); */
			}
		}
	}
`
const Info = styled.div`
	width: 100%;
	position: relative;
	margin-top: 10px;
	padding: 0 5px;
	display: flex;
	justify-content: center;
	overflow: hidden;
	> div {
		display: flex;
		padding: 2px 4px;
		> i {
			color: #fff;
			font-size: 16px;
		}
		> div:not(.el-divider) {
			color: #fff;
			font-size: 12px;
			line-height: 16px;
			font-weight: lighter;
			padding-left: 5px;
			font-family: 'Noto Sans SC';
			user-select: none;
		}
		.el-divider {
			margin: 0 0 0 8px;
		}
		> svg {
			width: 16px;
			height: 16px;
		}
	}
`
