import {useState} from 'react';


import { Box, Button,  Layer,  Text } from 'grommet';

export const Modal = ({Open , Component}) => {
  const [open, setOpen] = useState(Open);
  

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);


  return (
  
     <>{open && (
        <Layer
          id="hello world"
          position="center"
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <Box pad="medium" gap="small" width="medium">
         { Component}
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: 'medium', bottom: 'small' }}
            >
             
            </Box>
          </Box>
        </Layer>
      )}
      </>
      
   
  );
};