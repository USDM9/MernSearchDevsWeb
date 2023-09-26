import React from 'react'

const Home = () => {
  return (
    <>
      {/* === HERO === */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* === Hero Content === */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[600] md:leading-[70px]'>
                  Encuentra un Desarrollador en minutos!
                </h1>
                <p className='text__para'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, eos officiis pariatur modi quaerat asperiores maxime, sed laboriosam nulla provident ipsa!
                </p>
                <button className='btn'>Solicita un reclutador</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
