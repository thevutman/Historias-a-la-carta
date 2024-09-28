'use client'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import Link from 'next/link';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
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
          <div className="flex justify-center items-center h-full w-full">
            <div className="h-3/6 w-2/6">
              <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
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
            <div className="h-3/6 w-2/6">
              <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
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
          </div>
          
        </div>
      </div>
    );
  }
}
