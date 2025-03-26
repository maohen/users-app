import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import styles from "./tableComponent.module.scss";
import { Box } from "@mui/system";
import { ITable, ITableElement } from "../../interfaces/table.interface";
import { Input, Spinner } from "../../ui";
import { useTableResults } from "./useTableResults";
import { FooterTable } from "./FooterTable";

export const TableComponent = (props: ITable<any>) => {
  const {
    columns,
    title,
    valuesResultsPages
  } = props;
  const {
    isLoading,
    data,
    params,
    handleChangePage,
    handleChangeSizePage,
    filterContent
  } = useTableResults();

  

  return (
    <React.Fragment>
      <Box className={styles.headerTable}>
        {title && <h1 className={styles.title}>{title}</h1>}
        <Box className={styles.searchContainer}>
          <Input placeholder="Buscar por nombre" type="text"  handleSearch={(e)=>filterContent(e)}/>
          <Box className={styles.contenedorTotalResultados} data-testid='contenedor_para_desktop'>
            <p className={styles.resultadosTotales}>{params.results}/{params.totalElements}</p>
          </Box>
        </Box>
      </Box>

      {data.length > 0 ? (
        <Paper
          className={styles.containerTableResults}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TableContainer className={styles.tableResults}>
            <Table
              sx={{ minWidth: 700 }}
              aria-label="customized table"
              data-testid="table-results"
            >
              {columns.length > 0 && (
                <>
                  <TableHead>
                    <TableRow className={styles.tablaHeader}>
                      {columns.map((column:any, index:any) => (
                        <React.Fragment key={column.field + "_" + index}>
                            <TableCell
                              align="left"
                              className={styles.tableCell}
                              style={{
                                minWidth: column.minWidth,
                                display: column.isHidden ? "none" : "",
                              }}
                            >
                              {column.headerName}
                            </TableCell>
                        </React.Fragment>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody data-testid="table-results-body">
                    {data.map((row: any, index:any) => (
                      <TableRow key={index}>
                        {columns.map((column:ITableElement<any>, index2:any) => (
                          <React.Fragment key={column.field + "_" + index2}>
                              <TableCell
                                align="left"
                                className={styles.tableCell}
                                key={column.field + index2}
                                data-testid={`table-cell2-${column.field}`}
                              >
                                {column.renderCell
                                  ? column.renderCell(row)
                                  : row}
                              </TableCell>
                          </React.Fragment>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </>
              )}
            </Table>
          </TableContainer>
          <FooterTable
              handleChangePage={handleChangePage}
              handleChangeSizePage={handleChangeSizePage}
              numberPage={params.page}
              size={params.results}
              sizeRows={params.results}
              valuesResultsPages={valuesResultsPages}
              totalElements={params.totalElements}
            />
        </Paper>
      ) : (
        <Box
          className={styles.containerResults}
          data-testid="message_no_search"
        >
          No se encontraron resultados relacionados a su búsqueda
        </Box>
      )}
      {isLoading && <Spinner />}
    </React.Fragment>
  );
};
