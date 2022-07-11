import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let waitTime = false;

    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY;
        const pageHeight = document.body.offsetHeight - window.innerHeight;

        if (scroll > pageHeight * 0.75 && !waitTime) {
          setPages((pages) => [...pages, pages.length + 1]);
          waitTime = true;
          setTimeout(() => {
            waitTime = false;
          }, 400);
        }
      }
    };

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      removeEventListener('wheel', infiniteScroll);
      removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
