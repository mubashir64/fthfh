const videosList = [
{
	video: 'https://www.udrop.com/file/Lxio/Solo_Leveling_S01E01_[RareToonsIndia]_720P_HD.compressed.mp4',
	title: 'Solo Leveling S01E01'
},
{
	video: 'https://www.udrop.com/file/Lxiz/Solo_Leveling_S01E02_[RareToonsIndia]_720P_HD.compressed.mp4',
	title: 'Solo Leveling S01E02'
},
{
	video: 'https://www.udrop.com/file/LxiD/Solo_Leveling_S01E03_[RareToonsIndia]_720P_HD.compressed.mp4',
	title: 'Solo Leveling S01E03'
},
{
	video: 'https://www.udrop.com/file/LxjH/Solo_Leveling_S01E04_[RareToonsIndia]_720P_HD.compressed.mp4',
	title: 'Solo Leveling S01E04'
},
{
	video: 'https://www.udrop.com/file/LxjN/0221.mp4',
	title: 'Solo Leveling S01E05'
},
{
	video: 'https://www.googleapis.com/drive/v3/files/1PW65_f9g-JPmvWzWBoTC02pJYaYr8nH0?alt=media&key=AIzaSyCfleZMSGBGdj75C-d_6kCbMXE21Ek6Od4',
	title: 'Solo Leveling S01E06'
},
{
	video: 'https://www.googleapis.com/drive/v3/files/19ox5KMzHNdB8DGbtmuHDiLnbrmeBZ3XN?alt=media&key=AIzaSyCfleZMSGBGdj75C-d_6kCbMXE21Ek6Od4',
	title: 'Solo Leveling S01E07'
},
{
	video: 'https://www.googleapis.com/drive/v3/files/1bQdBuFnlCCr1uU3zCks5dSYK_lWiCHoe?alt=media&key=AIzaSyCfleZMSGBGdj75C-d_6kCbMXE21Ek6Od4',
	title: 'Solo Leveling S01E08'
},
{
	video: 'images/vid-8.mp4',
	title: 'Comming_soon'
},
]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
	var { video, title } = item;
	return (
		`<div class="list active">
		<video src=${video} class="list-video"></video>
		<h3 class="list-title">${title}</h3>
		</div>`
		)
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
	vid.onclick = () => {
		videoList.forEach(remove => { remove.classList.remove('active') });
		vid.classList.add('active');
		let src = vid.querySelector('.list-video').src;
		let title = vid.querySelector('.list-title').innerHTML;
		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
	};
});
