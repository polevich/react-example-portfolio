import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Slider = styled.div`
	border: 1px solid red;
	max-width: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid red;
`

const Slide = styled.div`
	text-align: center;
`

const Text = styled.p`
`

const Name = styled.span`
	font-family: "Josefin Sans", sans-serif;
	font-weight: 600;
	font-size: 16px;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	margin: 22px 0 42px;
	display: inline-block;
`

const Pagination = styled.span`
	span {
		display: inline-block;
		width: 7px;
		height: 7px;
		border-radius: 20px;
		background-color: rgba(255, 255, 255, 0.5);

		& + span {
			margin-left: 5px;
		}

		&.active {
			background-color: ${theme.colors.accent};
			width: 20px;
		}
	}
`

export const S = {
	Slider,
	Slide,
	Text,
	Name,
	Pagination,
}