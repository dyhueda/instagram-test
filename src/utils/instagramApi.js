export async function instagramApi(){

    const getStaticProps = async () => {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY2}`;
        const data = await fetch(url)
        const feed = await data.json();
  
    return{
        props:{
            feed
        }
        }

    };
    const props = await getStaticProps();
    console.log(props);
    return props;
  };
