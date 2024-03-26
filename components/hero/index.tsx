import { Button } from '@bigcommerce/components/button';
import {
  Slideshow,
  SlideshowAutoplayControl,
  SlideshowContent,
  SlideshowControls,
  SlideshowNextIndicator,
  SlideshowPagination,
  SlideshowPreviousIndicator,
  SlideshowSlide,
} from '@bigcommerce/components/slideshow';
import Image from 'next/image';

// import SlideshowBG from './slideshow-bg-01.jpg';
import SlideshowBG from './Ou-Zhang-WOVENBYRD_LIFESTYLE_02.jpg';

export const Hero = () => (
  <Slideshow>
    <SlideshowContent>
      <SlideshowSlide>
        <div className="relative">
          <Image
            alt="an assortment of brandless products against a blank background"
            className="absolute -z-10 object-cover"
            fill
            priority
            src={SlideshowBG}
            quality={100}
          />
          <div className="flex flex-col gap-4  px-12 pb-48 pt-36 ">
            <h2 className="text-6xl text-center font-black text-grey lg:text-6xl bg-gray-100 bg-opacity-55">Wovenbyrd Expands into New Markets</h2>
           {/*  <p className="max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p> */}
            <Button asChild className="w-fit">
              <a href="https://www.bigcommerce.com/case-study/wovenbyrd/">Case Study</a>
            </Button>
          </div>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex flex-col gap-4 bg-gray-100 px-12 pb-48 pt-36">
          <h2 className="text-5xl font-black lg:text-6xl">Great Deals</h2>
          {/* <p className="max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p> */}
          <Button asChild className="w-fit">
            <a href="/#">Shop now</a>
          </Button>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex flex-col gap-4 bg-gray-100 px-12 pb-48 pt-36">
          <h2 className="text-5xl font-black lg:text-6xl">Low Prices</h2>
          {/* <p className="max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p> */}
          <Button asChild className="w-fit">
            <a href="/#">Shop now</a>
          </Button>
        </div>
      </SlideshowSlide>
      

    </SlideshowContent>
    <SlideshowControls>
      <SlideshowAutoplayControl />
      <SlideshowPreviousIndicator />
      <SlideshowPagination />
      <SlideshowNextIndicator />
    </SlideshowControls>
  </Slideshow>
);