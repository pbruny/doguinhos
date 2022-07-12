import React from 'react';
import Error from '../Error';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../Api/api';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Loading';
import PhotoContent from './PhotoContent';
import Head from '../../Helper/Head';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(async () => {
    const { url, options } = PHOTO_GET(id);
    await request(url, options);
  }, [request, id]);

  if (error) <Error error={error} />;
  if (loading) <Loading />;

  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single data={data} />
      </section>
    );
  else {
    return null;
  }
};

export default Photo;
