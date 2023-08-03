/* eslint-disable @next/next/no-img-element */

import { instagramApi } from "../utils/instagramApi";

async function Home() {
  const feed = await instagramApi();
  const images = feed.props.feed.data;
  console.log(images);
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 m-10 md:m-30 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div
            className="bg-slate-300 p-2 rounded-xl h-full w-full hover:shadow-lg"
            key={image.id}
          >
            <a className="" href={image.permalink}>
              <img
                className=" rounded-xl h-full w-full object-cover"
                src={image.media_url}
                alt={image.caption}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
