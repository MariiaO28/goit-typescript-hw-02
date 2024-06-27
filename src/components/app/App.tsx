import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchPhotos, Photo } from '../../images-api';

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | undefined>(undefined);
  const [totalPages, setTotalPages] = useState<number>(0);
 
async function handleSearch(newQuery: string) {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
    setTotalPages(0);
  };

  function handleLoadMore() {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getPhotos(): Promise<void> {
      try {
        setIsLoading(true);
        const data = await fetchPhotos(query, page);
        setPhotos(prevPhotos => [...prevPhotos, ...data.results]);
        setTotalPages(data.total_pages);
        setError(data.results.length === 0);
      } catch (error) {
        setError(true)
    } finally {
        setIsLoading(false)
     }
    }
    getPhotos()
  }, [page, query])

  function openModal(imageUrl: string, description: string):void {
    setSelectedPhoto(imageUrl)
    setIsOpen(true)
  }

  function closeModal():void {
    setIsOpen(false);
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery photos={photos} openModal={openModal}/>}
      <ImageModal onClose={closeModal} onOpen={modalIsOpen}  photo={selectedPhoto} />
      {isLoading && <Loader />}
      {page < totalPages && !isLoading && <LoadMoreBtn onLoadMore={handleLoadMore} />}
    </div>
  )
}

export default App;