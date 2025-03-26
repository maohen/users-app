import { Box, FormControl, InputLabel, MenuItem, Pagination, PaginationItem, Select } from '@mui/material'
import styles from "./tableComponent.module.scss";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { IFooterTableProps } from '../../interfaces/table.interface'

export const FooterTable = ({handleChangePage, handleChangeSizePage, numberPage, size, sizeRows, totalElements, valuesResultsPages}: IFooterTableProps) => {
  return (
    <Box className={styles.footerGrid}>
        <Box className={styles.contenedorResultadosPorPagina}>
            <p>Resultados por página</p>
            <FormControl fullWidth className={styles.containerSizeRows}>
            <InputLabel id="select-size-label" htmlFor='select-size-name'>Cantidad</InputLabel>
            <Select
                labelId="select-size-label"
                id="select-size"
                data-testid='select-size-pagination'
                value={sizeRows ?? ''}
                label="Cantidad"
                className={styles.selectSizeRows}
                onChange={handleChangeSizePage}
                name='select-size-name'
                inputProps={{
                    id: 'select-size-name',
                }}
            >
            {
                valuesResultsPages.map(value=>
                <MenuItem value={value} key={value} data-testid={`menu_item_${value}`}>{value}</MenuItem>
                )
            }
            </Select>
            </FormControl>
        </Box>
        <Pagination
            className={styles.paginador}
            data-testid='action-pagination'
            page={numberPage}
            count={Math.ceil(totalElements / size)}
            siblingCount={0}
            boundaryCount={1}
            renderItem={(item) => (
            <PaginationItem
                slots={{
                    previous: () => <Box className={styles.botonPaginador}><KeyboardArrowLeft /><p>Ant.</p></Box>,
                    next: () => <Box className={styles.botonPaginador}><p>Sig.</p><KeyboardArrowRight /></Box>
                }}
                {...item}
            />
            )}
            onChange={(e, page) => { handleChangePage(e, page) }}
        />
    </Box>
  )
}
