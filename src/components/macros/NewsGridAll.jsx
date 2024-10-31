import React from 'react';
import NewsCard from '../micros/NewsCard';

const NewsGridAll = () => (
    <section className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
           <NewsCard />
           <NewsCard />
           <NewsCard />
           <NewsCard />
           <NewsCard />
           <NewsCard />
           <NewsCard />
           <NewsCard />
        </div>
      </div>
    </section>
  );

  export default NewsGridAll;