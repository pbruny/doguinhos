import React from 'react';
import { STATS_GET } from '../../../Api/api';
import Head from '../../../Helper/Head';
import useFetch from '../../../Hooks/useFetch';
import Loading from '../../Loading';
import Error from '../../Error';
const UserCharts = React.lazy(() => import('./UserCharts'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    const getData = async () => {
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if(loading) return <Loading />
  if(error) return <Error error={error} />
  if(data)
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatísticas" />
      <UserCharts data={data} />
    </React.Suspense>
  );
  else return null;
};

export default UserStats;
