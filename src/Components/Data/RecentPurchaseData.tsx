import { Badge } from "jiffy-ui";

export interface RecentPurchase {
    id: string;
    date: string;
    project: string;
    credits: string;
    amount: string;
    status: React.ReactNode;
    blockchain: string;
}



export const recentPurchaseData: RecentPurchase[] = [
    {   
        id: '1',
        date: 'Feb 5, 2026',
        project: 'Solar Farm India',
        credits: '150 tCO2e',
        amount: '£6,630',
        status: <Badge emphasis="Subtile" color="Positive" size="Medium" type="Full">Success</Badge>,
        blockchain: '0x742d...3f8a',
    },
    {
        id: '2',
        date: 'Feb 4, 2026',
        project: 'Reforestation Brazil',
        credits: '200 tCO2e',
        amount: '£8,840',
        status: <Badge emphasis="Subtile" color="Negative" size="Medium" type="Full">Failed</Badge>,
        blockchain: '0x8a3c...2b1d',
    },
    {
        id: '3',
        date: 'Feb 3, 2026',
        project: 'Wind Energy UK',
        credits: '500 tCO2e',
        amount: '£3,375',
        status: <Badge emphasis="Subtile" color="Notice" size="Medium" type="Full">Waiting</Badge>,
        blockchain: '0x9f2e...4c7b',
    },
    {
        id: '4',
        date: 'Feb 5, 2026',
        project: 'Methane Capture USA',
        credits: '100 tCO2e',
        amount: '£4,420',
        status: <Badge emphasis="Subtile" color="Positive" size="Medium" type="Full">Success</Badge>,
        blockchain: '0x9f2e...4c7b',
    },
];


// export const sampleOrders = [
//     {
//       id: "1020",
//       order: "#1020",
//       date: "Jul 20 at 4:34pm",
//       customer: "Jaydon Stanton",
//       email: "jaydon@example.com",
//       total: "$969.44",
//       paymentStatus: <Badge emphasis="Subtile" color="Positive" size="Medium" type="Full">Success</Badge>,
//       fulfillmentStatus: <Tag>Unfulfilled</Tag>,
//       actions: (
//         <div style={{ display: "flex", gap: "0.5rem" }}>
//           <Button variant="Secondary" size="Small">View</Button>
//           <Button variant="Primary" size="Small">Edit</Button>
//         </div>
//       ),
//     },
//     {
//       id: "1019",
//       order: "#1019",
//       date: "Jul 20 at 3:46pm",
//       customer: "Ruben Westerfelt",
//       email: "ruben@example.com",
//       total: "$701.19",
//       paymentStatus: <Badge emphasis="Subtile" color="Negative" size="Medium" type="Full">Failed</Badge>,
//       fulfillmentStatus: <Tag>Unfulfilled</Tag>,
//       actions: (
//         <div style={{ display: "flex", gap: "0.5rem" }}>
//           <Button variant="Secondary" size="Small">View</Button>
//           <Button variant="Primary" size="Small">Edit</Button>
//         </div>
//       ),
//     },
//     {
//       id: "1018",
//       order: "#1018",
//       date: "Jul 20 at 3:44pm",
//       customer: "Leo Carder",
//       email: "leo@example.com",
//       total: "$798.24",
//       paymentStatus: <Badge emphasis="Subtile" color="Notice" size="Medium" type="Full">Waiting</Badge>,
//       fulfillmentStatus: <Tag>Unfulfilled</Tag>,
//       actions: (
//         <div style={{ display: "flex", gap: "0.5rem" }}>
//           <Button variant="Secondary" size="Small">View</Button>
//           <Button variant="Primary" size="Small">Edit</Button>
//         </div>
//       ),
//     },
//     {
//       id: "1017",
//       order: "#1017", 
//       date: "Jul 19 at 2:15pm",
//       customer: "Sarah Chen",
//       email: "sarah@example.com",
//       total: "$1,234.56",
//       paymentStatus: <Badge emphasis="Subtile" color="Positive" size="Medium" type="Full">Success</Badge>,
//       fulfillmentStatus: <Tag>Fulfilled</Tag>,
//       actions: (
//         <div style={{ display: "flex", gap: "0.5rem" }}>
//           <Button variant="Secondary" size="Small">View</Button>
//           <Button variant="Primary" size="Small">Edit</Button>
//         </div>
//       ),
//     },
//   ];
