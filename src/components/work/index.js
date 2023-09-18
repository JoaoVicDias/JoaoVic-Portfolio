import Section from "../section"
import WorkItem from "./workItem"

const Work = () => {

    const WorkItems = [
        {
            key: 1,
            title: "Fullstack Developer",
            companyName: "PicPay",
            initDate: "Aug'22",
            endDate: "Actual",
            description: "I work providing maintenance and creating new features for applications in ReactJs and Ruby on Rails that help with taking out online loans, online legal signatures and online anti-fraud."
        },
        {
            key: 2,
            title: "Fullstack Intern Developer",
            companyName: "Grupo Soma",
            initDate: "Mar'21",
            endDate: "Aug'22",
            description: "I worked developing and maintaining applications in ReactJs and NodeJs that helped improve sales in the wholesale sector."
        },
        {
            key: 3,
            title: "Intern developer",
            companyName: "RioPrevidência",
            initDate: "Mar'20",
            endDate: "Mar'21",
            description: "I worked on automating manual and repetitive tasks for all sectors of the company."
        }
    ]

    return (
        <Section id="Work" title="Work" darker items={WorkItems} ChildrenComponent={WorkItem} />
    )
}

export default Work



