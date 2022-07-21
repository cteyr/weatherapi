import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Climate } from "../types/Climate";

const Tabla = ({ climate }: IProps) => {
  return (
    <TableContainer sx={{}} className="container-table">
      <Table sx={{ minWidth: 0 }} aria-label="simple table">
        <TableHead sx={{ width: "100%" }}>
          <TableRow>
            <TableCell
              align="center"
              style={{ width: "100px", backgroundColor: "#2196f3" }}
            >
              Name
            </TableCell>
            <TableCell
              align="center"
              style={{ width: "250px", backgroundColor: "#2196f3" }}
            >
              Country
            </TableCell>
            <TableCell
              align="center"
              style={{ width: "250px", backgroundColor: "#2196f3" }}
            >
              Region
            </TableCell>
            <TableCell
              align="center"
              style={{ width: "250px", backgroundColor: "#2196f3" }}
            >
              Local Time
            </TableCell>
            <TableCell
              align="center"
              style={{ width: "250px", backgroundColor: "#2196f3" }}
            >
              Temperature
            </TableCell>
            <TableCell
              align="center"
              style={{ width: "250px", backgroundColor: "#2196f3" }}
            >
              Humidity
            </TableCell>

            <TableCell
              align="center"
              style={{ width: "250px", backgroundColor: "#2196f3" }}
            >
              Wind speed
            </TableCell>
            <TableCell
              align="center"
              style={{ width: "250px", backgroundColor: "#2196f3" }}
            >
              Precipitation
            </TableCell>
            <TableCell
              align="center"
              style={{ width: "250px", backgroundColor: "#2196f3" }}
            >
              Condition
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="Table-Body">
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" align="center">
              {climate?.location.name}
            </TableCell>
            <TableCell align="center">{climate?.location.country}</TableCell>
            <TableCell align="center">{climate?.location.region}</TableCell>
            <TableCell align="center">{climate?.location.localtime}</TableCell>
            <TableCell align="center">{climate?.current.temp_c}</TableCell>
            <TableCell align="center">{climate?.current.humidity}</TableCell>
            <TableCell align="center">{`${climate?.current.gust_mph} °C`}</TableCell>
            <TableCell align="center">{`${climate?.current.precip_mm} mm`}</TableCell>
            <TableCell align="center">
              {climate?.current.condition.text}
              {climate?.current.condition.icon}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

type IProps = {
  climate: Climate;
};

export { Tabla };
