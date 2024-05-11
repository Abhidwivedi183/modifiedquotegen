let twbtn = document.querySelector("#Tweet");

let sh = document.querySelector("#gene");

let bck = document.getElementById("bckquote");
let sp = document.querySelector("#spn");

let ima = document.querySelector("#imgofplayer")

//main task is to make object that in form of api

const arr = [
  

  {
imgage:`https://media.gettyimages.com/id/962792890/photo/kiev-ukraine-cristiano-ronaldo-of-real-madrid-lifts-the-uefa-champions-league-trophy-following.jpg?s=612x612&w=0&k=20&c=F51xOktZy_gdCC-UpEo3cq4ZsaAnAi9e2XKRap_bCss=`,
name:`Cristiano Ronaldo`,
quats:`If you dont think you are the best then you will never achieve what you capable of!!!`,
}
,
{
  imgage:`https://media.gettyimages.com/id/1765729065/photo/67th-ballon-dor-ceremony-at-theatre-du-chatelet-in-paris.jpg?s=612x612&w=gi&k=20&c=x2Pc_EQLz1r4J8LM5EpbK0n50xG4BLv0FIVn79zn3sg=`,
  name:`Lionel Messi`,
  quats:`you have to fight to reach your dream ,you have to sacrifice for it!!!!!!`,
}
,
{
  imgage:`https://media.gettyimages.com/id/1331959729/photo/nottingham-england-india-captain-virat-kohli-looks-on-whilst-wearing-his-whites-and-blazer.jpg?s=612x612&w=0&k=20&c=UT0ZGU8pZcH9oFsPVVcMvizOYcUJ-hCRjYu9M6_h0s4=`,
  name:`Virat Kohli`,
  quats:`Self-belive and hardwork will always earn you success!!!!!`,

}
,
{
  imgage:`https://media.gettyimages.com/id/103102363/photo/nba-finals-los-angeles-lakers-kobe-bryant-victorious-after-winning-championship-vs-boston.jpg?s=612x612&w=0&k=20&c=r6XsneAL8JHvclLbD9wGjeYgsKCRv6Ti7Z0UmzeH6UA=`,
  name:`Kobe Bryant`,
  quats:`The biggest dreams are not fullfilled by belief , they are fullfilled by doubt`,
}
,

{

  imgage:`https://media.gettyimages.com/id/1445683992/photo/christchurch-new-zealand-kane-williamson-of-new-zealand-poses-for-a-photo-with-the-series.jpg?s=612x612&w=0&k=20&c=7OcwmUOyIRWkSSnfCRTEMfAkFAv6Xz-fK8wJW6Vzo0A=`,
  name:`Kane Willaiamson`,
  quats:`It is impossible to transform anyone as per your satisfaction,just you have to be yourself and should enjoy what u do...`,


}
,
{
  imgage:`https://media.gettyimages.com/id/1185044814/photo/indian-cricketer-mahendra-singh-dhoni-smiles-during-the-promotional-event-for-panerai-watches.jpg?s=612x612&w=0&k=20&c=qyarmiDdt0PzvwBxm4n39rY4Ti_FCkBHJvZMHCvObxg=`,
  name:`MS Dhoni`,
  quats:`Don't blame anyone just improve yourself!!!!!!!!!! `,

}
,
{
  imgage:`https://media.gettyimages.com/id/588638468/photo/rio-de-janeiro-brazil-gold-medalist-michael-phelps-of-the-united-states-celebrates-on-the.jpg?s=612x612&w=0&k=20&c=M9WOgM2JPaWCYtvlzstGrnpnRKSHam0cidD6ctiAFRA=`,
  name:`Michael Phelps`,
  quats:`I never think goals are easy , they should harder because they push you from your comfort zone , that separate the GOAT from GREAT!!!!!!`,

}


]


sh.addEventListener('click',function(e){

qute();


})

twbtn.addEventListener('click',function(e){
  tweet();
})


let idx = 0;

 async function qute(){
ima.src = `${arr[idx].imgage}`
bck.innerHTML = `${arr[idx].quats}`
sp.innerHTML = `${arr[idx].name}`
idx = idx+1
}

function tweet(){
  window.open("https://twitter.com/intent/tweet?text=Hello%20world");
}





