export async function instagramApi(){

    const getStaticProps = async () => {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,fields&access_token=${process.env.INSTAGRAM_KEY2}`;
        const data = await fetch(url,{next: {revalidate : 10}})
        const feed = await data.json();
  
    return{
        props:{
            feed
        },
        }


    };
    const props = await getStaticProps();
    return props;
  };
