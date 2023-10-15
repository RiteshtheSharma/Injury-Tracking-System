
import NavigationBar from './components/NavigationBar';
import { Grommet } from 'grommet';
import AuthComp from './components/AuthComp';
import theme from './themes/globalTheme';

function App() {


  return (
    <>
    <Grommet theme={theme}  full>
     <NavigationBar/>
     <AuthComp type={"Sign In"} authFormComp={} googleAuthFunc={}/>
     </Grommet>
    </>
  )
}

export default App
