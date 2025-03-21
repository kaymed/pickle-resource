import React, { useState } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import tournaments from '../library/TournamentData';
const App = () => {
  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = React.useState(true);
  React.useEffect(() => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setData(tournaments);
    }, 2000);
  }, []);
  const handleItemChange = event => {
    const newData = data.map(item => item.TournamentID === event.dataItem.TrounamentID ? {
      ...item,
      [event.field]: event.value
    } : item);
    setData(newData);
  };
  return <Grid style={{
    height: '500px',
  }}
  className='grid-tourneys' 
  edit={false}
  selectable={false}
  showLoader={showLoader} 
  data={data} dataItemKey="TournamentID" autoProcessData={true} sortable={true} pageable={true} filterable={true} editable={{
    mode: 'incell'
  }} defaultSkip={0} defaultTake={10} onItemChange={handleItemChange}>
            <Column field="TournamentID" title="ID" editable={false} filterable={false} width="75px" />
            <Column field="TournamentName" title="Name" editor="text" />
            <Column field="Category.CategoryName" title="Category" editable={false} width="300px"></Column>
            <Column field="LocationName" title="Location" editor="text" width="150px" />
        </Grid>;
};
export default App;