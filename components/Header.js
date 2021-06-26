import Head from "next/head";
import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import { 
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
 } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
        <HeaderItem title='COLLECTION' Icon={CollectionIcon}/>
        <HeaderItem title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Head>
        <title>This is Header</title>
      </Head>
      <Image
        className="object-contain"
        src="https://i.ibb.co/HhDhXsQ/icons8-hulu-150-1.png"
        width={120}
        height={120}
        alt="logo"
      />
    </header>
  );
};

export default Header;
