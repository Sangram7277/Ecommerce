import { IoCloseSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="w-full ">
        <div>
          <h1 className="bg-black text-white flex justify-center">
            Sign up and get 20% off to your first order.Sign Up now
          </h1>
          <IoCloseSharp className="flex w-[2700px] absolute top-[6px] text-white" />
        </div>

        <div className="bg-white h-[full]">
          <div>
            <h1 className="text-3xl text-black font-extrabold absolute top-[62px] left-[100px]">
              SHOP.CO
            </h1>
            <div>
              <h1 className="absolute top-[70px] left-[300px]">Shop</h1>
              <FaAngleDown className="absolute top-[76px] left-[340px]" />
            </div>
            <h1 className="absolute top-[70px] left-[400px]">On Sale</h1>
            <h1 className="absolute top-[70px] left-[500px]">New Arrivals</h1>
            <h1 className="absolute top-[70px] left-[630px]">Brands</h1>
            <div>
              <IoCartOutline className="absolute top-[78px] left-[1300px]" />
            </div>
            <div>
              <MdOutlineAccountCircle className="absolute top-[78px] left-[1330px]" />
            </div>
          </div>

          <div>
            <div>
              <h1 className="absolute left-[100px] top-[150px]">Home</h1>
              <IoChevronForward className="absolute top-[156px] left-[150px]" />
            </div>
            <div>
              <h1 className="absolute left-[170px] top-[150px]">Shop</h1>
              <IoChevronForward className="absolute top-[156px] left-[210px]" />
            </div>
            <div>
              <h1 className="absolute left-[232px] top-[150px]">Men</h1>
              <IoChevronForward className="absolute top-[156px] left-[268px]" />
            </div>
            <div>
              <h1 className="absolute top-[150px] left-[286px]">T-shirts</h1>
            </div>

            <div>
              <img
                className="absolute h-[167px] w-[152px] left-[100px] top-[205px] rounded-md"
                src="./Images/Tshirt2.svg"
                alt=""
              />
              <img
                className="absolute h-[167px] w-[152px] left-[100px] top-[390px] rounded-md"
                src="https://s3-alpha-sig.figma.com/img/51c4/5a78/b417beff6f8fa6310534f3755fd23c5a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyEE8AsGcKnxW4oDfexGJ3-2YFZpXhIy8E-CiuWD6iex6rhLqD5QOPF8~jSuYHw5SWl7bSdIiK~Pj7REJ6FCauRVxiNhdCYCEL1Q8AqcQ3siHL0JMNa7-qhnGKSpAA49UpsVaVgcXhrUKlZ5883R7Yub997MHzkgRxBIv-Yqa3kPxQPvjiw-M3QUrzvXIgwy7qvK10NdfXVC-fdBA8wU25lP0nt-d4QbMkHA41KF5R~I6WMaLrMPA0G6Ja25LB4IJYTmJZR09ZrfOfgoH6kqo9a1grecMe~W8KfAhcTSijh43F5hj~bdzvArx~KL13FCbCEFzmZ-BCsMkUnRgCrnfg__"
                alt=""
              />
              <img
                className="absolute h-[167px] w-[145px] left-[100px] top-[575px] rounded-md"
                src="https://s3-alpha-sig.figma.com/img/52ce/3b46/9d8d7ff6e33f95a574450e07218fc909?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EpQuIici0dRlUOIkSHsTpwHlzWhOWaJo1rtEWqlpPWSeTbY0cDgJwe3lO8~yfA4seFEJjYKYH~7Fn-ezAxb-KnCUGxHcY0Uxa4GwvhBdO5OkskSayZVXppqn2TRgVf9W0-8yHMLFYt7yXbML-OOwJBZ0OYks4PqaGXZvIJz17TTU41RMfitptXfrKStF9CUSrXc-i47btTjZDUXkpQ1rRqdPlPegdpdTYBMypE5omqhKiD3fTA5QEtOajav84Kj4xPY5jRUMQu-m5~p7J8w25HRxVVmt~jNVX-0yb-MRkPdNy9xMH4-fdN6d8byXUNyj7z7UIr9erpnfCXUPujH1HQ__"
                alt=""
              />
              <img
                className="absolute h-[530px] w-[444px] left-[275px] top-[205px] rounded-md"
                
                src="./Images/Tshirt.svg"
                alt=""
                
              /> 
              
            </div>

            <div>
              <div>
                <h1 className="text-4xl text-black font-extrabold absolute top-[220px] left-[780px]">
                  ONE LIFE GRAPHIC T-SHIRT
                </h1>
              </div>
              <div>
                <FaRegStar className="absolute top-[290px] left-[780px] text-yellow-500" />
                <FaRegStar className="absolute top-[290px] left-[810px] text-yellow-500" />
                <FaRegStar className="absolute top-[290px] left-[840px] text-yellow-500" />
                <FaRegStar className="absolute top-[290px] left-[870px] text-yellow-500" />
                <FaRegStarHalf className="absolute top-[290px] left-[900px] text-yellow-500" />
                <h1 className="absolute top-[290px] left-[930px]">4.5/5</h1>
                <h1 className="absolute top-[340px] left-[780px] font-bold">
                  $260
                </h1>
                <h1 className="absolute top-[340px] left-[825px] font-bold text-gray-400">
                  $300
                </h1>
              </div>
              <div>
                <input
                  type="text"
                  className="h-[25px] w-[72px] bg-red-200  rounded-full absolute top-[340px] left-[870px]"
                  placeholder="    -40%"
                />
              </div>
              <div>
                <p className="absolute top-[380px] left-[775px] font-thin text-gray-500">
                  This graphic t-shirt which is perfect for any
                  occassion.Crafted from a soft and <br />
                  breathable fabric,it offers superior comfort and style.
                </p>
              </div>
              <div>
                <h1 className="absolute top-[450px] left-[775px] font-thin text-gray-500">
                  Select Colors
                </h1>
              </div>
              <div>
                <h1 className="absolute top-[550px] left-[775px] font-thin text-gray-500">
                  Choose Size
                </h1>
              </div>
              <div>
                <button className="absolute top-[580px] left-[775px] w-[86px] h-[30px] bg-gray-200 font-thin rounded-full">
                  Small
                </button>
                <button className="absolute top-[580px] left-[870px] w-[106px] h-[30px] bg-gray-200 font-thin rounded-full">
                  Medium
                </button>
                <button className="absolute top-[580px] left-[985px] w-[106px] h-[30px] bg-black text-white font-thin rounded-full">
                  Large
                </button>
                <button className="absolute top-[580px] left-[1100px] w-[106px] h-[30px] bg-gray-200 font-thin rounded-full">
                  X-Large
                </button>
              </div>
              <div></div>
            </div>
          </div>

          <div>
            <div>
              <h1 className="text-gray-500 font-normal absolute top-[800px] left-[210px]">
                Product Details
              </h1>
              <h1 className="text-gray-500 font-normal absolute top-[800px] left-[650px]">
                Rating & Reviews
              </h1>
              <h1 className="text-gray-500 font-normal absolute top-[800px] left-[1110px]">
                FAQs
              </h1>
            </div>

            <div>
              <div className="flex h-[241.58px] w-[610px] border absolute top-[1000px] left-[100px] rounded-lg">
                <h1 className="font-bold absolute top-[75px] left-[30px]">
                  Samantha D.
                </h1>
                <p className="text-gray-500 font-thin absolute top-[110px] left-[30px]">
                  I absolutely love this t-shirt! The design is unique and the
                  fabric feels so,
                  <br /> comfortable. As a fellow designer, I appreciate the
                  attention to detail its <br /> become my favourite go-to shirt
                </p>
                <h1 className="text-gray-500 absolute left-[30px] top-[210px]">
                  Posted on August 14 2023
                </h1>
              </div>

              <div className="flex h-[241.58px] w-[610px] border absolute top-[1000px] left-[750px] rounded-lg">
                <h1 className="font-bold absolute top-[75px] left-[30px]">
                  Alex M.
                </h1>
                <p className="text-gray-500 font-thin absolute top-[110px] left-[30px]">
                  The t-shirt exceeded my expectations! The colors are vibrant
                  and the print <br />
                  quality is top notch. Being a UI/UX designer myself. I am
                  quite picky about <br />
                  aesthetics, and this t-shirt definitely gets a thumbs up for
                  me.{" "}
                </p>
                <h1 className="text-gray-500 absolute left-[30px] top-[210px]">
                  Posted on August 15 2023
                </h1>
              </div>

              <div className="flex h-[241.58px] w-[610px] border absolute top-[1270px] left-[100px] rounded-lg">
                <h1 className="font-bold absolute top-[75px] left-[30px]">
                  Ethan R.
                </h1>
                <p className="text-gray-500 font-thin absolute top-[110px] left-[30px]">
                  This t-shirt is a must-have for anyone who appreciate good
                  design. The
                  <br /> minimalistic yet stylish pattern caught my eye, and fit
                  is perfect. I can <br /> see the designers touch in every
                  aspect of this t-shirt
                </p>
                <h1 className="text-gray-500 absolute left-[30px] top-[210px]">
                  Posted on August 16 2023
                </h1>
              </div>

              <div className="flex h-[241.58px] w-[610px] border absolute top-[1270px] left-[750px] rounded-lg">
                <h1 className="font-bold absolute top-[75px] left-[30px]">
                  Olivia P.
                </h1>
                <p className="text-gray-500 font-thin absolute top-[110px] left-[30px]">
                  As a UI/UX enthusiast,I value a simplicity and
                  functionality.This t-shirt is not <br />
                  only represents those principles but also feels great to
                  wear.Its evident <br /> that the designer poured their
                  creativity into making this t-shirt stand out.{" "}
                </p>
                <h1 className="text-gray-500 absolute left-[30px] top-[210px]">
                  Posted on August 17 2023
                </h1>
              </div>

              <div className="flex h-[241.58px] w-[610px] border absolute top-[1540px] left-[100px] rounded-lg">
                <h1 className="font-bold absolute top-[75px] left-[30px]">
                  Liam K.
                </h1>
                <p className="text-gray-500 font-thin absolute top-[110px] left-[30px]">
                  This t-shirt is a fusion of comfort and creativity.The fabric
                  is soft,and the
                  <br />
                  design speaks volumes and designers skill. Its like wearing a
                  piece
                  <br />
                  of art that reflects my passion for both design and fashion.
                </p>
                <h1 className="text-gray-500 absolute left-[30px] top-[210px]">
                  Posted on August 18 2023
                </h1>
              </div>

              <div className="flex h-[241.58px] w-[610px] border absolute top-[1540px] left-[750px] rounded-lg">
                <h1 className="font-bold absolute top-[75px] left-[30px]">
                  Ava H.
                </h1>
                <p className="text-gray-500 font-thin absolute top-[110px] left-[30px]">
                  I am not just wearing a t-shirt; I am wearing a piece of
                  philosophy.
                  <br />
                  The intricate details and thoughtful layout of the design make
                  this t-shirt a <br />
                  conversation starter
                </p>
                <h1 className="text-gray-500 absolute left-[30px] top-[210px]">
                  Posted on August 17 2023
                </h1>
              </div>

              <div>
                <button className="absolute top-[1820px] left-[610px] rounded-3xl bg-white  border-gray-500/100 border-2 w-[230px] h-[52px]">
                  {" "}
                  Load More Reviews{" "}
                </button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h1 className="font-extrabold text-5xl absolute top-[1930px] left-[450px]">
                YOU MIGHT ALSO LIKE
              </h1>
            </div>
            <div>
              <div>
                <img
                  className="h-[320px] w-[285px] absolute top-[2025px] left-[100px] rounded-2xl"
                  src="https://s3-alpha-sig.figma.com/img/15e6/8c10/3095df99e905b164718348af952a0f64?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fpnRp6i0X-YFcq5zdNuYNz5FnjzcpChVp9lQBEkclQIiDmAJbRlp1c21d8nRv~JZtV~P2f9q4qRgkWrPKbKl6qwyonO4P8o59ymBi7F51xMGFabBpXyUMPK1PEZVrio-dp1jgdxnF0qBOYK1G-ShRz2ipVruzdQoLhsMTH4u6LfaSunvWrxRbrBnsI1oUYUgOJOpECl5qQ2aOGXoj7hxfjHHlaDU5DTDsHsT4mWfaVrrkJqlzJ4Qilk5AfC~WlIw89-soFzy6n3P130f5zi6SlJad~1UgKtTLoNYGJIK3LKHzcYcDc1-GcG5oF3YJkMYacHdpiXBPEEPJi8ZlRHLCA__"
                  alt=""
                />
                <h1 className=" absolute left-[100px] top-[2370px] font-bold text-md ">
                  Polo with Contrast Trims
                </h1>
                <h1 className="absolute left-[100px] top-[2440px] font-bold">
                  $212
                </h1>
              </div>

              <div>
                <img
                  className="h-[320px] w-[285px] absolute top-[2025px] left-[420px] rounded-2xl"
                  src="https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WxaKkkEIJ5dsI90wvAEEVnvRlyuoyzePp7~CiUAvd-XrqHA1xCSuYegI9GxXsjtk152Pm~pZZ0p6x-x6JyE-mDk~5X5tqkwG7UTtoVOLNUtEmUt1EuE69T631TS2HqvSZfUZOYtEfyckJtzpJj~kAiucrhlZOtXG~N9wLkeGH1g65OEyoew7VpA2TTTRGQfGsbQStTH9ERgaMTdswjk2YLRIVcH7emfPkLWF4NzucVttbGe-4asYsrMvR2mfNYhrOVrvaFtBgH75fIgItYw~3uRmbhS2A0AZ-vkXYMjLCqHPXaWgUyFaHFu7YWUGztAWOj03urvYmcW3Fyzc26YAlQ__"
                  alt=""
                />
                <h1 className="absolute left-[420px] top-[2370px] font-bold text-md ">
                  Gradient Graphic T-Shirt
                </h1>
                <h1 className="absolute left-[420px] top-[2440px] font-bold">
                  $145
                </h1>
              </div>

              <div>
                <img
                  className="h-[320px] w-[285px] absolute top-[2025px] left-[740px] rounded-2xl"
                  src="https://s3-alpha-sig.figma.com/img/aecd/8196/485b30fd30b3226e09bb8f8e494c260b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T44x~OhsjAic7Mr9lUWQNeqY1Zt1qGRcWWioHfGdUucE7SdHtkH~XodKbBwDwqojpGs4rkPlhvoZqSv3GJjkjcmkBKzvlL1BJRchyzm0hDT3fFIjgD5YojluOA~Qe2qJ6d~5mvikSY-lG18XPNrMnqv7RAfgbwgyCKPvrVVBo7hTOHbMyD-pkhX2R6KfyEilGchL8-ZwZRlNK-bz7skG60zWgXOkNbpTOoIfk~7OUQrFix2nh9IavZQopVMvKacKO3BiqNzeDEoDI7OdwYwnNf3z8mkSaOXIxS5hHDrF79RfiJM5P6mrdGJpBUDEgXGYMaXkpZCS5tS9gzHnXIFUbQ__"
                  alt=""
                />
                <h1 className="absolute left-[745px] top-[2370px] font-bold text-md">
                  Polo With Tipping Details
                </h1>
                <h1 className="absolute left-[745px] top-[2440px] font-bold">
                  $180
                </h1>
              </div>

              <div>
                <img
                  className="h-[320px] w-[285px] absolute top-[2025px] left-[1060px] rounded-2xl"
                  src="https://s3-alpha-sig.figma.com/img/6115/920b/12942762aefb7c7ac954e78b76284504?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6rxOQ-1l7OzNaBgfofwSxVivKCXXVRD4lKbIislb6RgC8r3K62Ar2qWW~veYenabZiBoWLFR5~JfZ~UwXF0wb~IBpjZ5mxvORS1IBlBzMp~jn9bREG7pM1lSFK~ZEzOiC-qg0se9YBwIlFFaKIFukpLrkZld~CsBwL4h0u1aEVky8nUkL9ofcTDYA1H6n0Z7NfsfF0dku7QDSE6lMiNamN553iJ4Gde1P75GyawYQU2TcVQ4Fxr1iexeJu3dlvM2K6gEJXVKo-9IH2GYRuyD2uWGEwYg8Zlk18w2chOWmOO4Nu8YRuWlZOVL7SLpLusVNOwkPceByrjkZqUpc-GwA__"
                  alt=""
                />
                <h1 className="absolute left-[1070px] top-[2370px] font-bold text-md">
                  Black Striped T-Shirt
                </h1>
                <h1 className="absolute left-[1070px] top-[2440px] font-bold">
                  $120
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div className="h-[499px] w-[1520px] absolute top-[2700px]   bg-gray-200">
              <div className="h-[180px] w-[1260px] bg-black absolute top-[-100px] left-[100px] rounded-3xl">
                <h1 className="text-white font-extrabold text-4xl absolute top-[50px] left-[60px] ">
                  STAY UPTO DATE ABOUT <br /> LATEST OFFERS
                </h1>
                <input
                  type="text"
                  className="bg-white h-[48px] w-[349px] absolute left-[830px] top-[40px] rounded-full"
                  placeholder="               Enter your email address"
                />
                <input
                  type="text"
                  className="bg-white h-[48px] w-[349px] absolute left-[830px] top-[100px] rounded-full"
                  placeholder="               Subscribe to Newsletter"
                />
              </div>
              <div>
                <h1 className="font-extrabold text-3xl absolute top-[130px] left-[100px]">
                  SHOP.CO
                </h1>
                <p className="font-thin text-gray-500 absolute left-[100px] top-[190px]">
                  We have clothes that suits your style and <br />
                  which you are proud to wear.From
                  <br />
                  women to men
                </p>
              </div>
              <div>
              <img
                src="./Images/Twitter1.svg"
                alt=""
                className="absolute top-[300px] left-[100px]"
              /> 
              <img
                src="./Images/facebook1.svg"
                alt=""
                className="absolute top-[290px] left-[140px]"
              /> 
              <img
                src="./Images/instagram1.svg"
                alt=""
                className="absolute top-[299px] left-[190px]"
              /> 
              </div>
              <div>
                <h1 className="absolute top-[140px] left-[450px]">
                  C O M P A N Y
                </h1>
                <p className="font-thin text-gray-500 absolute left-[450px] top-[190px]">
                  About
                </p>
                <p className="font-thin text-gray-500 absolute left-[450px] top-[230px]">
                  Features
                </p>
                <p className="font-thin text-gray-500 absolute left-[450px] top-[270px]">
                  Works
                </p>
                <p className="font-thin text-gray-500 absolute left-[450px] top-[310px]">
                  Career
                </p>
              </div>
              <div>
                <h1 className="absolute top-[140px] left-[660px]">H E L P</h1>
                <p className="font-thin text-gray-500 absolute left-[660px] top-[190px]">
                  Customer Support
                </p>
                <p className="font-thin text-gray-500 absolute left-[660px] top-[230px]">
                  Delivery Details
                </p>
                <p className="font-thin text-gray-500 absolute left-[660px] top-[270px]">
                  Terms & Conditions
                </p>
                <p className="font-thin text-gray-500 absolute left-[660px] top-[310px]">
                  Privacy Policy
                </p>
              </div>
              <div>
                <h1 className="absolute top-[140px] left-[880px]">F A Q</h1>
                <p className="font-thin text-gray-500 absolute left-[880px] top-[190px]">
                  Account
                </p>
                <p className="font-thin text-gray-500 absolute left-[880px] top-[230px]">
                  Manage Deliveries
                </p>
                <p className="font-thin text-gray-500 absolute left-[880px] top-[270px]">
                  Orders
                </p>
                <p className="font-thin text-gray-500 absolute left-[880px] top-[310px]">
                  Payments
                </p>
              </div>
              <div>
                <h1 className="absolute top-[140px] left-[1100px]">
                  R E S O U R C E S
                </h1>
                <p className="font-thin text-gray-500 absolute left-[1100px] top-[190px]">
                  Free eBooks
                </p>
                <p className="font-thin text-gray-500 absolute left-[1100px] top-[230px]">
                  Development Tutorial
                </p>
                <p className="font-thin text-gray-500 absolute left-[1100px] top-[270px]">
                  How to-Blog
                </p>
                <p className="font-thin text-gray-500 absolute left-[1100px] top-[310px]">
                  Youtube Playlist
                </p>
              </div>
            </div>
            <div>
              <img
                src="./Images/Visa.png"
                alt=""
                className="absolute top-[3100px] left-[960px]"
              />
               <img
                src="./Images/mastercard.png"
                alt=""
                className="absolute top-[3100px] left-[1025px]"
              />
              <img
                src="./Images/PayPal.png"
                alt=""
                className="absolute top-[3100px] left-[1090px]"
              />
              <img
                src="./Images/iPay.png"
                alt=""
                className="absolute top-[3100px] left-[1155px]"
              />
              <img
                src="./Images/Gpay.png"
                alt=""
                className="absolute top-[3100px] left-[1220px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
