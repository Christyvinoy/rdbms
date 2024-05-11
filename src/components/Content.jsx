import React from 'react'
import Title from './Title'
import Card from './Card'
import { LuActivity } from "react-icons/lu";
import { GiGoldBar } from "react-icons/gi";
import { VscSymbolProperty } from "react-icons/vsc";
import { RiExchangeFundsFill } from "react-icons/ri";


const Content = () => {
  return (
    <section
      className="w-full py-20 px-8 border-b-[1px] border-b-black">
      <Title title="Hello Nestie " des="SEE ALL YOUR INVESTMENTS" />
      <div className='grid grid-cols-2 gap-20'>
        <Card
          title="STOCKS"
          des="See your INVESTMENTS"
          icon={<LuActivity />}
        />
        <Card
          title="GOLD"
          des="See your INVESTMENTS"
          icon={<GiGoldBar />}
        />
        <Card
          title="PROPERTY "
          des="See your INVESTMENTS"
          icon={<VscSymbolProperty />} 
        />
        <Card
          title="MUTUAL FUNDS "
          des="See your INVESTMENTS"
          icon={<RiExchangeFundsFill />} 
        />
      </div>
    </section>
  )
}

export default Content