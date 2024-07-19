import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skills_Styles';
import { Fade } from "react-awesome-reveal";

const skillsData = [
	{
		iconId: "htmlSvg",
		title: "HTML5",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
	},
	{
		iconId: "cssSvg",
		title: "CSS3",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
	},
	{
		iconId: "reactSvg",
		title: "REACT",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
	},
	{
		iconId: "typescriptSvg",
		title: "TYPESCRIPT",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
	},
	{
		iconId: "styledSvg",
		title: "STYLED COMPONENTS",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
	},
	{
		iconId: "figmaSvg",
		title: "WEB DESIGN",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
	},
]

export const Skills = () => {
	return (
		<S.Skills id='skills'>
			<Container>
				<SectionTitle>My Skills</SectionTitle>
				<FlexWrapper wrap='wrap' justify='space-between'>
					<Fade cascade={true} damping={0.2}>
						{skillsData.map((s, index)=>{return (
							<Skill iconId={s.iconId} key={index} title={s.title} description={s.description} />
						)})}
					</Fade>
				</FlexWrapper>
			</Container>
		</S.Skills>
	);
};