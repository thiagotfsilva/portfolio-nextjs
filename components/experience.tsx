"use client"
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import useSectionInView from '@/lib/hook';
import { useTheme } from '@/contex/theme-context';

const Experience = () => {
	const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
			<VerticalTimeline lineColor=''>
				{
					experiencesData.map((item, index) => (
						<React.Fragment key={index}>
							<VerticalTimelineElement
							 contentStyle={{
								background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, .05",
								boxShadow: "none",
								border: "1px solid rgba(0, 0, 0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem"
							 }}
							 contentArrowStyle={{
								borderRight: "0.4rem solid #9ca3af",
							 }}
							 date={item.date}
							 icon={item.icon}
							 iconStyle={{
								background: "white",
								fontSize: "1.5rem"
							 }}
							>
								<h3 className='font-semibold capitalize'>{item.title}</h3>
								<p className='font-normal !mt-0'>{item.location}</p>
								<p>{item.description}</p>
							</VerticalTimelineElement>
						</React.Fragment>
					))
				}
			</VerticalTimeline>
    </section>
  )
}

export default Experience
