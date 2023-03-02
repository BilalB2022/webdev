// https://developers.giphy.com/explorer/

const RandomSource = document.getElementById('random-meme')

const GetRandomMeme = () => {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=ce0S5YOQILZo7FYwnCiaTVksg8kUJHFm&tag=dragonball&rating=g')
        .then(res => res.json())
        .then(meme => {
            console.log(meme.data.embed_url)
            console.log(RandomSource.src);
            RandomSource.src = meme.data.embed_url
        })
}