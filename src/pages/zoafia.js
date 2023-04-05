import React from "react"
import { Link } from "gatsby";
import CaseStudy from "../components/case-study";
import ThemeToggler from "gatsby-plugin-dark-mode/ThemeToggler";
import roavaReceipt from "../images/roava/roava-receipt.png";
import roavaPayment from "../images/roava/roava-payment.png";
import roavaSavings from "../images/roava/roava-savings.png";
import roavaBrandCollage from "../images/roava/roava-brand-collage.png";
import roavaBrandIcons from "../images/roava/roava-brand-icons.png";
import roavaStyle from "../images/roava/roava-style.png";
import roavaWireframes from "../images/roava/roava-wireframes.png";
import roavaIa from "../images/roava/roava-ia.png";
import roavaPersona from "../images/roava/roava-persona.png";
import roavaBanner from "../images/roava/roava-banner.png";
import roavaScreens from "../images/roava/roava-screens.png";

const Zoafia = () => {

  return (
    <CaseStudy>
      <main className="w-full">
        <section className="backdrop-blur sticky z-10 top-0 border-b border-[#cccccc] dark:border-[#444444]">
          <nav className="flex items-center justify-between">
            <Link to="/" className="p-4 font-semibold md:h-[80px] r-[1px] h-[80px] w-[120px] md:w-[181px] text-center flex flex-col justify-center hover:bg-pink-50 dark:hover:bg-gray-800 border-r border-[#cccccc] dark:border-[#444444]">Portfolio</Link>

            <div className="px-2 bg-black dark:bg-white rounded-full">
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <label className="relative cursor-pointer block p-3 ">
                  <input
                  className="opacity-0 absolute"
                    type="checkbox"
                    onChange={e => toggleTheme(e.target.checked ? 'light' : 'dark')}
                    checked={theme === 'light'}
                  />{' '}
                  <span className="block">
                    {
                      (theme === 'light') ? 
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2569_1744)">
                          <path
                            d="M8.20154 20C7.01999 20 5.84282 19.7414 4.74009 19.2272C2.7545 18.3013 1.24834 16.6576 0.499013 14.5988C-0.250316 12.5401 -0.1531 10.3128 0.772849 8.32719C1.69876 6.34159 3.34248 4.83539 5.40119 4.0861C7.03542 3.49133 8.78093 3.42837 10.4491 3.90394C10.6301 3.95553 10.7564 4.11887 10.7608 4.30702C10.7652 4.49516 10.6467 4.66424 10.4684 4.72431C10.4228 4.73966 10.3773 4.75548 10.3318 4.77204C7.28981 5.8793 5.71565 9.25505 6.82291 12.2972C7.35925 13.7708 8.43741 14.9474 9.85873 15.6102C11.28 16.273 12.8744 16.3426 14.348 15.8062C14.348 15.8062 14.3481 15.8062 14.3481 15.8062C14.3935 15.7897 14.4385 15.7726 14.4833 15.755C14.6585 15.6864 14.858 15.7398 14.9755 15.8868C15.0931 16.0337 15.1013 16.24 14.9958 16.3959C14.0235 17.8326 12.6459 18.9063 11.0118 19.5011C10.0964 19.8342 9.14752 20 8.20154 20ZM8.20443 4.44786C7.35656 4.44786 6.5104 4.59675 5.6951 4.89351C3.85203 5.56434 2.38052 6.91274 1.55159 8.69031C0.722699 10.4679 0.635638 12.4619 1.3065 14.3049C1.97732 16.148 3.32568 17.6195 5.10326 18.4484C6.88087 19.2773 8.87482 19.3644 10.7179 18.6935C11.7658 18.3121 12.6959 17.7107 13.4591 16.9276C12.1226 17.1559 10.7504 16.974 9.49557 16.3889C7.86622 15.6291 6.63035 14.2803 6.01542 12.591C4.88824 9.49397 6.18505 6.09549 8.93192 4.48442C8.6898 4.46009 8.44698 4.44786 8.20443 4.44786Z"
                            fill="white"
                          />
                          <path
                            d="M14.6822 6.60558C14.5931 6.60558 14.5045 6.57793 14.4296 6.52352C14.2973 6.4274 14.2311 6.26449 14.2587 6.10333L14.5771 4.2469L13.2284 2.93217C13.1113 2.818 13.0691 2.64728 13.1197 2.49175C13.1702 2.33622 13.3047 2.22287 13.4665 2.19936L15.3304 1.92853L16.164 0.239504C16.2364 0.092841 16.3858 0 16.5493 0C16.7128 0 16.8622 0.092841 16.9346 0.239504L17.7681 1.92853L19.6321 2.19936C19.794 2.22287 19.9284 2.33622 19.9789 2.49175C20.0295 2.64728 19.9873 2.81804 19.8702 2.93217L18.5215 4.2469L18.8398 6.10333C18.8675 6.26453 18.8012 6.4274 18.6689 6.52356C18.5365 6.61968 18.3612 6.63233 18.2164 6.55625L16.5493 5.67979L14.8821 6.55625C14.8192 6.58925 14.7506 6.60558 14.6822 6.60558ZM16.5492 4.76469C16.6179 4.76469 16.6866 4.78114 16.7492 4.81406L17.8457 5.39056L17.6363 4.16953C17.6124 4.03017 17.6586 3.88796 17.7599 3.78926L18.647 2.92451L17.421 2.74637C17.2811 2.72602 17.1601 2.63814 17.0975 2.51132L16.5492 1.40043L16.001 2.51136C15.9384 2.63818 15.8174 2.72606 15.6775 2.74641L14.4516 2.92455L15.3386 3.7893C15.4399 3.888 15.4861 4.03021 15.4622 4.16957L15.2528 5.3906L16.3493 4.81414C16.4119 4.78118 16.4806 4.76469 16.5492 4.76469Z"
                            fill="#A99AFF"
                          />
                          <path
                            d="M10.5144 13.0626C10.4254 13.0626 10.3367 13.035 10.2619 12.9806C10.1296 12.8844 10.0633 12.7215 10.0909 12.5603L10.334 11.1435L9.30459 10.14C9.18745 10.0259 9.14531 9.85514 9.19585 9.69961C9.24639 9.54408 9.38083 9.43074 9.54268 9.40722L10.9653 9.20049L11.6016 7.91138C11.674 7.76472 11.8233 7.67188 11.9868 7.67188C12.1504 7.67188 12.2997 7.76472 12.3721 7.91138L13.0083 9.20049L14.431 9.40722C14.5928 9.43074 14.7273 9.54408 14.7778 9.69965C14.8283 9.85518 14.7862 10.0259 14.6691 10.1401L13.6396 11.1435L13.8827 12.5604C13.9104 12.7216 13.8441 12.8845 13.7118 12.9806C13.5795 13.0767 13.4041 13.0894 13.2593 13.0133L11.9869 12.3444L10.7144 13.0133C10.6515 13.0463 10.5828 13.0626 10.5144 13.0626ZM10.5277 10.1324L11.0955 10.6858C11.1968 10.7845 11.243 10.9267 11.2191 11.0661L11.085 11.8476L11.7868 11.4786C11.912 11.4128 12.0615 11.4128 12.1867 11.4786L12.8886 11.8476L12.7545 11.0661C12.7306 10.9267 12.7768 10.7845 12.878 10.6858L13.4458 10.1323L12.6612 10.0183C12.5212 9.99798 12.4003 9.9101 12.3377 9.78328L11.9868 9.07222L11.6359 9.78328C11.5733 9.9101 11.4524 9.99798 11.3124 10.0183L10.5277 10.1324Z"
                            fill="#A99AFF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2569_1744">
                            <rect width={20} height={20} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>:
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2570_1749)">
                          <path
                            d="M3.23239 17.197C3.12243 17.197 3.01247 17.1551 2.92856 17.0712C2.76079 16.9034 2.76079 16.6313 2.92856 16.4635L5.46626 13.9258L6.07395 14.5335L3.53622 17.0712C3.45231 17.1551 3.34235 17.197 3.23239 17.197Z"
                            fill="#414141"
                          />
                          <path
                            d="M4.01855 10.4297H0.429688C0.192383 10.4297 0 10.2373 0 10C0 9.7627 0.192383 9.57031 0.429688 9.57031H4.01855V10.4297Z"
                            fill="#414141"
                          />
                          <path
                            d="M5.4663 6.07427L2.92856 3.53653C2.76079 3.36872 2.76079 3.09665 2.92856 2.92884C3.09638 2.76103 3.36841 2.76103 3.53626 2.92884L6.07395 5.46657L5.4663 6.07427Z"
                            fill="#414141"
                          />
                          <path
                            d="M9.5709 4.01855V0.452422C9.57051 0.444883 9.57031 0.437305 9.57031 0.429688C9.57031 0.192383 9.7627 0 10 0C10.0038 0 10.0077 3.90625e-05 10.0116 0.00015625C10.2438 0.00601563 10.4303 0.196094 10.4303 0.429727V4.01859H9.5709V4.01855Z"
                            fill="#414141"
                          />
                          <path
                            d="M13.9258 5.46657L16.4635 2.92884C16.6313 2.76103 16.9034 2.76103 17.0712 2.92884C17.2389 3.09665 17.2389 3.36872 17.0712 3.53653L14.5335 6.07427L13.9258 5.46657Z"
                            fill="#414141"
                          />
                          <path
                            d="M19.5703 10.4297H15.9814V9.57034H19.5638C19.8038 9.56761 20 9.7605 20 9.99995C20 10.2373 19.8076 10.4297 19.5703 10.4297Z"
                            fill="#414141"
                          />
                          <path
                            d="M16.7673 17.197C16.6573 17.197 16.5474 17.1551 16.4635 17.0712L13.9258 14.5335L14.5335 13.9258L17.0712 16.4635C17.2389 16.6313 17.2389 16.9034 17.0712 17.0712C16.9873 17.1551 16.8773 17.197 16.7673 17.197Z"
                            fill="#414141"
                          />
                          <path
                            d="M10.001 20C9.76367 20 9.57129 19.8076 9.57129 19.5703V15.9814H10.4307V19.5703C10.4307 19.8076 10.2383 20 10.001 20Z"
                            fill="#414141"
                          />
                          <path
                            d="M17.3423 12.5765L16.0678 12.0486C16.2853 11.4051 16.4034 10.7161 16.4034 10.0001C16.4034 9.28434 16.2851 8.59578 16.0677 7.9525L17.3426 7.42445C17.5618 7.33363 17.6659 7.0823 17.5751 6.86305C17.4843 6.64383 17.233 6.53965 17.0137 6.63051L15.7385 7.15867C15.1162 5.90547 14.0957 4.88348 12.8436 4.2591L13.3758 2.97437C13.4666 2.75512 13.3625 2.50379 13.1432 2.41297C12.9239 2.32211 12.6726 2.42625 12.5818 2.64551L12.0506 3.92789C11.4043 3.7082 10.712 3.58895 9.99228 3.58895C9.27822 3.58895 8.59115 3.70641 7.94912 3.92281L7.42177 2.64973C7.33099 2.43051 7.07966 2.32633 6.86036 2.41719C6.64111 2.50801 6.53701 2.75934 6.62783 2.97859L7.15529 4.25195C5.89853 4.87477 4.874 5.89762 4.24911 7.15312L2.98681 6.63027C2.76755 6.53941 2.51622 6.64355 2.4254 6.86281C2.33458 7.08207 2.43868 7.3334 2.65794 7.42422L3.91845 7.94633C3.69978 8.59133 3.58115 9.28211 3.58115 10.0001C3.58115 10.7183 3.69986 11.4094 3.91872 12.0546L2.65822 12.5767C2.43896 12.6675 2.33486 12.9189 2.42568 13.1381C2.49419 13.3036 2.65419 13.4035 2.82283 13.4035C2.87759 13.4035 2.93333 13.3929 2.98708 13.3707L4.24947 12.8478C4.87431 14.1027 5.89841 15.1252 7.15462 15.7479L6.62716 17.0212C6.53634 17.2405 6.64044 17.4918 6.8597 17.5827C6.91345 17.6049 6.96915 17.6155 7.02396 17.6155C7.19255 17.6155 7.35259 17.5155 7.42111 17.3501L7.94841 16.0771C8.5906 16.2937 9.27794 16.4112 9.99224 16.4112C10.7122 16.4112 11.4047 16.2919 12.0513 16.0721L12.5797 17.3477C12.6482 17.5132 12.8082 17.6131 12.9769 17.6131C13.0316 17.6131 13.0874 17.6025 13.1411 17.5803C13.3604 17.4895 13.4645 17.2381 13.3736 17.0189L12.8443 15.7408C14.0958 15.1165 15.1157 14.0949 15.7379 12.8421L17.0135 13.3705C17.0672 13.3928 17.1229 13.4033 17.1777 13.4033C17.3463 13.4033 17.5063 13.3034 17.5749 13.138C17.6656 12.9187 17.5615 12.6673 17.3423 12.5765ZM9.99224 15.5518C6.93099 15.5518 4.44048 13.0613 4.44048 10.0001C4.44048 6.93883 6.93099 4.44832 9.99224 4.44832C13.0535 4.44832 15.544 6.93883 15.544 10.0001C15.544 13.0613 13.0535 15.5518 9.99224 15.5518Z"
                            fill="#313131"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2570_1749">
                            <rect width={20} height={20} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                  </span>
                  </label>
                )}
              </ThemeToggler>
            </div>

            <Link to="/" className="p-4 font-semibold md:h-[80px] h-[80px] w-[120px] md:w-[181px] text-center flex flex-col justify-center hover:bg-pink-50 dark:hover:bg-gray-800 border-l border-[#cccccc] dark:border-[#444444]">View</Link>
          </nav>
        </section>

        <section className="max-w-[1080px] mx-auto px-4 py-12">
          <h1 className="cursive text-[32px] md:text-[52px]">ROAVA</h1>
          <div className="md:grid grid-cols-3">
            <div className="pt-8 txt-[14px] col-span-2">
              <div className="md:grid grid-cols-3 py-2">
                <p className="font-semibold">Role</p>
                <p className="col-span-2 italic">Product Designer</p>
              </div>
              <div className="md:grid grid-cols-3 py-2">
                <p className="font-semibold">Details</p>
                <p className="col-span-2 italic">Mobile finance experience for iOS and Android</p>
              </div>
              <div className="md:grid grid-cols-3 py-2">
                <p className="font-semibold">Year</p>
                <p className="col-span-2 italic">2021</p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1080px] mx-auto bg-[#dddddd] dark:bg-[#444444] min-h-[500px]">
          <img src={roavaBanner} alt="" className="h-[500px] md:h-full object-cover" />
        </div>

        <section className="max-w-[1080px] mx-auto border-b md:grid md:grid-cols-5 border-[#cccccc] dark:border-[#444444] px-4 py-16">
          <div className="col-span-2 pt-8">
            <h3 className="cursive text-[16px] md:text-[18px] uppercase font-semibold">1.1 Overview</h3>
          </div>
          <div className="col-span-3 pt-8">
            <p className="pb-6 font-semibold">ROAVA allows its customers to manage their money, exchange international currencies, bills and savings from their phone.</p>
            <p className="pb-6 italic text-gray-700 dark:text-gray-400">I worked as part of a team of engineers, other designers, and other managerial staff. I primarily reported to the Chief Product Officer, and the product managers.</p>
          </div>
        </section>

        <section className="max-w-[1080px] mx-auto border-b md:grid md:grid-cols-5 border-[#cccccc] dark:border-[#444444] px-4 py-16">
          <div className="col-span-2 pt-8">
            <h3 className="cursive text-[16px] md:text-[18px] uppercase font-semibold">1.2 Responsibilities & Business Goals</h3>
          </div>
          <div className="col-span-3 pt-8">
            <p className="pb-6 font-semibold">During my time working on the ROAVA project, my focus was centered around design systems, organisation and planning, and visual designs.</p>
            <p className="pb-6 italic text-gray-700 dark:text-gray-400">Design a mobile experience for customers to send and receive payments in multiple currencies, manage international commitments or support their travelling lifestyle without the restrictions of regular banking. The customers would also get real-time notifications when they spend funds or get paid. Savings vaults, fixed term deposit accounts offering high interest, should also be made available to all users.</p>
          </div>
        </section>

        <section className="max-w-[1080px] mx-auto border-b md:grid md:grid-cols-5 border-[#cccccc] dark:border-[#444444] px-4 py-16">
          <div className="col-span-2 pt-8">
            <h3 className="cursive text-[16px] md:text-[18px] uppercase font-semibold">2.1 User Research</h3>
          </div>
          <div className="col-span-3 pt-8">
            <p className="pb-6 font-semibold">We started with user research and strategy workshops, building a solid understanding of the pain points of frequent travellers to multiple countries,  as well as opportunities, and goals.</p>
            <p className="pb-6 font-semibold italic">Initial Findings</p>
            <p className="pb-6 italic text-gray-700 dark:text-gray-400">With multiple currency accounts and different products all in one platform, the process of navigating multiple user journeys and flows made the application design complex and bloated from the very start. .</p>
            <p className="pb-6 italic text-gray-700 dark:text-gray-400">— Participants had difficulty interpreting the flow of information from one end of the application to the next.</p>
            <p className="pb-6 italic text-gray-700 dark:text-gray-400">
              — User Journeys without a clear direction presented a challange for users to move from screen to screen.</p>
            <p className="pb-6 italic text-gray-700 dark:text-gray-400">
              — Failure to properly manage excpectation of users lead to dissatisfaction and confusion and user’ interaction on the app.</p>
          </div>
        </section>

        <div className="max-w-[1080px] mx-auto my-4 max-h-[600px]">
          <img src={roavaPersona} alt="" className="w-full h-full object-cover" />
        </div>

        <section className="max-w-[1080px] mx-auto border-b md:grid md:grid-cols-5 border-[#cccccc] dark:border-[#444444] px-4 py-16">
          <div className="col-span-2 pt-8">
            <h3 className="cursive text-[16px] md:text-[18px] uppercase font-semibold">3.1 Product Direction</h3>
          </div>
          <div className="col-span-3 pt-8">
            <p className="pb-6 font-semibold">Simplifying the ease of creating an account despite the financial regulatory requirements for the app was a vital part of the user's onboarding, without which, access to the core application features would not be granted.</p>
            <p className="pb-6 italic text-gray-700 dark:text-gray-400">With multiple currency accounts and different products all in one platform, the process of navigating multiple user journeys and flows made the application design complex and bloated from the very start. .</p>
          </div>
        </section>

        <section className="max-w-[1080px] mx-auto border-b md:grid md:grid-cols-5 border-[#cccccc] dark:border-[#444444] px-4 py-16">
          <div className="col-span-2 pt-8">
            <h3 className="cursive text-[16px] md:text-[18px] uppercase font-semibold">4.1 IA & User Flows</h3>
          </div>
          <div className="col-span-3 pt-8">
            <p className="pb-6 font-semibold">We aimed for security and ease of onboarding new users. The complexity of identity verification before gaining access to the core features of the app cannot be simply overlooked for a financial application.</p>
            <p className="pb-6 italic text-gray-700 dark:text-gray-400">The app should take new sign ups through a clearly detailed walkthrough of what to expect during the verification process.</p>
          </div>
        </section>
        <div className="max-w-[1080px] mx-auto my-4 max-h-[600px]">
          <img src={roavaIa} alt="" className="w-full h-full object-cover" />
        </div>
        <section className="max-w-[1080px] mx-auto border-b md:grid md:grid-cols-5 border-[#cccccc] dark:border-[#444444] px-4 py-16">
          <div className="col-span-2 pt-8">
            <h3 className="cursive text-[16px] md:text-[18px] uppercase font-semibold">5.1 Branding, Style, and Design System</h3>
          </div>
          <div className="col-span-3 pt-8">
            <p className="pb-6 font-semibold">Our goal was to use a brand style that enhanced the reliability of the Roava application for users in different corners of the world.</p>
          </div>
        </section>
        <div className="bg-[#dddddd] dark:bg-[#444444] max-w-[1080px] mx-auto my-4 max-h-[600px]">
        <img src={roavaBrandIcons} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="bg-[#dddddd] dark:bg-[#444444] max-w-[1080px] mx-auto my-4 max-h-[600px]">
          <img src={roavaBrandCollage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="bg-[#dddddd] dark:bg-[#444444] max-w-[1080px] mx-auto my-4 max-h-[600px]">
          <img src={roavaStyle} alt="" className="w-full h-full object-cover" />
        </div>
        <section className="max-w-[1080px] mx-auto border-b md:grid md:grid-cols-5 border-[#cccccc] dark:border-[#444444] px-4 py-16">
          <div className="col-span-2 pt-8">
            <h3 className="cursive text-[16px] md:text-[18px] uppercase font-semibold">6.1 Wireframing and Feedback</h3>
          </div>
          <div className="col-span-3 pt-8">
            <p className="pb-6 font-semibold">Making the entire application the least complicated it could meant breaking all the journeys into smaller, independent, and self-contained bits. Noting all drop-off points was important for </p>
            <p className="pb-6 italic text-gray-700 dark:text-gray-400">Noting all drop-off points during the use of the mobile app was important for subsequent changes to the design.</p>
          </div>
        </section>
        <div className="bg-[#dddddd] dark:bg-[#444444] max-w-[1080px] mx-auto my-4 max-h-[600px]">
          <img src={roavaWireframes} alt="" className="w-full h-full object-cover" />
        </div>
        <section className="max-w-[1080px] mx-auto md:grid md:grid-cols-5 px-4 py-16">
          <div className="col-span-2 pt-8">
            <h3 className="cursive text-[16px] md:text-[18px] uppercase font-semibold">7.1 User Interface & Prototype</h3>
          </div>
          <div className="col-span-3 pt-8">
            <p className="pb-6 font-semibold">Communication, testing, and feedback with management resulted in a reduction in the number of user journeys and features that were given different priorities.</p>
            <p className="pb-6 italic text-gray-700 dark:text-gray-400">A design system was created to facilitate quick changes to the designs as new observations were made and business-critical changes could be quickly adapted.</p>
          </div>
        </section>
        <div className="max-w-[1080px] mx-auto my-4 px-4 min-h-[200px] grid grid-cols-3 gap-4 md:gap-12 lg:gap-32 mb-24 lg:mb-32">
          <div>
            <img src={roavaSavings} alt="" className="w-full" />
          </div>
          <div>
            <img src={roavaReceipt} alt="" className="w-full" />
          </div>
          <div>
            <img src={roavaPayment} alt="" className="w-full" />
          </div>
        </div>
        <div className="max-w-[1080px] mx-auto my-4">
          <img src={roavaScreens} alt="" className="w-full h-full object-cover" />
        </div>
        <section className="max-w-[1080px] mx-auto border-b md:grid md:grid-cols-5 border-[#cccccc] dark:border-[#444444] px-4 py-16">
          <div className="col-span-2 pt-8">
            <h3 className="cursive text-[16px] md:text-[18px] uppercase font-semibold">8.1 Conclusion</h3>
          </div>
          <div className="col-span-3 pt-8">
            <p className="pb-6 font-semibold">Validated all design assumptions and compare them with the expectations from the stakeholders.</p>
            <p className="pb-6 italic text-gray-700 dark:text-gray-400">To get an accurate evaluation of what the stakeholder thought, I invited the business managing director representing the stakeholders for usability testing. I also invited and got feedback  from end-users to validate the design decisions we implemented in our prototypes.</p>
          </div>
        </section>

        <section className="max-w-[1080px] mx-auto border-b md:grid md:grid-cols-5 border-[#cccccc] dark:border-[#444444] px-4 py-16">
          <div className="col-span-2 pt-8">
            <h3 className="cursive text-[16px] md:text-[18px] uppercase font-semibold">8.2 Credits</h3>
          </div>
          <div className="col-span-3 pt-8">
            <div className="md:grid grid-cols-3 py-2">
              <p className="font-semibold">Dennis Tamunotonye Dickson</p>
              <p className="col-span-2 italic"> Content Strategy, UX, UI,</p>
            </div>
            <div className="md:grid grid-cols-3 py-2">
              <p className="font-semibold">Iyke Owoh</p>
              <p className="col-span-2 italic">Development</p>
            </div>
          </div>
        </section>
        <section className="p-4">
          <Link to="/roava" className="max-w-[1080px] block mx-auto border md:grid md:grid-cols-5 hover:bg-[#dddddd] dark:hover:bg-[#212121] bg-transparent rounded-xl border-[#cccccc] dark:border-[#444444] px-4 mb-16 py-4 md:py-8">
            <div className="col-span-2 pt-4">
              <h3 className="cursive text-[16px] md:text-[18px] uppercase font-semibold">Next Project:</h3>
            </div>
            <div className="col-span-3 py-4 flex justify-between items-center">
              <p className="font-semibold text-[16px] md:text-[18px]">Roava.</p>
              <span>
                <svg
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                  className="dark:fill-white fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2951_138)">
                    <path
                      d="M24.5441 11.1674L17.0516 5.20434C16.2772 4.60416 15.1156 5.14625 15.1156 6.13364V8.12777C15.1156 8.76666 14.6896 9.32811 14.0507 9.32811H2.14405C1.50515 9.32811 0.982422 9.79277 0.982422 10.451V13.5874C0.982422 14.207 1.50515 14.749 2.14405 14.749H14.0507C14.6896 14.749 15.1156 15.2526 15.1156 15.8913V17.8854C15.1156 18.8535 16.2772 19.3956 17.0322 18.7954L24.5054 12.9872C25.1249 12.542 25.1443 11.632 24.5441 11.1674Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2951_138">
                      <rect
                        width={24}
                        height={24}
                        fill="white"
                        transform="translate(0.982422)"
                      />
                    </clipPath>
                  </defs>
                </svg>

              </span>
            </div>
          </Link>
        </section>
      </main>
    </CaseStudy>
  )
}

export default Zoafia
