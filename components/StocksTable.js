export default function StocksTable(props) {

  const { id, xirrBySymbol } = props;

  // < !--Chart bar-- >
  const labelsBarChart = xirrBySymbol.map(item => item.symbol);

  const dataBarChart = {
    labels: labelsBarChart,
    datasets: [
      {
        label: "XIRR",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(252, 82.9%, 67.8%)",
        data: xirrBySymbol.map(item => item.xirr),
      },
    ],
  };

  const configBarChart = {
    type: "bar",
    data: dataBarChart,
    options: {},
  };

  var canvas = document.getElementById("chartBar");

  // JS - Destroy exiting Chart Instance to reuse <canvas> element
  let chartStatus = Chart.getChart("chartBar"); // <canvas> id
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  
  var chartBar = new Chart(
    canvas,
    configBarChart
  );;

    
  return (
    <>
      {/* <div id={id} className="text-gray-500">
      <table class="table-auto min-w-full border text-center">
        <thead>
          <tr className="border">
            <th>Symbol</th>
            <th>XIRR</th>
          </tr>
        </thead>
        <tbody>
          {
            xirrBySymbol.map(item => (
              <tr className="border">
                <td>{item.symbol}</td>
                <td>{item.xirr}</td>
              </tr>
            ))
          }
        </tbody>
      </table> 
    </div>  
     */}
    
  </>
  );
}
