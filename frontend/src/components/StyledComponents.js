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
const ModSelect = styled.select`{
    padding: 14px 6px 14px 6px;
              background-color: white;
              border:1px solid #ccc;
              appearance: none;
              width: 100%;
              border-radius: 5px;
              font-size:12px;
              color:#555;
  & > .selectable {
    padding: 13px 5px; 
    font-weight: bold 
  }            
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



export {ModLink,ModTableCell,ModLinearSkeleton,TableBodyWithScrollBar,ModPencilIconLabel, ModSelect };