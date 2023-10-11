import React from "react";
import "./Content.css";
import logo from "../../assets/logoNCC.png";
import css from "../../assets/css-icon.png";
import html from "../../assets/html-icon.png";
import url from "../../assets/url-icon.png";

const Content = ({ className }) => {
  return (
    <div className={`${className} content-component`}>
      <img src={logo} />
      <div className="content-main">
        <h3>Lorem ipsum dolor sit asmet?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className="content-list">
        <div className="content-list-item">
          <p>Lorem ipsum dolor sit asmet</p>
          <div className="item-img">
            <img src={css} alt="#" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at
            </p>
          </div>
          <p>
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </p>
        </div>
        <div className="content-list-item">
          <p>Lorem ipsum dolor sit asmet</p>
          <div className="item-img">
            <img src={html} alt="#" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at
            </p>
          </div>
          <p>
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </p>
        </div>
        <div className="content-list-item">
          <p>Lorem ipsum dolor sit asmet</p>
          <div className="item-img">
            <img src={url} alt="#" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at
            </p>
          </div>
          <p>
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </p>
        </div>
      </div>
      <hr />
      <footer>Copyright © 2021</footer>
    </div>
  );
};

export default Content;
