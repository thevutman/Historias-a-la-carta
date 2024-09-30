'use client'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import Link from 'next/link';

const data1 = [
  {
    name: 'Comida típica',
    uv: 7,
  },
  {
    name: 'Comida internacional',
    uv: 0,
  },
  {
    name: 'Comida rapida',
    uv: 3,
  },
  {
    name: 'Comida vegetariana',
    uv: 1,
  },
  {
    name: 'otra',
    uv: 0,
  },
];
const data2 = [
  {
    name: 'Comida típica',
    Votos: 2,
  },
  {
    name: 'Comida internacional',
    Votos: 0,
  },
  {
    name: 'Ambas',
    Votos: 0,
  },
  {
    name: 'Otra',
    Votos: 4,
  },
];

const cardinal = curveCardinal.tension(0.2);

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/area-chart-different-shapes-6lwnhy';

  render() {
    return (
      <div className="bg-gradient-to-r from-gray-950 to-stone-950">
        <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="px-12 flex items-center justify-between h-16 bg-opacity-80 backdrop-blur-md shadow-md">
              <div className="flex items-center">
                <Link href={"/"} className='font-semibold text-2xl'>Historias a la Carta</Link>
              </div>
              <div>
                <Link href={"/"} className='font-medium text-lg'>Inicio</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
          <h2 className='text-5xl font-bold mt-20'>Graficas</h2>
          <div className="flex flex-wrap justify-center items-center h-full w-full">
            <div className="h-2/6 w-5/6 text-stone-950">
              <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data1}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
            </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="h-2/6 w-3/6">
              <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data2}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="Votos" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              <Area type={cardinal} dataKey="Votos" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
            </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
        </div>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-8'>
          <div className='p-8 bg-slate-700 bg-opacity-10 shadow-lg rounded-lg'>
            <h2 className='text-2xl font-semibold text-gray-200 mb-4'>Preferencias Gastronómicas:</h2>
            <p className='text-gray-300 mb-6'>Tanto los turistas como los residentes tienen una marcada preferencia por los platos típicos locales, lo cual refleja el arraigo cultural de la gastronomía en la región. Sin embargo, también existe interés por la comida más internacional, especialmente entre los turistas, quienes buscan una mezcla entre la oferta local y otras opciones gastronómicas.</p>
          </div>
          <div className='p-8 bg-slate-700 bg-opacity-10 shadow-lg rounded-lg'>
            <h2 className='text-2xl font-semibold text-gray-200 mb-4'>Representación Cultural:</h2>
            <p className='text-gray-300 mb-6'>La mayoría de los encuestados considera que la gastronomía local es un reflejo auténtico de la cultura de Santa Fe de Antioquia. Esto subraya la importancia de la comida no solo como una fuente de placer, sino como un medio de preservar y transmitir la identidad cultural del lugar.</p>
          </div>
          <div className='p-8 bg-slate-700 bg-opacity-10 shadow-lg rounded-lg'>
            <h2 className='text-2xl font-semibold text-gray-200 mb-4'>Calidad Percibida:</h2>
            <p className='text-gray-300 mb-6'>En cuanto a la calidad de la comida, tanto turistas como residentes valoran positivamente la oferta gastronómica de la región. No obstante, los turistas parecen ser un poco más críticos en su evaluación, posiblemente debido a la comparación con otras experiencias gastronómicas en destinos turísticos.</p>
          </div>
          <div className='p-8 bg-slate-700 bg-opacity-10 shadow-lg rounded-lg'>
            <h2 className='text-2xl font-semibold text-gray-200 mb-4'>Eventos Gastronómicos:</h2>
            <p className='text-gray-300 mb-6'>A pesar de la percepción positiva sobre la gastronomía local, una porción significativa de los encuestados no ha participado en eventos gastronómicos. Esto podría indicar una oportunidad para promover más actividades que celebren la comida local y la integren aún más en la experiencia turística.</p>
          </div>
        </div>
        <section className="bg-gradient-to-r from-gray-950 to-stone-950 flex justify-center items-center">
          <div className="max-w-7xl px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
            <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
              <h2 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Entrevistas
              </h2>

              {/* <div className="mt-8 flex gap-4 lg:mt-0">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous"
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <button
                  aria-label="Next slide"
                  id="keen-slider-next"
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div> */}
            </div>

            <div className="mt-8 lg:col-span-2 lg:mx-0">
              <div id="keen-slider" className="keen-slider flex flex-wrap justify-center gap-6 overflow-hidden">
                <div className="keen-slider__slide w-fit md:w-[32%] lg:w-[32%]">
                  <blockquote
                    className="flex h-full flex-col justify-between bg-slate-700 bg-opacity-10 shadow-lg rounded-lg p-6 sm:p-8 lg:p-12"
                  >
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin&apos; Alive</p>

                        <p className="mt-4 leading-relaxed text-gray-700">
                          No, Rose, they are not breathing. And they have no arms or legs … Where are they?
                          You know what? If we come across somebody with no arms or legs, do we bother
                          resuscitating them? I mean, what quality of life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </div>

                <div className="keen-slider__slide w-fit md:w-[32%] lg:w-[32%]">
                  <blockquote
                    className="flex h-full flex-col justify-between bg-slate-700 bg-opacity-10 shadow-lg rounded-lg p-6 sm:p-8 lg:p-12"
                  >
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin&apos; Alive</p>

                        <p className="mt-4 leading-relaxed text-gray-700">
                          No, Rose, they are not breathing. And they have no arms or legs … Where are they?
                          You know what? If we come across somebody with no arms or legs, do we bother
                          resuscitating them? I mean, what quality of life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </div>

                <div className="keen-slider__slide w-fit md:w-[32%] lg:w-[32%]">
                  <blockquote
                    className="flex h-full flex-col justify-between bg-slate-700 bg-opacity-10 shadow-lg rounded-lg p-6 sm:p-8 lg:p-12"
                  >
                    <div>
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-gray-200 sm:text-3xl">Name</p>

                        <p className="mt-4 leading-relaxed text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente dolore iste repudiandae est saepe labore harum modi at. Deleniti numquam, labore provident porro eius quos voluptas sapiente tempore architecto!...
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; Name...
                    </footer>
                  </blockquote>
                </div>
                <div className="keen-slider__slide w-fit md:w-[32%] lg:w-[32%]">
                  <blockquote
                    className="flex h-full flex-col justify-between bg-slate-700 bg-opacity-10 shadow-lg rounded-lg p-6 sm:p-8 lg:p-12"
                  >
                    <div>
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-gray-200 sm:text-3xl">Name</p>

                        <p className="mt-4 leading-relaxed text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente dolore iste repudiandae est saepe labore harum modi at. Deleniti numquam, labore provident porro eius quos voluptas sapiente tempore architecto!...
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; Name...
                    </footer>
                  </blockquote>
                </div>
                <div className="keen-slider__slide w-fit md:w-[32%] lg:w-[32%]">
                  <blockquote
                    className="flex h-full flex-col justify-between bg-slate-700 bg-opacity-10 shadow-lg rounded-lg p-6 sm:p-8 lg:p-12"
                  >
                    <div>
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-gray-200 sm:text-3xl">Name</p>

                        <p className="mt-4 leading-relaxed text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente dolore iste repudiandae est saepe labore harum modi at. Deleniti numquam, labore provident porro eius quos voluptas sapiente tempore architecto!...
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; Name...
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


// lol

{/* <link href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" rel="stylesheet" />

<script type="module">
  const keenSliderPrevious = document.getElementById('keen-slider-previous')
  const keenSliderNext = document.getElementById('keen-slider-next')

  keenSliderPrevious.addEventListener('click', () => keenSlider.prev())
  keenSliderNext.addEventListener('click', () => keenSlider.next())
</script> */}


