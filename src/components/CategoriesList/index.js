import React, { useEffect, useState } from 'react';
import BannerMain from '../BannerMain';
import Carousel from '../Carousel';
import CategoriesRepository from '../../Repositories/CategoriesRepository';

export default function CategoriesList() {
  const [categoriesWithVideos, setCategoriesWithVideos] = useState([]);

  useEffect(() => {
    async function loadCategoriesWithVideos() {
      try {
        const categoriesData = await CategoriesRepository.getAllWithVideos();

        setCategoriesWithVideos(categoriesData);
      } catch (error) {
        console.log(error.message);
      }
    }

    loadCategoriesWithVideos();
  }, []);

  return (
    <>
      {categoriesWithVideos.length === 0 && (<div>Loading...</div>)}

      {categoriesWithVideos.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle="ET NANDU"
                url="https://www.youtube.com/watch?v=RfkFnIAlLpc&t="
                videoDescription="Vídeos favoritos de Fernando Butzke!"
              />

              <Carousel
                ignoreFirstVideo
                category={categoriesWithVideos[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
    </>
  );
}
