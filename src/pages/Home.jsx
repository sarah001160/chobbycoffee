import React, { useEffect } from "react";
import { Link } from "react-router-dom"; //路由
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
// swiper 樣式
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import pic1 from "../assets/coffee.jpg";
import pic2 from "../assets/coffee2.jpg";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import show1 from "../assets/happy.png";
import show2 from "../assets/drinkcof.png";
import show3 from "../assets/coffeebean.png";

function Home() {
  const showList = [
    { title: "新鮮豆子", descrip: "新鮮壓榨", img: show1 },
    { title: "健康安心", descrip: "新鮮食材", img: show2 },
    { title: "貼心服務", descrip: "咖啡豆真空包裝、宅配到府", img: show3 },
  ];

  const handleScroll = () => {
    const els = document.querySelectorAll(".showArea ul li");
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();

      // 檢查元素是否在視口範圍內
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        el.classList.add("visible");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // clear: 移除事件監聽
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id='home'>
        {/* 圖片輪播 */}
        <section>
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation, Scrollbar, Autoplay]}
              autoplay={{
                delay: 6000, // 設定每_豪秒自動換圖
                disableOnInteraction: false, // 互動後自動撥放不會停止
              }}
              className='mySwiper'
            >
              <SwiperSlide>
                <img src={pic1} alt='pic' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={pic2} alt='pic' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={pic1} alt='pic' />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className='cardArea'>
          <h2>豆香的好滋味</h2>
          <div className='cardContainer'>
            <div>
              <Link to='/beverage'>
                <span>綠茶風味咖啡</span>
              </Link>
              <img src={card1} alt='pic' />
            </div>
            <div>
              <Link to='/beverage'>
                <span>抹茶拿鐵</span>
              </Link>
              <img src={card2} alt='pic' />
            </div>
            <div>
              <Link to='/beverage'>
                <span>美式咖啡</span>
              </Link>
              <img src={card3} alt='pic' />
            </div>
            <div>
              <Link to='/beverage'>
                <span>冰拿鐵</span>
              </Link>
              <img src={card4} alt='pic' />
            </div>
          </div>
        </section>

        <div className='showArea'>
          <div>
            <ul>
              {showList.map((show, index) => (
                <li key={index}>
                  <img src={show.img} alt='pic' />
                  <h3>{show.title}</h3>
                  <p>{show.descrip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
