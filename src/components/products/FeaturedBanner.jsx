import { Link } from "react-router-dom";

function FeaturedBanner() {
  return (
    <section className="bg-ct-dark-green-9DC88D h-[800px] bg-hero bg-no-repeat bg-center bg-cover py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-ct-dark-green-164A41 mr-3"></div>
            <div>New Tech</div>
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            HACKDOG SALE <br />
            <span className="font-semibold">LAPTOP</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        {/* img */}
        <div className="hidden lg:block">
          <img
            src="https://picsum.photos/id/237/200"
            className="w-[600px] hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedBanner;
