
let songs = [
	{artistName: "Beethoven", 
	songName: "Sonata no.14", 
	url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Ludwig_van_Beethoven_-_sonata_no._14_in_c_sharp_minor_%27moonlight%27%2C_op._27_no._2_-_i._adagio_sostenuto.ogg"},
	{artistName: "Beethoven", 
	 songName: 'Sonata no.15 - Sample',
	 url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Ludwig_van_Beethoven_-_sonata_no._15_in_d_major%2C_op._28_%27pastorale%27_-_ii._andante.ogg"},
	{artistName: "Beethoven", 
	 songName: "Lullaby - Sample",
	 url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Axle_-_02_-_Ailsas_Lullaby.ogg"}, 
	{artistName: "Ailas", 
	 songName: "Simplify",
	 url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/01_-_Simplify.ogg"}, 
	{artistName: "unknown", 
	 songName: "Reservoir Sunset",
	 url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Axletree_-_01_-_Reservoir_Sunset_Full_Synth_Mix.ogg"}, 
	{artistName: "unknown", 
	 songName: "Vivaldi Summer - Sample",
	 url: "https://upload.wikimedia.org/wikipedia/commons/1/19/04_-_Vivaldi_Summer_mvt_1_Allegro_non_molto_-_John_Harrison_violin.ogg"},
	{artistName: "John Harrison", 
	 songName: "The rain Song - Sample",
	 url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Zero-project_-_02_-_The_rain_song_2_%28pure_piano_version%29.ogg"},
	 {artistName: "zero-project", 
	songName: "Impromptu", 
	url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Schubert-_Impromptu_B-flat2.ogg"},

	]

let audio = new Audio(songs[0].url);
let previousButton = document.querySelector('.previous')
let playButton = document.querySelector('.play')
let pauseButton = document.querySelector('.pause')
let nextButton = document.querySelector('.next')
let firstG = document.querySelector(".first-g")
let secondG = document.querySelector(".second-g")
let artist = document.querySelector(".artist")
let song = document.querySelector(".song")
let popUp = document.querySelector('.alert')
let musicLogo = `<i class="fas fa-music"></i>`

let currentSongIndex = 0

const spin = () => {
 firstG.classList.add('spin')
 secondG.classList.add('spin')
}

playButton.addEventListener('click', function(){
	audio.play()
	artist.innerText = currentSong().artistName
	song.innerHTML = currentSong().songName + musicLogo
	spin()
  audio.loop='true'
  myAudio = new Audio('https://upload.wikimedia.org/wikipedia/commons/b/bb/Rain_and_thunder_%281%29.ogg'); 
myAudio.volume = 0.4; // 50%

if (typeof myAudio.loop == 'boolean')
{
    myAudio.loop = true;
}
else
{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
myAudio.play();
})

pauseButton.addEventListener('click', function(){
	audio.pause()
	myAudio.pause()
	firstG.classList.remove('spin')
	secondG.classList.remove('spin')
})

const currentSong = (index) => {
if(index === undefined){
	return songs[currentSongIndex]
} else if (index < songs.length ){
	artist.innerText = songs[index].artistName 
	song.innerHTML = songs[index].songName + musicLogo
 }
}

const nextSong = ()=> {
	newSongIndex = currentSongIndex + 1
	currentSong(newSongIndex)
	if(newSongIndex < songs.length){
		audio.pause()
		audio = new Audio(songs[newSongIndex].url)
		audio.play()
		audio.loop='true'
		return currentSongIndex = newSongIndex
	} else {
		popUp.classList.add('pop-up')
		popUp.innerText = "This the last song."
			setTimeout(() => {
			popUp.classList.remove('pop-up')
		}, 1000)
		return currentSongIndex
	}
	
}

const previousSong= () => {
	newSongIndex = currentSongIndex - 1
	if(newSongIndex < 0 ){
		popUp.classList.add('pop-up')
		popUp.innerText = 'This is the first song.'
		setTimeout(() => {
			popUp.classList.remove('pop-up')
		}, 1000)
		return currentSongIndex 
	} else {
		audio.pause()
		currentSong(newSongIndex)
		audio = new Audio(songs[newSongIndex].url)
		audio.play()
		audio.loop='true'
		return currentSongIndex = newSongIndex
	}
}

nextButton.addEventListener('click', function(){
 nextSong()
 spin()
})

previousButton.addEventListener('click', function(){
	previousSong()
	spin()
	
})
