import {
  TableBody,
  TableBodyCell,
  TableCaption,
  TableHead,
  TableHeadCell,
  TableRow,
  Table,
  TableWrap,
  Text,
  TextHeader as Header
} from '@/components/.'

export function Prices() {
  return (
    <section>
      <Header level='2' withPadding>Prices</Header>

      <Text withPadding>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Text>

      <TableWrap>
        <Table caption='Table test caption'>
          <TableCaption caption='Table test caption' />

          <TableHead>
            <TableHeadCell first>
              <Text withSize='smaller' tag='span'>
                Name
              </Text>
            </TableHeadCell>

            <TableHeadCell others>
              <Text withSize='smaller' tag='span'>
                Rank
              </Text>
            </TableHeadCell>

            <TableHeadCell others>
              <Text withSize='smaller' tag='span'>
                Price
              </Text>
            </TableHeadCell>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableBodyCell first>
                <Text withSize='smaller' tag='span'>Test</Text>
              </TableBodyCell>

              <TableBodyCell others>
                <Text withSize='smaller' tag='span'>Test</Text>
              </TableBodyCell>
              
              <TableBodyCell others>
                <Text withSize='smaller' tag='span'>Test</Text>
              </TableBodyCell>
            </TableRow>

            <TableRow>
              <TableBodyCell first>
                <Text withSize='smaller' tag='span'>Test</Text>
              </TableBodyCell>

              <TableBodyCell others>
                <Text withSize='smaller' tag='span'>Test</Text>
              </TableBodyCell>
              
              <TableBodyCell others>
                <Text withSize='smaller' tag='span'>Test</Text>
              </TableBodyCell>
            </TableRow>

            <TableRow>
              <TableBodyCell first>
                <Text withSize='smaller' tag='span'>Test</Text>
              </TableBodyCell>

              <TableBodyCell others>
                <Text withSize='smaller' tag='span'>Test</Text>
              </TableBodyCell>
              
              <TableBodyCell others>
                <Text withSize='smaller' tag='span'>Test</Text>
              </TableBodyCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrap>
    </section>
  )
}