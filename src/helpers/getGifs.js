
export const getGifs = async( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Kl6SH43pkUuM2jtiC4gzI4yui28CLoTk&q=${ category }&limit=10`;
    const resp = await fetch (url);
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}