import { useState } from 'react';
import { Tip ,Box} from 'grommet';
import {Modal} from './Modal';
import InjuryPointForm from './InjuryPointForm'
const BodyGridItem = ({togglePoints,id}) => {

    const [className, setclassName] = useState("cell");
   
    const [label, setlabel] = useState('');
    const [description, setdescription] = useState('');
    const [ModalOpen, setModalOpen] = useState(false);
    const setPoint = ()=>{

      togglePoints(id,label,description); 
      setclassName(className==="cell"?"cell circle_Dot":"cell");
        setModalOpen(false)     


    }
  return (
    <>
    {className === 'cell' ? (
      <span  id={id} className={className} onClick={()=>setModalOpen(true)}></span>
    ) : (
      <Tip  dropProps={{ align: { left: 'right' } }}  content={<Box pad="small" style={{backgroundColor:"grey",color:"white",margin:"5px",borderRadius:"20px"}}>{`Injury number : ${id}`}</Box>}  plain>
        <span  id={id} className={className}></span>
      </Tip>
    )}
    {ModalOpen && 
<Modal Open={ModalOpen} Component={ <InjuryPointForm label={label} setlabel={setlabel} description={description} setdescription ={setdescription} onClick={setPoint} />}/>
    }
  </>
  )
}

export default BodyGridItem