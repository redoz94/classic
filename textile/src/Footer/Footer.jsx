import React from "react";
import ClassicLogo from "../NavBar/classic textile logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#9EC8B9] dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-1 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div className="text-center">
            <img src={ClassicLogo} alt="logo" srcset="" height={50} width={50} className="m-auto my-5" />
            <span className="ml-3 text-xl">Classic Textile</span>
            <p className="mt-2 text-sm text-white-500 text-black">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div className="text-center">
            <h2 class="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
              INFORMATION
            </h2>

            <ul class="text-black dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Home</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Business</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  All Products
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Contact Us</a>
              </li>
            </ul>


          </div>
          <div className="text-center">
            <h2 class="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
              PRODUCTS
            </h2>
            <ul className="text-black dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">First Link</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Second Link</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Third Link</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Fourth Link</a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h2 class="title-font font-medium text-white-900 tracking-widest text-sm mb-3 text-center">
              CONTACT
            </h2>
            <ul className="text-black dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" >
                  Classic Textiles Address: 603-604
                  Gul Tower
                  I.I. Chundrigar Road
                  Karachi-74000
                  Pakistan
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  info@classictextile.com
                </a>
              </li>
              <li class="mb-4">
                <a href="#" >
                  (92-21) 32442392-93
                </a>
              </li>
              <li>
                {/* <a class="text-white-600 hover:text-white-800">Fourth Link</a> */}
              </li>
            </ul>
          </div>
        </div>
        <div class="px-4 py-6  md:flex md:items-center md:justify-between">
          <span class="text-sm text-black dark:text-gray-300 sm:text-center">© 2023 Classic Textile. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" class="text-black hover:text-gray-900 dark:hover:text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="#" class="text-black hover:text-gray-900 dark:hover:text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" class="text-black hover:text-gray-900 dark:hover:text-white">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="#" class="text-black hover:text-gray-900 dark:hover:text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






















// import React from "react";
// import ClassicLogo from "../NavBar/classic textile logo.png";

// export default function Footer() {
//   return (
//     <>
//       <footer
//         class="text-white-600 body-font bg-[#9EC8B9]"
//         style={{ background: "#9EC8B9" }}
//       >
//         <div className="container px-5 py-24 mx-auto flex justify-between md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
//           <div class="w-auto flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
//             <a class="flex title-font font-medium items-center md:justify-start justify-center text-white-900">
//               <img src={ClassicLogo} alt="" srcset="" height={50} width={50} />
//               <span class="ml-3 text-xl">Classic Textile</span>
//             </a>
//             <p class="mt-2 text-sm text-white-500">
//               Air plant banjo lyft occupy retro adaptogen indego
//             </p>
//           </div>
//           <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
//             <div class="lg:w-1/4 md:w-1/2 w-full px-4">
//               <h2 class="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
//                 INFORMATION
//               </h2>
//               <nav class="list-none mb-10">
//                 <li>
//                   <a class="text-white-600 hover:text-white-800">Home</a>
//                 </li>
//                 <li>
//                   <a class="text-white-600 hover:text-white-800">Business</a>
//                 </li>
//                 <li>
//                   <a class="text-white-600 hover:text-white-800">
//                     All Products
//                   </a>
//                 </li>
//                 <li>
//                   <a class="text-white-600 hover:text-white-800">Contact Us</a>
//                 </li>
//               </nav>
//             </div>
//             <div class="lg:w-1/4 md:w-1/2 w-full px-4">
//               <h2 class="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
//                 PRODUCTS
//               </h2>
//               <nav class="list-none mb-10">
//                 <li>
//                   <a class="text-white-600 hover:text-white-800">First Link</a>
//                 </li>
//                 <li>
//                   <a class="text-white-600 hover:text-white-800">Second Link</a>
//                 </li>
//                 <li>
//                   <a class="text-white-600 hover:text-white-800">Third Link</a>
//                 </li>
//                 <li>
//                   <a class="text-white-600 hover:text-white-800">Fourth Link</a>
//                 </li>
//               </nav>
//             </div>
//             <div class="lg:w-1/3 md:w-1/2 w-full px-4">
//               <h2 class="title-font font-medium text-white-900 tracking-widest text-sm mb-3 text-center">
//                 CONTACT
//               </h2>
//               <nav class="list-none mb-10">
//                 <li className="text-center pb-3">
//                   <a class="text-white-600 hover:text-white-800">
//                     Classic Textiles Address: 603-604
//                     Gul Tower
//                     I.I. Chundrigar Road
//                     Karachi-74000
//                     Pakistan
//                   </a>
//                 </li>
//                 <li className="text-center pb-3">
//                   <a class="text-white-600 hover:text-white-800">
//                   info@classictextile.com
//                   </a>
//                 </li>
//                 <li className="text-center pb-3">
//                   <a class="text-white-600 hover:text-white-800">
//                     (92-21) 32442392-93
//                   </a>
//                 </li>
//                 <li>
//                   {/* <a class="text-white-600 hover:text-white-800">Fourth Link</a> */}
//                 </li>
//               </nav>
//             </div>
//           </div>
//         </div>
//         <div class="bg-yellow-200" style={{ background: "#9EC8B9" }}>
//           <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
//             <p class="text-white-500 text-sm text-center sm:text-left">
//               © 2023 TecStik —
//               <a
//                 href="https://twitter.com/"
//                 rel="noopener noreferrer"
//                 class="text-white-600 ml-1"
//                 target="_blank"
//               >
//                 @twitter
//               </a>
//             </p>
//             <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
//               <a class="text-white-500">
//                 <svg
//                   fill="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   class="w-5 h-5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                 </svg>
//               </a>
//               <a class="ml-3 text-white-500">
//                 <svg
//                   fill="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   class="w-5 h-5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                 </svg>
//               </a>
//               <a class="ml-3 text-white-500">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   class="w-5 h-5"
//                   viewBox="0 0 24 24"
//                 >
//                   <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//                   <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//                 </svg>
//               </a>
//               <a class="ml-3 text-white-500">
//                 <svg
//                   fill="currentColor"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="0"
//                   class="w-5 h-5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     stroke="none"
//                     d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
//                   ></path>
//                   <circle cx="4" cy="4" r="2" stroke="none"></circle>
//                 </svg>
//               </a>
//             </span>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }
