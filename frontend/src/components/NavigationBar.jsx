import { Box, Button, Header, List,Stack } from "grommet";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import NavMenu from "./NavMenu";
import { useState,useEffect } from "react";
import NavBtnGrpBeforeAuth from "./NavBtnGrpBeforeAuth";
import NavBtnGrpAfterAuth from "./NavBtnGrpAfterAuth";
const NavigationBar = () => {
  const navigate = useNavigate();
  const auth = useAuth();
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
  return (
    <Header background="light-2" pad={(windowWidth>600)?"medium":""}>
      <Box direction="row" align="center" gap="small" style={{paddingLeft:"18px"}}>
        ITS
      </Box>
      {
    windowWidth>600 ?( auth.user < 1 ? (
      <NavBtnGrpBeforeAuth/>
            ) : (
              <NavBtnGrpAfterAuth/>
            )):
           
        (auth.user < 1 ? (
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
