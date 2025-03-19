import React, { useState } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import tournaments from './TournamentData';
const App = () => {
  const [data, setData] = useState(tournaments);
  const handleItemChange = event => {
    const newData = data.map(item => item.ProductID === event.dataItem.ProductID ? {
      ...item,
      [event.field]: event.value
    } : item);
    setData(newData);
  };
  return <Grid style={{
    height: '500px'
  }} data={data} dataItemKey="ProductID" autoProcessData={true} sortable={true} pageable={true} filterable={true} editable={{
    mode: 'incell'
  }} defaultSkip={0} defaultTake={10} onItemChange={handleItemChange}>
            <Column field="ProductID" title="ID" editable={false} filterable={false} width="75px" />
            <Column field="ProductName" title="Name" editor="text" />
            <Column field="Category.CategoryName" title="Category" editable={false} width="350px"></Column>
            <Column field="LocationName" title="Location" editor="text" width="150px" />
        </Grid>;
};
export default App;