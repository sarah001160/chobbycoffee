// 飲品
import React from "react";
import { useEffect, useState } from "react";
function Beverage() {
  const menu = [
    {
      id: "coffee",
      category: "經典咖啡 Coffee",
      items: [
        { name: "美式咖啡 Americano", size: "12oz", price: 80 },
        { name: "拿鐵 Latte", size: "12oz", price: 100 },
        { name: "卡布奇諾 Cappuccino", size: "12oz", price: 100 },
        { name: "摩卡 Mocha", size: "12oz", price: 110 },
        { name: "濃縮咖啡 Espresso", size: "單份", price: 70 },
        { name: "黑糖拿鐵 Brown Sugar Latte", size: "12oz", price: 110 },
      ],
    },
    {
      id: "iced",
      category: "冰飲 Iced Drinks",
      items: [
        { name: "冰美式 Iced Americano", size: "16oz", price: 90 },
        { name: "冰拿鐵 Iced Latte", size: "16oz", price: 110 },
        { name: "冰摩卡 Iced Mocha", size: "16oz", price: 120 },
        { name: "冰抹茶拿鐵 Iced Matcha Latte", size: "16oz", price: 120 },
      ],
    },
    {
      id: "special",
      category: "特調飲品 Special Drinks",
      items: [
        { name: "抹茶拿鐵 Matcha Latte", size: "12oz", price: 110 },
        { name: "可可歐蕾 Cocoa Latte", size: "12oz", price: 100 },
        { name: "蜂蜜檸檬 Honey Lemon", size: "16oz", price: 100 },
        { name: "冬瓜檸檬 Winter Melon Lemon", size: "16oz", price: 90 },
      ],
    },
    {
      id: "dessert",
      category: "小點 Dessert",
      items: [
        { name: "起司蛋糕 Cheesecake", price: 130 },
        { name: "可麗露 Canelé", price: 60 },
        { name: "手工餅乾 Cookies", price: 40 },
        { name: "巴斯克乳酪蛋糕 Basque", price: 140 },
      ],
    },
  ];

  return (
    <>
      <section id='beverage'>
        <div>
          <h1>飲品</h1>
          {menu.map((item, index) => (
            <div className='target' key={index}>
              <h2 id={item.id}>{item.category}</h2>
              <div className='content'>
                <table>
                  <thead>
                    <tr>
                      <th style={{ width: "50%" }}>名稱</th>
                      <th style={{ width: "30%" }}>容量</th>
                      <th style={{ width: "20%" }}>價格</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.items.map((drink, subIndex) => (
                      <tr key={subIndex}>
                        <td>{drink.name}</td>
                        <td style={{ textAlign: "center" }}>{drink.size}</td>
                        <td style={{ textAlign: "center" }}>{drink.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Beverage;
