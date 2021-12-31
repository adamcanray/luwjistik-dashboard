import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { Fragment } from 'react'
import { useTable, useExpanded } from 'react-table'

interface ITableProps {
  columns: any
  data: any
  renderRowSubComponent: any
}

const ReactTable = ({
  columns,
  data,
  renderRowSubComponent,
}: ITableProps): JSX.Element => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    {
      columns: columns,
      data,
    },
    useExpanded // We can useExpanded to track the expanded state
    // for sub components too!
  )

  return (
    <Box>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, i, a) => {
            prepareRow(row)
            return (
              <Fragment
                {...{
                  key: row.getRowProps().key,
                }}
              >
                <Tr>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                    )
                  })}
                </Tr>
                {row.isExpanded ? (
                  <Tr>
                    <Td colSpan={visibleColumns.length}>
                      {renderRowSubComponent({ rows: a[i] })}
                    </Td>
                  </Tr>
                ) : null}
              </Fragment>
            )
          })}
        </Tbody>
      </Table>
      <br />
    </Box>
  )
}

export default ReactTable
