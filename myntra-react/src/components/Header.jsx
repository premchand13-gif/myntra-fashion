import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const bagItems = useSelector((store) => store.bag);
  return (
    <header>
      <div className="myntra-icon">
        <Link to="/">
          <img
            src="https://img.etimg.com/thumb/width-640,height-480,imgsize-13182,resizemode-75,msid-100649311/tech/technology/myntra-unveils-its-virtual-fashion-influencer-maya/myntra.jpg"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav-bar">
        <Link to="/man">Men</Link>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & living</a>
        <a href="#" className="beauty">
          Beauty
        </a>
        <a href="#">
          Studio <sup>new</sup>
        </a>
      </nav>

      <div className="search-bar">
        <span>
          <IoIosSearch />
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for products,brands and more"
        />
      </div>
      <div className="action-bar">
        <a href="#" className="profile-action">
          <span>
            <IoMdPerson />
          </span>
          <span>Person</span>
        </a>
        <a href="#" className="profile-action">
          <span>
            <FaHeart />
          </span>
          <span>Wishlist</span>
        </a>
        <Link to="/bag" className="profile-action">
          <span className="material-symbols-outlined">
            <IoBagHandleSharp />
          </span>
          <span>Bag</span>
          <span className="item-count">{bagItems.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
