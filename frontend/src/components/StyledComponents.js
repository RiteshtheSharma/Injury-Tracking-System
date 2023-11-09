import styled from "styled-components";
import { TableCell,Skeleton } from "grommet";
import { Link } from "react-router-dom";
const ModTableCell = styled(TableCell)`
{
  padding:0;
}

`;
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
export {ModLink,ModTableCell,ModLinearSkeleton};