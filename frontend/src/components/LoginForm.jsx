import {TextInput,Button} from 'grommet'

const LogInForm = () => {
    const handleSubmit=()=>alert('test login')
  return (
    <form onSubmit={handleSubmit}>
    <TextInput type="email" placeholder="Email" />
    <TextInput type="password" placeholder="Password" />
    <Button type="submit" label="Sign In" primary style={{borderRadius:"5px", width:"100%"}}/>
  </form>
  )
}

export default LogInForm