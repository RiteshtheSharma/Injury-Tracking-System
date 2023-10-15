import {TextInput,Button} from 'grommet'
const handleSubmit=()=>{}
const SignInForm = () => {
  return (
    <form onSubmit={handleSubmit}>
    <TextInput type="email" placeholder="Email" />
    <TextInput type="password" placeholder="Password" />
    <TextInput type="confirmpassword" placeholder="Confirm Password" />
    <Button type="submit" label="Sign In" primary style={{borderRadius:"5px", width:"100%"}}/>
  </form>
  )
}

export default SignInForm