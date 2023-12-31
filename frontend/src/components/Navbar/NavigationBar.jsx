import { Box, Header,} from "grommet";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import NavMenu from "./NavMenu";
import NavBtnGrpBeforeAuth from "./NavBtnGrpBeforeAuth";
import NavBtnGrpAfterAuth from "./NavBtnGrpAfterAuth";
import { useResponsiveScreen } from "../Context/ResponsiveScreenContext";
import { ModLink } from "../StyledComponents";
const NavigationBar = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const responsiveWidth = useResponsiveScreen();


  return (
    <Header background="light-2" pad={( responsiveWidth.windowWidth>660)?"medium":""}>
      <ModLink to="/" direction="row" align="center" gap="small" style={{paddingLeft:"18px"}} >
        ITS
      </ModLink>
      {
        responsiveWidth. windowWidth>660 ?( (Object.keys(auth.user).length < 1 || localStorage.getItem("user")===null)? (
      <NavBtnGrpBeforeAuth/>
            ) : (
              <NavBtnGrpAfterAuth/>
            )):
           
        (Object.keys(auth.user).length  < 1 || localStorage.getItem("user")===null? (
            <NavMenu
             
            >
    
    {["Login","Signin"
            ].map((item, index) => (
        <Box
          key={index}
          pad="medium"
          hoverIndicator
          onClick={()=>navigate(item.toLowerCase())}
        >{item}</Box>
      ))}
    
    
    
    </NavMenu> 
          ) : (
            <NavMenu
           
          >
      {["Profile",
              "Newreport",
             "Settings",
              "Logout",
            ].map((item, index) => (
        <Box
         key={index}
          pad="medium"
          hoverIndicator
          onClick={()=>navigate(item.toLowerCase())}
        >{item}</Box>
      ))}
   </NavMenu>
          )) 
        }
    
    </Header>
  );
};

export default NavigationBar;
