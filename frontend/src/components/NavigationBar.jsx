import { Box, Button, Header, List,Stack } from "grommet";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import NavMenu from "./NavMenu";
import { useState,useEffect } from "react";
import NavBtnGrpBeforeAuth from "./NavBtnGrpBeforeAuth";
import NavBtnGrpAfterAuth from "./NavBtnGrpAfterAuth";
import {CaretNext} from "grommet-icons"
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
    <Header background="light-2" pad="medium">
      <Box direction="row" align="center" gap="small">
        ITS
      </Box>
      {
    windowWidth>450 ?( auth.user < 1 ? (
      <NavBtnGrpBeforeAuth/>
            ) : (
              <NavBtnGrpAfterAuth/>
            )):
           
        (auth.user < 1 ? (
            <NavMenu
             
            ><List
      data={["Login","Signin" ]}
              style={{listStyle:"none"}}
      pad="small"
      action={(item, index) => (
        <Button
          key={index}
          icon={<CaretNext/>}
          hoverIndicator
          onClick={()=>navigate(item.toLowerCase())}
        >{item}</Button>
      )}
    /></NavMenu> 
          ) : (
            <NavMenu
           
          ><List
      data={["Profile",
              "Newreport",
             "Settings",
              "Logout",
            ]}
      pad="small"
      action={(item, index) => (
        <Button
        icon={<CaretNext/>}
          key={index}
          hoverIndicator
          onClick={()=>navigate(item.toLowerCase())}
        >{item}</Button>
      )}
    /></NavMenu>
          )) 
        }
    
    </Header>
  );
};

export default NavigationBar;
