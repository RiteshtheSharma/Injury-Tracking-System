import { Footer as Foot ,Text} from 'grommet'
import {ModLink} from './StyledComponents'
const Footer = () => {
  return (
    <Foot background="light-2" pad="medium" style={{marginTop:"20px"}} wrap>
    <Text size="xsmall">Made using <ModLink to="https://react.dev/"  target="_blank">react js</ModLink> and <ModLink to="https://v2.grommet.io/" target="_blank">grommet</ModLink></Text>
   <Text size="xsmall">Contribute to the <ModLink to="https://github.com/RiteshtheSharma/Injury-Tracking-System" target="_blank">project</ModLink></Text>
  </Foot>
  )
}

export default Footer