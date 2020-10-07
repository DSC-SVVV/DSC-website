import React from 'react';
import { PageHeader } from 'antd';
import { Image } from 'antd';

import "./Home.css";

const Home = () => {
    return (
        <>
        <PageHeader
        className="site-page-header"
        title="DSC-website"
        subTitle="Check this out!"/>
        <Image
        width={200}
        height={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
      <Image
        width={200}
        height={200}
        src="https://i.pinimg.com/originals/fd/72/72/fd7272a40fdaad19f4c88197dbb9a0a9.jpg"/>
      </>
    )
}

export default Home;