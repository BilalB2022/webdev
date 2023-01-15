const output = document.getElementById('output')
const myButton = document.getElementById('but')
const username = document.getElementById('username')
const myImg = document.getElementById('myImg')

const clickHandler = () => {
    output.innerText = username.value
}

const changeHandler = () => {
    console.log('Change Handler');
    output.innerText = username.value
}

const mouseHoverHandler = () => {
    console.log('mousehover test');
    myImg.src = 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv_400x400.jpg'
}
const mouseOutHandler = () => {
    console.log('mousehover test');
    myImg.src ='https://pbs.twimg.com/profile_images/718282702957514753/Z4gZ6Ddu_400x400.jpg'
}

