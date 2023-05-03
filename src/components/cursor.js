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
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

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


    var links = document.querySelectorAll(".portfolio-item")
    links.forEach((link) => {
      link.onmouseenter = function () {
        newcursor.classList.add("active");
        follower.classList.add("active");
      };

      link.onmouseleave = function () {
        newcursor.classList.remove("active");
        follower.classList.remove("active");
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
