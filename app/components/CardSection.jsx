import React from 'react'
import Card from './Card'

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
    image:"/images/Lomba2.jpg",
    url:"/lomba",
  },
  {
    id: 3,
    title: "Seminar",
    image:"/images/Seminar.jpg",
    url:"/seminar",
  },
];

const CardSection = () => {
  return (
    <section id="projects" className='px-4 xl:gap-8 xl:px-16'>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {projectData.map((project) => 
          <Card 
            key={project.id} 
            title={project.title} 
            imgUrl={project.image}
            url={project.url}
          />)}
        </div>
    </section>
  )
}

export default CardSection