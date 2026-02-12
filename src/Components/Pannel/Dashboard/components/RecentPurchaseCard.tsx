import React from 'react'
import { recentPurchaseData } from '../../../Data/RecentPurchaseData';
import { Table } from 'jiffy-ui';

const RecentPurchaseCard = () => {
    const tableRows = recentPurchaseData.map(
        ({ id, date, project, credits, amount, status, blockchain }) => (
          <Table.Row key={id} id={id}>
            <Table.Cell>{date}</Table.Cell>
            <Table.Cell>{project}</Table.Cell>
            <Table.Cell>{credits}</Table.Cell>
            <Table.Cell>{amount}</Table.Cell>
            <Table.Cell>{status}</Table.Cell>
            <Table.Cell>{blockchain}</Table.Cell>
            
          </Table.Row>
        )
      );
  return (
    <div>
         <Table
        headings={[
            { title: "Date",  },
            { title: "Project",  align: "left" },
            { title: "Credits",  },
            { title: "Amount",  priority: 3 },
            { title: "Status", align: "left" },
            { title: "Blockchain", priority: 1 },
        ]}
        >
      {tableRows}
    </Table>
    </div>
  )
}

export default RecentPurchaseCard