import {useState,useEffect} from 'react'
import {Box,Avatar,Heading,Data,DataSearch,Toolbar,List,DateInput} from 'grommet'
import { Link } from 'react-router-dom'
import { useAuth } from './Context/AuthContext'
import Select from 'react-select'
const Profile = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const  [linkStyle, setlinkStyle] = useState({textDecoration:"none" ,color:"#1F2328",})
  const [SortBy, setSortBy] = useState('');
  const onMouseOver =()=>{setlinkStyle({textDecoration:"underline" ,color:"#0074CC",});}
  const onMouseOut = ()=>{setlinkStyle({textDecoration:"none" ,color:"#1F2328",})}
  const auth = useAuth();
  const userObj = JSON.parse(auth.user);
  const SortByArray = ['Name',"Date Of Injury","Date of Reporting"]
  useEffect(
    ()=>console.log(SortBy),
  [SortBy])
  return (
    <Box  align='center' pad="medium" >
   <Avatar size='5xl'  src="https://avatars.githubusercontent.com/u/72566311?v=4" border={{ color: '#7D4CDB', size: 'small' }} />   
   {/* will be replaced by userObj.name */}
   <Heading level={1} margin="none" style={{fontFamily:"sans-serif"}}>{"User name"}</Heading>
   <Link to={`mailto:${userObj.email}`} style={linkStyle} onMouseOver={()=>onMouseOver()} onMouseOut={()=>onMouseOut()}>{userObj.email} </Link>
 
 
   <Box direction="row">

   <DateInput
  format="mm/dd/yyyy"
  value={(new Date()).toISOString()}
  onChange={({ value }) => {}}
/>

<DateInput
  format="mm/dd/yyyy"
  value={(new Date()).toISOString()}
  onChange={({ value }) => {}}
/>



   </Box>
   <Box direction="row"><DateInput
  format="mm/dd/yyyy"
  value={(new Date()).toISOString()}
  onChange={({ value }) => {}}
/>

<DateInput
  format="mm/dd/yyyy"
  value={(new Date()).toISOString()}
  onChange={({ value }) => {}}
/></Box>
 
 <Box direction="row">
   <Data
   pad="small"
   
  data={[{ name: 'Scott' }, { name: 'Zelda' }]}
>
  <Toolbar ><DataSearch width={(windowWidth>900?"large":(windowWidth>450?"medium":"small"))} /></Toolbar>
  
  <List border />
</Data>
<Box pad="small">
 <select name="sortBy" id="sortBy" style={{padding:"13px 5px",backgroundColor:"#F2F2F2",border:"0"}} onChange={(e)=>setSortBy(e.target.value)}>
 {SortByArray.map((item,index)=><option value={item} key={index} style={{padding:"13px 5px"}}>{item}</option>)
    }
  </select></Box>
</Box>
</Box>
  )
}

export default Profile