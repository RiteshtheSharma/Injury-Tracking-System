import { Box ,Image,Heading,Paragraph,List} from "grommet"
import siteIcon from '../assets/SiteIcon.png'
import { useResponsiveScreen } from "./Context/ResponsiveScreenContext"
const Home = () => {
  const ResponsiveScreenContext = useResponsiveScreen();

  return (
    <Box style={{width:"calc(100% - 20vw)" ,margin:"auto"}}>
    <Box height={(ResponsiveScreenContext.windowWidth>400?"medium":"small")} width={(ResponsiveScreenContext.windowWidth>400?"medium":"small")}  margin="0 auto" > <Image
    fit="contain"
    src={siteIcon}
    style={{width:"40",margin:"40px auto"}}
  />
  
  </Box>
  <Heading style={{fontFamily:"sans-serif"}} level={(ResponsiveScreenContext.windowWidth>400?2:3)} margin="auto">Injury Tracking System</Heading>
  <Paragraph margin="20px 0"  size="small" style={{maxWidth:"100%"}}>
  This web application is designed to allow users, including those with accounts or who can sign in with email or Google, to report any critically injured civilians. The purpose of this application is to ensure that the relevant authorities, such as the police or ambulance services, are notified and can take the necessary actions to address the situation.</Paragraph>
  <Heading style={{fontFamily:"sans-serif",marginTop:"0",marginBottom:"20px"}} level={(ResponsiveScreenContext.windowWidth>400?2:3)} >How to report </Heading>
  <Paragraph margin="2px 0"  size="small" style={{maxWidth:"100%"}}>
If you have an account then login else sign in .</Paragraph>
<Paragraph margin="2px 0"  size="small" style={{maxWidth:"100%"}}>
Click on the "New report" button to report the injuries of an injured person .</Paragraph>
<Paragraph margin="2px 0"  size="small" style={{maxWidth:"100%"}}>
Now you must fill up the date and time of injury which must be smaller than and equal to present one .</Paragraph>
<Paragraph margin="2px 0"  size="small" style={{maxWidth:"100%"}}>
You can see 2 images i.e back body and front body images . Now click on the approximate areas where the injuries locate after clicking you will see modal with title and description of injury .In title you can write the type of injury or the area of injury like 'above navel' .In description describe intensity of injury and  area of injury etc .</Paragraph>
<Paragraph margin="2px 0"  size="small" style={{maxWidth:"100%"}}>
You can remove an injury circle (red circle) by clicking on the circled area .</Paragraph>
<Paragraph margin="2px 0"  size="small" style={{maxWidth:"100%"}}>
Click on "Clear all injury points" button to clear all injury points .</Paragraph>
<Paragraph margin="2px 0"  size="small" style={{maxWidth:"100%"}}>
Click on "Add to Report" button after mentioning all the injury areas .</Paragraph>
  </Box>
  )
}

export default Home