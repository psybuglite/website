import React from "react";
import { Link } from "gatsby";

const d = new Date();
let year = d.getFullYear();

const Footer = () => (
  <footer className="w-full px-4">
    <div className="flex pt-16 justify-center">
      <Link to="/">
        <span className="logo">
          <svg
              width={40}
              height={95}
              viewBox="0 0 40 95"
              fill="none"
              className="dark:fill-white fill-black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.5553 0.760654C21.4018 0.37215 19.1986 0.339595 17.0368 0.662991V43.8158H15.5553V0.942056C13.2266 1.47234 10.9718 2.42491 8.90877 3.79977C3.3432 7.50881 0 13.7544 0 20.4426V74.3661C0 81.0544 3.3432 87.2999 8.90877 91.009C15.6255 95.4852 24.3745 95.4852 31.0912 91.009C36.6568 87.2999 40 81.0544 40 74.3661L40 20.4426C40 13.7544 36.6568 7.50882 31.0912 3.79977C29.2035 2.54176 27.1553 1.6373 25.0368 1.0864V43.7996H23.5553V0.760654ZM10.5745 70.3153V60.4477C12.1249 60.2356 14.0684 60.2437 15.6817 60.7962C16.6292 61.1207 17.4126 61.6151 17.9599 62.3133C18.4989 63.0008 18.8739 63.9674 18.8739 65.3623C18.8739 67.1709 19.3706 68.6251 20.2479 69.7441C21.1169 70.8524 22.2947 71.5502 23.5262 71.972C25.9554 72.8039 28.7841 72.6303 30.6339 72.244L31.4932 72.0646V71.1869V59.5378V58.6546L30.6275 58.4793C29.3098 58.2124 27.4135 58.1179 25.6537 58.3272C24.7701 58.4323 23.8813 58.6185 23.0976 58.9208C22.3263 59.2183 21.5658 59.6633 21.0528 60.3434L22.7772 61.6442C22.9522 61.4122 23.2984 61.1584 23.8749 60.9361C24.4392 60.7184 25.1395 60.5636 25.9088 60.4721C27.0849 60.3322 28.3297 60.3506 29.3332 60.4636V70.277C27.7828 70.4891 25.8393 70.481 24.226 69.9285C23.2785 69.604 22.4951 69.1095 21.9478 68.4114C21.4088 67.7239 21.0339 66.7572 21.0339 65.3623C21.0339 63.5537 20.5372 62.0996 19.6598 60.9806C18.7908 59.8722 17.613 59.1744 16.3815 58.7527C13.9523 57.9207 11.1236 58.0943 9.27376 58.4806L8.41453 58.66V59.5378V71.1869V72.0321L9.23506 72.2352C14.2746 73.4825 17.6224 71.7597 18.7963 70.4523L17.1891 69.0092C16.6565 69.6024 14.4404 71.022 10.5745 70.3153Z"
              />
            </svg>
        </span>
      </Link>
    </div>
    <div className="max-w-[1392px] mx-auto flex justify-center py-4">
      <div className="flex flex-col justify-center dark:text-[#eee]">
        <p className="py-2 text-center max-w-lg mx-auto">Thank you for your interest in my portfolio. If you would like to discuss more, share feedback, or ask any questions, I’m just one click away!</p>
        <p className="py-2 text-center"></p>
        <a
          href="mailto:dennistdickson@gmail.com"
          className="flex email mx-auto underline"
        >
          <span className="mr-2">
            <svg
              width={26}
              height={24}
              viewBox="0 0 26 24"
              fill="none"
              className="dark:stroke-white stroke-[#212121]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.28314 4H21.4154C22.5933 4 23.557 4.9 23.557 6V18C23.557 19.1 22.5933 20 21.4154 20H4.28314C3.10529 20 2.1416 19.1 2.1416 18V6C2.1416 4.9 3.10529 4 4.28314 4Z"
                
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.557 6L12.8493 13L2.1416 6"
                
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </span>
          dennistdickson@gmail.com
        </a>
      </div>
    </div>
    <div className="flex justify-center py-8">
    <span className="mx-8 relative">
      <a target="_blank" rel="noreferrer" href="https://dribbble.com/psybuglite">
        <svg
          width={43}
          height={40}
          viewBox="0 0 43 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.5703 21.4473C28.2506 25.4177 29.4987 29.5053 30.3094 33.6813C31.4663 33.0225 32.5473 32.2313 33.5303 31.3137C36.0826 28.9297 37.7299 25.9257 38.3119 22.6657C35.8046 21.6969 33.0583 21.1609 30.1801 21.1609C28.9496 21.1609 27.7439 21.2597 26.5703 21.4473Z"
            fill="#EA4C89"
          />
          <path
            d="M33.5439 8.7C33.5388 8.6956 33.5341 8.6908 33.5294 8.6864C30.2935 5.6644 25.9911 4 21.4151 4C19.6256 4 17.8781 4.2556 16.2197 4.7464C18.8774 7.8564 21.2155 11.1752 23.2196 14.6828C26.9947 13.1856 30.4717 11.1576 33.5439 8.7Z"
            fill="#EA4C89"
          />
          <path
            d="M34.8903 10.1165C31.6677 12.7017 28.066 14.7965 24.1475 16.3625C24.7252 17.4485 25.2709 18.5521 25.7857 19.6721C27.224 19.4165 28.6909 19.2861 30.1797 19.2861C33.0635 19.2861 35.8681 19.7705 38.5296 20.7237C38.5412 20.4833 38.5476 20.2421 38.5476 20.0005C38.5476 16.3693 37.261 12.9241 34.8903 10.1165Z"
            fill="#EA4C89"
          />
          <path
            d="M10.8701 32.6124C13.8696 34.8088 17.5444 36 21.4155 36C23.8761 36 26.2571 35.518 28.4359 34.6036C27.6191 30.184 26.3115 25.92 24.567 21.8616C18.5038 23.4068 13.5085 27.392 10.8701 32.6124Z"
            fill="#EA4C89"
          />
          <path
            d="M21.0917 20.9996C21.9727 20.6516 22.8713 20.3564 23.7836 20.114C23.3022 19.0844 22.7912 18.0692 22.2537 17.0684C17.6254 18.6732 12.7586 19.4868 7.75892 19.4868C6.59735 19.4868 5.44349 19.442 4.29819 19.3548C4.28877 19.5688 4.2832 19.784 4.2832 20.0004C4.2832 24.274 6.06539 28.292 9.30126 31.314C9.30211 31.3148 9.3034 31.316 9.30468 31.3168C10.4239 29.2324 11.8874 27.3376 13.6709 25.672C15.8145 23.67 18.3111 22.098 21.0917 20.9996Z"
            fill="#EA4C89"
          />
          <path
            d="M21.3141 15.3841C19.2809 11.8677 16.9025 8.55006 14.2217 5.47046C12.4151 6.25206 10.7507 7.33246 9.30092 8.68646C6.7088 11.1073 5.05039 14.1677 4.49316 17.4865C5.57036 17.5689 6.65912 17.6117 7.75901 17.6117C12.5171 17.6113 17.0828 16.8249 21.3141 15.3841Z"
            fill="#EA4C89"
          />
        </svg>
      </a>
      <span className="absolute top-0 -right-4 link-arrow">
        <svg
          width={18}
          height={16}
          viewBox="0 0 18 16"
          fill="none"
          className="dark:stroke-white stroke-[#212121]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.40918 11.3334L12.5476 4.66675"
            strokeWidth="0.666667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.40918 4.66675H12.5476V11.3334"
            strokeWidth="0.666667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
    <span className="mx-8 relative">
      <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/psybug">
        <svg
          width={44}
          height={40}
          viewBox="0 0 44 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.1216 36.0001V35.9989H39.1301V24.2629C39.1301 18.5217 37.8067 14.0989 30.6197 14.0989C27.1645 14.0989 24.8461 15.8697 23.8995 17.5481H23.7997V14.6349H16.9854V35.9989H24.0811V25.4201C24.0811 22.6349 24.6465 19.9413 28.3398 19.9413C31.9791 19.9413 32.0331 23.1201 32.0331 25.5985V36.0001H39.1216Z"
            fill="#0073B1"
          />
          <path d="M5.43066 14.636H12.535V36H5.43066V14.636Z" fill="#0073B1" />
          <path
            d="M8.97999 4C6.70824 4 4.86523 5.7212 4.86523 7.8428C4.86523 9.9644 6.70824 11.7216 8.97999 11.7216C11.2517 11.7216 13.0947 9.9644 13.0947 7.8428C13.093 5.7212 11.25 4 8.97999 4Z"
            fill="#0073B1"
          />
        </svg>
      </a>
      <span className="absolute top-0 -right-4 link-arrow">
        <svg
          width={18}
          height={16}
          viewBox="0 0 18 16"
          fill="none"
          className="dark:stroke-white stroke-[#212121]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.40918 11.3334L12.5476 4.66675"
            strokeWidth="0.666667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.40918 4.66675H12.5476V11.3334"
            strokeWidth="0.666667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
    </div>
    <div className="max-w-[1392px] text-[12px] mx-auto dark:text-[#eee] md:flex justify-between items-center py-4">
      <div className="flex items-center">
        <p>This site is built with</p>
        <div className="mx-1 flex items-center">
          <span className="mr-1">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={16} height={16} rx={8} fill="#E4E4E4" />
              <path
                d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM3.54286 12.4571C2.34286 11.2571 1.71429 9.65714 1.71429 8.11429L7.94286 14.2857C6.34286 14.2286 4.74286 13.6571 3.54286 12.4571ZM9.37143 14.1143L1.88571 6.62857C2.51429 3.82857 5.02857 1.71429 8 1.71429C10.1143 1.71429 11.9429 2.74286 13.0857 4.28571L12.2286 5.02857C11.2571 3.71429 9.71429 2.85714 8 2.85714C5.77143 2.85714 3.88571 4.28571 3.14286 6.28571L9.71429 12.8571C11.3714 12.2857 12.6286 10.8571 13.0286 9.14286H10.2857V8H14.2857C14.2857 10.9714 12.1714 13.4857 9.37143 14.1143Z"
                fill="#663399"
              />
            </svg>
          </span>
          <span className="svg">
            <svg
              width={39}
              height={13}
              viewBox="0 0 39 13"
              fill="none"
              className="dark:fill-white fill-black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5738 4.42854H16.1552V9.78568H14.5738V9.08925C14.009 9.89282 13.2747 9.94639 12.8229 9.94639C11.072 9.94639 9.94238 8.66068 9.94238 7.10711C9.94238 5.49997 11.072 4.26782 12.7099 4.26782C13.1617 4.26782 14.009 4.32139 14.5173 5.12497V4.42854H14.5738ZM11.6368 7.10711C11.6368 7.96425 12.2581 8.60711 13.2182 8.60711C14.1219 8.60711 14.7997 7.96425 14.7997 7.10711C14.7997 6.24997 14.1784 5.60711 13.2182 5.60711C12.3145 5.60711 11.6368 6.24997 11.6368 7.10711Z"
                
              />
              <path
                d="M19.2613 5.71408V9.7855H17.6799V5.71408H17.0586V4.42836H17.6799V2.60693H19.2613V4.42836H20.3344V5.71408H19.2613Z"
                
              />
              <path
                d="M24.0625 5.71425C23.6671 5.39282 23.3282 5.33925 23.1588 5.33925C22.7634 5.33925 22.5375 5.49997 22.5375 5.76782C22.5375 5.92854 22.594 6.08925 23.0458 6.24997L23.4412 6.35711C23.893 6.51782 24.5708 6.67854 24.8532 7.10711C25.0226 7.32139 25.1356 7.64282 25.1356 8.01782C25.1356 8.49997 24.9662 8.98211 24.5143 9.35711C24.0625 9.73211 23.4977 9.94639 22.8199 9.94639C21.6338 9.94639 21.0125 9.41068 20.6172 9.03568L21.4644 8.12497C21.8033 8.44639 22.2551 8.76782 22.707 8.76782C23.1588 8.76782 23.4977 8.55354 23.4977 8.17854C23.4977 7.85711 23.2153 7.69639 22.9894 7.64282L22.6505 7.53568C22.2551 7.37497 21.8033 7.21425 21.4644 6.89282C21.182 6.62497 21.0126 6.30354 21.0126 5.87497C21.0126 5.33925 21.295 4.91068 21.5774 4.64282C22.0292 4.32139 22.594 4.26782 23.0458 4.26782C23.4412 4.26782 24.119 4.32139 24.8532 4.85711L24.0625 5.71425Z"
                
              />
              <path
                d="M27.5072 5.12493C28.072 4.37493 28.8627 4.26779 29.3146 4.26779C30.9525 4.26779 32.0821 5.49993 32.0821 7.10707C32.0821 8.71422 30.9525 9.94636 29.2581 9.94636C28.9192 9.94636 28.072 9.89279 27.4507 9.08922V9.78564H25.9258V0.785645H27.5072V5.12493ZM27.3378 7.10707C27.3378 7.96422 27.9591 8.60707 28.9192 8.60707C29.8229 8.60707 30.5007 7.96422 30.5007 7.10707C30.5007 6.24993 29.8794 5.60707 28.9192 5.60707C27.9591 5.60707 27.3378 6.24993 27.3378 7.10707Z"
                
              />
              <path
                d="M34.6798 8.98204L31.9688 4.42847H33.8326L35.5835 7.48204L37.1649 4.42847H38.9723L34.4539 12.6249H32.6465L34.6798 8.98204Z"
                
              />
              <path
                d="M9.54659 5.33929H7.96514H5.59298V6.83929H7.68274C7.34386 7.85714 6.55314 8.55357 5.08466 8.55357C3.44673 8.55357 2.26065 7.26786 2.26065 5.71429C2.26065 4.16071 3.39025 2.82143 5.02818 2.82143C5.93186 2.82143 6.83554 3.25 7.40034 3.94643L8.69938 3.14286C7.85218 2.01786 6.49666 1.375 5.02818 1.375C2.54305 1.375 0.509766 3.30357 0.509766 5.71429C0.509766 8.125 2.43009 10.0536 5.02818 10.0536C7.62626 10.0536 9.54659 8.125 9.54659 5.71429C9.60307 5.55357 9.54659 5.44643 9.54659 5.33929Z"
                
              />
            </svg>
          </span>
        </div>
        <p>and hosted on</p>
        <div className="ml-1 flex items-center">
          <svg
            width={64}
            height={26}
            viewBox="0 0 64 26"
            fill="none"
            className="dark:fill-white fill-[#014847]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2947_150)">
              <path
                d="M14.4795 25.6943V19.1694L14.6147 19.0342H16.246L16.3812 19.1694V25.6943L16.246 25.8295H14.6147L14.4795 25.6943Z"
                fill="#05BDBA"
              />
              <path
                d="M14.4795 6.66023V0.135233L14.6147 0H16.246L16.3812 0.135233V6.66023L16.246 6.79546H14.6147L14.4795 6.66023Z"
                fill="#05BDBA"
              />
              <path
                d="M8.86551 21.1068H8.64154L7.51953 19.9848V19.7608L9.62197 17.6562L10.8095 17.6584L10.968 17.8147V19.0023L8.86551 21.1068Z"
                fill="#05BDBA"
              />
              <path
                d="M7.51953 6.12775V5.90164L8.64154 4.78174H8.86551L10.968 6.8842V8.0696L10.8095 8.23018H9.62197L7.51953 6.12775Z"
                fill="#05BDBA"
              />
              <path
                d="M0.135233 11.9619H9.37968L9.51491 12.0971V13.7305L9.37968 13.8657H0.135233L0 13.7305V12.0971L0.135233 11.9619Z"
                fill="#05BDBA"
              />
              <path
                d="M54.5539 11.9636H63.253L63.3882 12.0989V13.7301L63.253 13.8653H53.8735L53.7383 13.7301L54.4165 12.0989L54.5517 11.9636H54.5539Z"
                fill="#05BDBA"
              />
              <path
                d="M18.4887 16.3149H16.8575L16.7223 16.1797V12.3615C16.7223 11.6811 16.456 11.1549 15.6362 11.138C15.2136 11.1275 14.7318 11.138 14.2162 11.1591L14.138 11.2373V12.7798V16.1776L14.0028 16.3128H12.3716L12.2363 16.1776V9.65258L12.3716 9.51733H16.0419C17.4681 9.51733 18.624 10.6732 18.624 12.0995V16.1776L18.4887 16.3128V16.3149Z"
                
              />
              <path
                d="M26.3896 13.4581L26.2544 13.5933H22.0368L21.9015 13.7286C21.9015 14.0011 22.1741 14.8167 23.2623 14.8167C23.6701 14.8167 24.0779 14.6815 24.2153 14.4089L24.3505 14.2737H25.9818L26.117 14.4089C25.9818 15.2246 25.3013 16.4501 23.2602 16.4501C20.9486 16.4501 19.8604 14.8189 19.8604 12.9129C19.8604 11.007 20.9486 9.37573 23.125 9.37573C25.3013 9.37573 26.3896 11.007 26.3896 12.9129V13.456V13.4581ZM24.3484 12.0973C24.3484 11.9621 24.2132 11.0091 23.125 11.0091C22.0368 11.0091 21.9015 11.9621 21.9015 12.0973L22.0368 12.2325H24.2132L24.3484 12.0973Z"
                
              />
              <path
                d="M30.1975 14.2738C30.1975 14.5464 30.3327 14.6816 30.6053 14.6816H31.8288L31.964 14.8169V16.1776L31.8288 16.3129H30.6053C29.3818 16.3129 28.2936 15.7677 28.2936 14.2717V11.2797L28.1583 11.1444H27.2055L27.0703 11.0092V9.64842L27.2055 9.5132H28.1583L28.2936 9.37795V8.15451L28.4288 8.01929H30.0601L30.1953 8.15451V9.37795L30.3305 9.5132H31.8266L31.9618 9.64842V11.0092L31.8266 11.1444H30.3305L30.1953 11.2797V14.2717L30.1975 14.2738Z"
                
              />
              <path
                d="M35.2294 16.3145H33.5981L33.4629 16.1792V6.92844L33.5981 6.79321H35.2294L35.3646 6.92844V16.1771L35.2294 16.3123V16.3145Z"
                
              />
              <path
                d="M38.9032 8.42445H37.2719L37.1367 8.28923V6.92844L37.2719 6.79321H38.9032L39.0384 6.92844V8.28923L38.9032 8.42445ZM38.9032 16.3145H37.2719L37.1367 16.1792V9.64999L37.2719 9.51477H38.9032L39.0384 9.64999V16.1792L38.9032 16.3145Z"
                
              />
              <path
                d="M45.296 6.92861V8.2894L45.1608 8.42463H43.9373C43.6647 8.42463 43.5295 8.55985 43.5295 8.83243V9.37759L43.6647 9.51284H45.0256L45.1608 9.64807V11.0089L45.0256 11.1441H43.6647L43.5295 11.2793V16.1752L43.3943 16.3104H41.763L41.6278 16.1752V11.2793L41.4926 11.1441H40.5395L40.4043 11.0089V9.64807L40.5395 9.51284H41.4926L41.6278 9.37759V8.83243C41.6278 7.33642 42.7161 6.79126 43.9396 6.79126H45.1628L45.2982 6.92651L45.296 6.92861Z"
                
              />
              <path
                d="M50.3287 16.4498C49.7835 17.8106 49.2405 18.6262 47.3368 18.6262H46.6563L46.5211 18.491V17.1302L46.6563 16.995H47.3368C48.017 16.995 48.1524 16.8597 48.2896 16.4519V16.3167L46.1133 11.0109V9.65012L46.2485 9.51489H47.472L47.6072 9.65012L49.2385 14.2755H49.3737L51.005 9.65012L51.1402 9.51489H52.3637L52.4989 9.65012V11.0109L50.3223 16.4519L50.3287 16.4498Z"
                
              />
            </g>
            <defs>
              <clipPath id="clip0_2947_150">
                <rect width="63.3905" height={26} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p>.</p>
      </div>
      <span className="mx-0 mt-4 md:mt-0 md:mx-4 flex flex-1 h-[1px] bg-[#999999] dark:bg-[#444444]"></span>
      <p className="mt-4 md:mt-0">Dennis Tamunotonye Dickson © 2016 - {year}</p>
    </div>
  </footer>
);

export default Footer;
