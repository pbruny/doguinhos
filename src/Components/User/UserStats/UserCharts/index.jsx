import React from 'react';
import styles from './UserCharts.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserCharts = ({ data }) => {
  const [chart, setChart] = React.useState([]);
  const [totalViews, setTotalViews] = React.useState(0);

  React.useEffect(() => {
    const chartData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotalViews(
      data.map(({ acessos }) => Number(acessos))?.reduce((a, b) => a + b, 0)
    );
    setChart(chartData);
  }, [data]);

  return (
    <section className={`animeLeft ${styles.charts}`}>
      <div className={`${styles.total} ${styles.chartItem}`}>
        <p>Acessos: {totalViews}</p>
      </div>
      <div className={styles.chartItem}>
        <VictoryPie
          data={chart}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2
            },
            labels: {
              fontSize: 14,
              fill: '#333'
            }
          }}
        />
      </div>
      <div className={styles.chartItem}>
        <VictoryChart>
          <VictoryBar alignment='start' data={chart}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserCharts;
