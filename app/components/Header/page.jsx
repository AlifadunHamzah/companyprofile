import Link from 'next/link'

import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="fixed w-full bg-white z-10">
      <div className="flex items-center bg-base-100 px-10 py-8">
        {/* Div Left */}
        <div className="flex-1 flex items-center gap-3">
          {" "}
          {/* Use Link component instead of anchor tag */}
          <img
            src="https://toagroup.co.id/wp-content/uploads/2021/12/cropped-WhatsApp_Image_2021-12-02_at_11.16.29-removebg-preview-1-135x45.png"
            class="custom-logo"
            alt="TOA Indonesia"
            srcset="https://toagroup.co.id/wp-content/uploads/2021/12/cropped-WhatsApp_Image_2021-12-02_at_11.16.29-removebg-preview-1-135x45.png 135w, https://toagroup.co.id/wp-content/uploads/2021/12/cropped-WhatsApp_Image_2021-12-02_at_11.16.29-removebg-preview-1-300x100.png 300w, https://toagroup.co.id/wp-content/uploads/2021/12/cropped-WhatsApp_Image_2021-12-02_at_11.16.29-removebg-preview-1.png"
            width={180}
            height={80}
          />
        </div>
        {/* Div Center */}
        <div className="">
          <div className="flex-1 flex items-center justify-center gap-3">
            <div>
                <button>
                  <a
                    href=""
                    class=""
                    id=""
                    aria-haspopup=""
                    aria-controls=""
                    aria-expanded=""
                  >
                    AboutUs
                    <span class="sub-arrow">
                      <i class="fas fa-caret-down"></i>
                    </span>
                  </a>
                </button>
            </div>
            <IoIosArrowDown />
            <div>
              <button>
                <a
                  href=""
                  class=""
                  id=""
                  aria-haspopup=""
                  aria-controls=""
                  aria-expanded=""
                >
                  Product services
                  <span class="sub-arrow">
                    <i class="fas fa-caret-down"></i>
                  </span>
                </a>
              </button>
            </div>
            <IoIosArrowDown />
            <div>
              <button>
                <a
                  href=""
                  class=""
                  id=""
                  aria-haspopup=""
                  aria-controls=""
                  aria-expanded=""
                >
                  Team Page
                  <span class="sub-arrow">
                    <i class="fas fa-caret-down"></i>
                  </span>
                </a>
              </button>
            </div>
            <IoIosArrowDown />
            <div>
              <button>
                <a
                  href=""
                  class=""
                  id=""
                  aria-haspopup=""
                  aria-controls=""
                  aria-expanded=""
                >
                  Contact
                  <span class="sub-arrow">
                    <i class="fas fa-caret-down"></i>
                  </span>
                </a>
              </button>
            </div>
            <IoIosArrowDown />
          </div>
        </div>
        {/* Div Right */}
        <div className="flex-1 gap-2 flex justify-end items-center">
          <div className="hover:text-gray-500"></div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Header