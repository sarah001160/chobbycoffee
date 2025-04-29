// 最新消息
import React from "react";
function News() {
  return (
    <>
      <section id='news'>
        <div>
          <h1>最新消息</h1>
          <div>
            <p className='marquee' data-text='目前沒有最新消息~ ^_^/'></p>
          </div>
        </div>
      </section>
    </>
  );
}
export default News;
