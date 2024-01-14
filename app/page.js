import Head from 'next/head';
import Image from 'next/image';
// import Slider from 'react-slick';
import React from 'react';


const fanArts = [
  '/public/carouselpic1.jpg',
  '/public/carouselpic2.jpg',
  '/public/carouselpic3.jpg',
  '/public/carouselpic4.jpg',
  '/public/carouselpic5.jpg',
]

export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    centerMode: true, // Enable center mode
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-center bg-cover" style={{ backgroundImage: "url('/landingphoto.jpg')" }}>
      <Head>
        <title>Jujutsu Kaisen Fanpage</title>
        <meta name="description" content="A fan-made page dedicated to Jujutsu Kaisen" />
        <link rel="icon" href="/icon.jpg" />
      </Head>

      {/* Navigation and content */}
      <nav className="flex justify-between items-center p-6 text-white">
        {/* Add your navigation items */}
      </nav>

      {/* Main content area */}
      <main className="flex flex-col items-left pl-6 pt-64 justify-center h-full">
        {/* Landing page content */}
        {/* You can place a logo or title here */}
        <h1 className="text-8xl font-bold text-white drop-shadow-md">Jujutsu Kaisen</h1>
        <h2 className='text-3xl pt-10 tracking-wider text-slate-200'>Unleash the Curse. Embrace the Adventure!</h2>
      </main>

      <section className="my-8">
        {/* <Slider {...settings}>
          {fanArts.map((art, index) => (
            <div key={index} className="px-2">
              <Image src={art} alt={`Fan art ${index + 1}`} width={300} height={300} />
            </div>
          ))}
    </Slider> */}
  </section>

      {/* Footer with contact links */}
      <footer className="flex justify-center items-center p-4 text-white">
        {/* Add your footer content */}
      </footer>
    </div>
  )
}
