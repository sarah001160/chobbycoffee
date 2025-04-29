import { Link } from "react-router-dom"; //路由
import menuIcon from "../assets/menu-fill.svg";
import closeIcon from "../assets/close-large-fill.svg";
function HeaderComponent() {
  // 導覽列
  const navItems = [
    {
      title: "關於我們",
      subNav: [{ label: "本店介紹", link: "/intro" }],
    },
    {
      title: "最新消息",
      link: "/news",
      subNav: [],
    },
    {
      title: "飲品",
      link: "/beverage",
      subNav: [],
    },
  ];

  const toggleRwdMenu = () => {
    const el = document.querySelector(".rwd-menu");
    el.classList.toggle("show");
  };

  const closeRwdMenu = () => {
    const el = document.querySelector(".rwd-menu");
    el.classList.remove("show");
  };

  return (
    <>
      <header id='headerComp'>
        <div>
          <div className='logoZone'>
            <Link to='/' className='logo'>
              Chobby Coffee
            </Link>
          </div>
          <div className='menu'>
            {/*--導覽列以迴圈渲染-- */}
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.link ? (
                    <Link to={item.link} className='link'>
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                  {item.subNav.length > 0 && (
                    <div className='sub-nav'>
                      {item.subNav.map((subItem, subIndex) => (
                        <div className='sub-nav-item' key={subIndex}>
                          {subItem.link ? (
                            <Link to={subItem.link} className='link'>
                              {subItem.label}
                            </Link>
                          ) : (
                            subItem.label
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button className='rwd-burger-btn' onClick={toggleRwdMenu}>
              <img src={menuIcon} alt='icon' />
            </button>
          </div>
        </div>
        {/* 手機板才會出現menu btn，click menu btn 方可顯示 rwd-menu */}
        <div className='rwd-menu'>
          <div className='close-container'>
            <a href='#' onClick={closeRwdMenu}>
              <img src={closeIcon} alt='關閉選單' />
            </a>
          </div>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                {item.link ? (
                  <Link to={item.link} className='link' onClick={toggleRwdMenu}>
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
                {item.subNav.length > 0 && (
                  <div className='sub-nav'>
                    {item.subNav.map((subItem, subIndex) => (
                      <div className='sub-nav-item' key={subIndex}>
                        {subItem.link ? (
                          <Link
                            to={subItem.link}
                            className='link'
                            onClick={toggleRwdMenu}
                          >
                            {subItem.label}
                          </Link>
                        ) : (
                          subItem.label
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
