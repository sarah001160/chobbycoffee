import { Link } from "react-router-dom"; //路由
import fbIcon from "../assets/facebook-circle-fill.svg";
import xIcon from "../assets/twitter-x-line.svg";
import instagramIcon from "../assets/instagram-fill.svg";

function FooterComponent() {
  const linkList = [
    {
      icon: fbIcon,
      url: "https://www.facebook.com/?locale=zh_TW",
      altTxt: "social-media-link",
    },
    {
      icon: xIcon,
      url: "https://x.com/",
      altTxt: "social-media-link",
    },
    {
      icon: instagramIcon,
      url: "https://www.instagram.com/",
      altTxt: "social-media-link",
    },
  ];

  return (
    <>
      <footer id='footerComp'>
        <section>
          <div className='logoZone'>
            <Link to='/' className='logo'>
              Chobby Coffee
            </Link>
          </div>
          <div className='linkZone'>
            {linkList.map((item, index) => (
              <a href={item.url} key={index} target='_blank'>
                <img src={item.icon} alt={item.altTxt} />
              </a>
            ))}
          </div>
          <p>新北市永和區綠寶石公園</p>
          <p>服務電話: (02)0123456789 </p>
        </section>
      </footer>
    </>
  );
}
export default FooterComponent;
