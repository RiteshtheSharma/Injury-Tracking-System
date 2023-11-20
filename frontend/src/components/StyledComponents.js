import styled from "styled-components";
import { TableCell,Skeleton } from "grommet";
import { Link } from "react-router-dom";


const ModTableCell = styled(TableCell)`
{
  padding:0;
}

`;
const TableBodyWithScrollBar = styled.tbody`
 {
  overflow: scroll; 
 
 
}`
const ModLink = styled(Link)`
{
text-decoration:none;
color:black;
:hover{
  color:#7D4CDB;
}
}`;
const ModLinearSkeleton =styled(Skeleton)`{
  margin-top:2px;
}`
/* settings components */
const ModPencilIconLabel = styled.label`{
   display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url('/src/assets/pen.svg');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  & > input {visibility:hidden}
}`



export {ModLink,ModTableCell,ModLinearSkeleton,TableBodyWithScrollBar,ModPencilIconLabel};