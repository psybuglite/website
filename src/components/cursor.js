import React, { useEffect } from "react";
import { gsap } from "gsap";
import cursorImage from "../images/cursor.jpg"
const Cursor = () => {


  useEffect(() => {

    var newcursor = document.querySelector(".cursor");
    var follower = document.querySelector(".cursor-follower");

    var posX = 0,
      posY = 0;

    var mouseX = 0,
      mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 6;
        posY += (mouseY - posY) / 6;

        gsap.set(follower, {
          css: {
            left: posX - 12,
            top: posY - 12,
          },
        });
        
        gsap.set(newcursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    document.onmousemove = function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };


    var portfolioItems = document.querySelectorAll(".portfolio-item")
    portfolioItems.forEach((portfolioItem) => {
      portfolioItem.onmouseenter = function () {
        newcursor.classList.add("active");
        follower.classList.add("active");
      };

      portfolioItem.onmouseleave = function () {
        newcursor.classList.remove("active");
        follower.classList.remove("active");
      };
    })

    var linkItems = document.querySelectorAll(".link-item")
    linkItems.forEach((linkItem) => {
      linkItem.onmouseenter = function () {
        newcursor.classList.add("linked");
        follower.classList.add("linked");
      };

      linkItem.onmouseleave = function () {
        newcursor.classList.remove("linked");
        follower.classList.remove("linked");
      };
    })

  }, []);

  return (
    <>
      <div className="hidden md:block cursor">
      </div>
      <div className="hidden md:block cursor-follower">
        <img src={cursorImage} alt="" />
      </div>
    </>
  );
};

export default Cursor;
