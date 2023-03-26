import { useDispatch, useSelector } from "react-redux";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableContainer } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { RemoveCircleOutline } from "@mui/icons-material";
import { AddQuntity } from "./AddQuntity";
export const BasketItem = () => {
  let basket = useSelector((state) => state.BasketReducer.basket);
  let price = useSelector((state) => state.BasketReducer.price);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell> Название </TableCell>
            <TableCell> Описание </TableCell>
            <TableCell> Цена </TableCell>
            <TableCell> Количество </TableCell>
            <TableCell> Стоимость {price} </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((e: any) => (
            <TableRow key={e.id}>
              <TableCell>{e.name} </TableCell>
              <TableCell>{e.decrition} </TableCell>
              <TableCell> {e.price} </TableCell>
              <TableCell>
                <AddQuntity id={e.id} price={e.price} quantity={e.quantity} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
