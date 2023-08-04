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
            className="group bg-slate-300 p-2 rounded-xl hover:shadow-lg"
            key={image.id}
          >
            {image.media_type === "VIDEO" ? (
              <div className="relative">
                <div className="absolute inset-x-0 bottom-0 p-4 mb-12 hidden group-hover:block group-hover:bg-slate-300/50">
                  {image.caption}
                </div>
                <video
                  controls
                  className="rounded-xl aspect-[4/5] object-cover"
                >
                  <source src={image.media_url} />
                </video>
              </div>
            ) : (
              <a className="relative" href={image.permalink}>
                {image.caption ? (
                  <div className="absolute inset-x-0 bottom-0 p-4 hidden group-hover:block group-hover:bg-slate-300/50">
                    {image.caption}
                  </div>
                ) : (
                  <></>
                )}
                <img
                  className=" rounded-xl aspect-[4/5] object-cover "
                  src={image.media_url}
                  alt={image.caption}
                />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
