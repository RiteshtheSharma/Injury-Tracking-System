import {useState} from 'react'
import { Form,FormField,Box,Button ,Heading} from 'grommet'
const InjuryPointForm = ({id,label, setlabel,description, setdescription,onClick}) => {
   
  return (
    <Box align="center" pad="medium">
      <Heading level={2}>Injury Information</Heading>
      <Form onSubmit={(e)=>e.preventDefault()}>
        <FormField
          name="label"
          label="Label"
          required
          value={label}
          onChange={(event) => setlabel(event.target.value)}
        />
        <FormField
          name="desc"
          label="desc"
          required
          value={description}
          onChange={(event) => setdescription(event.target.value)}
        />
        <Button type="submit" primary label="Submit" onClick={onClick}/>
      </Form>
    </Box>
  )
}

export default InjuryPointForm