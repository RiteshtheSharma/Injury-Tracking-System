
import NavigationBar from './components/NavigationBar';
import { Grommet } from 'grommet';
import AuthComp from './components/AuthComp';
import theme from './themes/globalTheme';
import SignInForm from './components/SignInForm';
function App() {


  return (
    <>
    <Grommet theme={theme}  full>
     <NavigationBar/>
     <AuthComp type={"Sign In"}  >
     <SignInForm/>
     </AuthComp>
     </Grommet>
    </>
  )
}

export default App
