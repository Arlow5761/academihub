import React from 'react'
import Card from './CardList'

const projectData = [
  {
    id: 1,
    title: "Beasiswa",
    image:"/images/Beasiswa.jpg",
    url: "/beasiswa",
  },
  {
    id: 2,
    title: "Lomba",
    image:"/images/Lomba.jpg",
    url:"/lomba",
  },
  {
    id: 3,
    title: "Seminar",
    image:"/images/Seminar.jpg",
    url:"/seminar",
  },
  {
    id: 4,
    title: "Beasiswa",
    image:"/images/Beasiswa.jpg",
    url: "/beasiswa",
  },
  {
    id: 5,
    title: "Lomba",
    image:"/images/Lomba.jpg",
    url:"/lomba",
  },
  {
    id: 6,
    title: "Seminar",
    image:"/images/Seminar.jpg",
    url:"/seminar",
  },
];

const CardSection = (args) => {
  const list = args.list;
  const type = args.type;

  const DeduceType = (item) => {
    if (type === "bookmark") {
      return item.type;
    }
    return type;
  };

  return (
    <section id="projects" className='px-4 xl:gap-8 xl:px-16'>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {list.map((item) => 
          <Card 
            key={item.id} 
            title={item.title} 
            imgUrl="/images/Seminar.jpg"
            url={`/${DeduceType(item)}/${item.id}`}
          />)}
        </div>
    </section>
  )
}

export default CardSection