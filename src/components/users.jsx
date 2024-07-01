import { useEffect, useState } from 'react'
import { useCallback } from 'react';
import React from 'react'
import Authorize from './authorize';


const data = [
  "Junaid" , "Ahmed", "Yaseen", "Ibrahim" , "Jazim", "Niyamat Uncle", "Asim Bhai", "Ruquu", "Sahib", "Hadi", "Asad", "Moosa", "Mubeen", "Poty Brothers", "Babar Azam", "Raja Ali", "NON FC", "Anas", "Khali", "Babuu", "Ronaldo", "Coach", "Shahzad Uncle", "Sonu Jee", "Imtiaz sahb", "Saim", "Mehak Noor","🫵", "Siddu Moose wala", "ALL NON GC", "Tariq Bhai", "Batman", "Rohit Sharma", "Azam Khan", "Messi", "Faizi", "KB Burger", "My Friend", "Heera Gujar", "Haris Haseeb", "Mehroz Bhai", "Amar Faisal", "Italian Girl", "Your MOM", "Sherry Bhai", "Danish Bhai","Booby","Hamza", "Umaڑ", "Dani Mamu", "Ali Noor", "Everyone except you", "Azeem ki kaam wali", "Buu G"
];  

const emojis = [
 "💩", "🔛🔝", "🏳‍🌈", "🤡", "🖕", "🍼", "💀", "®", "🆓", "💯","🗿","🍑", "🐕","🦁","👙","🫦","🫶"
]

const nons = [
  "Anas" , "Ibrahim", "Yaseen", "Jazim", "Hadi", "Ahmed", "Junaid", "Usaid"
];



// const images = [
//   "./src/assets/images/hadi-F.jpg", "./src/assets/images/ibi flower.jpg","./src/assets/images/ifti.jpg","./src/assets/images/ibi eat.jpg","./src/assets/images/me ph.jpg","./src/assets/images/yasin eat.jpg","./src/assets/images/yasin mouth.jpg","./src/assets/images/ibi legs.jpg","./src/assets/images/ibi pith 1.jpg","./src/assets/images/aiya in blue.jpg","./src/assets/images/we burger.jpg","./src/assets/images/t3.jpg","./src/assets/images/1.jpg","./src/assets/images/2.jpg","./src/assets/images/3.jpg","./src/assets/images/4.jpg", "./src/assets/images/5.jpg","./src/assets/images/6.jpg","./src/assets/images/7.jpg","./src/assets/images/8.jpg","./src/assets/images/9.jpg","./src/assets/images/10.jpg","./src/assets/images/11.jpg","./src/assets/images/12.jpg","./src/assets/images/13.jpg","./src/assets/images/14.jpg","./src/assets/images/15.jpg","./src/assets/images/16.jpg","./src/assets/images/17.jpg","./src/assets/images/18.jpg","./src/assets/images/19.jpg","./src/assets/images/20.jpg","./src/assets/images/21.jpg","./src/assets/images/22.jpg","./src/assets/images/23.jpg","./src/assets/images/24.jpg","./src/assets/images/25.jpg","./src/assets/images/26.jpg","./src/assets/images/27.jpg","./src/assets/images/28.jpg","./src/assets/images/29.jpg","./src/assets/images/30.jpg","./src/assets/images/31.jpg","./src/assets/images/32.jpg","./src/assets/images/33.jpg","./src/assets/images/34.jpg","./src/assets/images/35.jpg","./src/assets/images/36.jpg","./src/assets/images/37.jpg","./src/assets/images/38.jpg","./src/assets/images/39.jpg","./src/assets/images/40.jpg","./src/assets/images/41.jpg","./src/assets/images/42.jpg","./src/assets/images/43.jpg","./src/assets/images/44.jpg","./src/assets/images/45.jpg","./src/assets/images/47.jpg","./src/assets/images/48.jpg","./src/assets/images/49.jpg","./src/assets/images/50.jpg","./src/assets/images/51.jpg","./src/assets/images/52.jpg","./src/assets/images/53.jpg","./src/assets/images/54.jpg","./src/assets/images/55.jpg","./src/assets/images/56.jpg","./src/assets/images/57.jpg","./src/assets/images/58.jpg","./src/assets/images/59.jpg","./src/assets/images/60.jpg","./src/assets/images/61.jpg","./src/assets/images/62.jpg","./src/assets/images/63.jpg","./src/assets/images/64.jpg","./src/assets/images/65.jpg","./src/assets/images/66.jpg","./src/assets/images/67.jpg","./src/assets/images/68.jpg","./src/assets/images/69.jpg","./src/assets/images/70.jpg","./src/assets/images/71.jpg","./src/assets/images/72.jpg","./src/assets/images/73.jpg","./src/assets/images/74.jpg"
// ];


const images = [
  "./assets/images/hadi-F.jpg", "./assets/images/ibi flower.jpg","./assets/images/ifti.jpg","./assets/images/ibi eat.jpg","./assets/images/me ph.jpg","./assets/images/yasin eat.jpg","./assets/images/yasin mouth.jpg","./assets/images/ibi legs.jpg","./assets/images/ibi pith 1.jpg","./assets/images/aiya in blue.jpg","./assets/images/we burger.jpg","./assets/images/t3.jpg","./assets/images/1.jpg","./assets/images/2.jpg","./assets/images/3.jpg","./assets/images/4.jpg", "./assets/images/5.jpg","./assets/images/6.jpg","./assets/images/7.jpg","./assets/images/8.jpg","./assets/images/9.jpg","./assets/images/10.jpg","./assets/images/11.jpg","./assets/images/12.jpg","./assets/images/13.jpg","./assets/images/14.jpg","./assets/images/15.jpg","./assets/images/16.jpg","./assets/images/17.jpg","./assets/images/18.jpg","./assets/images/19.jpg","./assets/images/20.jpg","./assets/images/21.jpg","./assets/images/22.jpg","./assets/images/23.jpg","./assets/images/24.jpg","./assets/images/25.jpg","./assets/images/26.jpg","./assets/images/27.jpg","./assets/images/28.jpg","./assets/images/29.jpg","./assets/images/30.jpg","./assets/images/31.jpg","./assets/images/32.jpg","./assets/images/33.jpg","./assets/images/34.jpg","./assets/images/35.jpg","./assets/images/36.jpg","./assets/images/37.jpg","./assets/images/38.jpg","./assets/images/39.jpg","./assets/images/40.jpg","./assets/images/41.jpg","./assets/images/42.jpg","./assets/images/43.jpg","./assets/images/44.jpg","./assets/images/45.jpg","./assets/images/47.jpg","./assets/images/48.jpg","./assets/images/49.jpg","./assets/images/50.jpg","./assets/images/51.jpg","./assets/images/52.jpg","./assets/images/53.jpg","./assets/images/54.jpg","./assets/images/55.jpg","./assets/images/56.jpg","./assets/images/57.jpg","./assets/images/58.jpg","./assets/images/59.jpg","./assets/images/60.jpg","./assets/images/61.jpg","./assets/images/62.jpg","./assets/images/63.jpg","./assets/images/64.jpg","./assets/images/65.jpg","./assets/images/66.jpg","./assets/images/67.jpg","./assets/images/68.jpg","./assets/images/69.jpg","./assets/images/70.jpg","./assets/images/71.jpg","./assets/images/72.jpg","./assets/images/73.jpg","./assets/images/74.jpg","./assets/images/75.jpg","./assets/images/76.jpg","./assets/images/77.jpg","./assets/images/78.jpg","./assets/images/79.jpg","./assets/images/80.jpg","./assets/images/81.jpg"
];


const phrases = [
  {line:"dono bhai hain", category:"d"},
  {line:"app ka papa hai🥰", category:"s"},
  {line:"ko Khali kha jaye ga", category:"s"},
  {line:"dono porn star hain", category:"d"},
  {line:"dono kbi Nust nai jayen gy", category:"d"},
  {line:"yakk hai", category:"s"},
  {line:"next friday sabko botal pelaye ga", category:"s"},
  {line:"hadi ki hip marien gy", category:"d"},
  {line:"dono Gay hain", category:"d"},
  {line:"hadi ki hip marey ga", category:"s"},
  {line:"ko mehak noor blow job dey gi", category:"s"},
  {line:"dono kbi Nust nai ja saktey", category:"d"},
  {line:"Gay hai", category:"s"},
  {line:"appki mama ka friend hai", category:"s"},
  {line:"Non-Fc ko chod dey ga", category:"s"},
  {line:"dono appki mama k friends hain", category:"d"},
  {line:"Coach ki 2E marien gy", category:"d"},
  {line:"Non-Fc ka king hai", category:"s"},
  {line:"Ronaldo hai", category:"s"},
  {line:"W game k developer k boobs press karien gy", category:"d"},
  {line:"porn star hai", category:"s"},
  {line:"pka Nust nai jaye ga", category:"s"},
  {line:"dono ko Khali kha jaye ga", category:"d"},
  {line:"sab choro --->(ANAS toondiya hai)", category:"s"},
  {line:"100% Nust jaye ga", category:"s"},
  {line:"Coach ki 2E marien gy", category:"d"},
  {line:"Buu G ka khat karwany gya hai", category:"s"},
  {line:"dono sab k Papa hain", category:"d"},
  {line:"Rand hain", category:"d"},
  {line:"Mehroz bhai ko wrap khelayen gy", category:"d"},
  {line:"ki Nayamat Uncle gand marien gy", category:"s"},
  {line:"Ahmed Shahzad ki recovery karien gy", category:"d"},
  {line:"Sonu Jee ka chupa lagae ga", category:"s"},
  {line:"dono Ahmed Shahzad ka rod indr lein gy", category:"d"},
  {line:"tum sab ka Papa hai", category:"s"},
  {line:"(isko mein kuch nai keh sakta sorry)", category:"s"},
  {line:"teri gand marey ga", category:"s"},
  {line:"pipey ki Tiktoks dekh k muth marien gy", category:"d"},
  {line:"dono ki Shahzad Uncle bund marien gy", category:"d"},
  {line:"died due to ligma", category:"d"},
  {line:"confirm sigma hai", category:"s"}
]


let status = false;


const limit = 7;

function Users() {

  const [prop, setProp] = useState("");
  const [user, setuser] = useState("");
  const [non, setNon] = useState("");
  const [emoji, setEmoji] = useState("");
  const [img, setImg] = useState("");
  const [phrase, setPhrase] = useState("");
  const [random, setRandom] = useState("");
  const [showAuthorize, setShowAuthorize] = useState(false);
  const [authorizeUser, setAuthorizeUser] = useState(false);
  const [cookBtnCount, setCookBtnCount] = useState(() => {
    const savedCount = localStorage.getItem('buttonCount');
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });
  

  const incrementCount = ()=>{
    setCookBtnCount(prevCount => prevCount + 1); 
  }

  useEffect(() => {
    localStorage.setItem('buttonCount', cookBtnCount);
    if(cookBtnCount>=limit){
      document.querySelector('.cook-btn').classList.remove('makeButtonInActive');
    }
    else{
      document.querySelector('.cook-btn').classList.add('makeButtonInActive');
    }
  }, [cookBtnCount]);



  const resetCount = ()=>{
    setCookBtnCount(0);
    localStorage.setItem("buttonCount", cookBtnCount);
  }


  const addProperty = useCallback(()=>{

    let text = document.querySelector('.texttt').value;
    if(!text){
      text = "" ;
    }

    if(text != ""){
      if(!status){
        reset();
        document.querySelector('.error-div').innerHTML = "";
        setProp(text);
        document.querySelector('.texttt').value = "";
        status=true;
      }
    }
    else{
      document.querySelector('.error-div').innerHTML = "Enter something first*";
    }

  }, [prop, setProp]);


  const renderUser = useCallback(()=>{
    if(status){
      reset();
      const index = Math.floor(Math.random() * data.length);
      status = false;
      incrementCount();
      setuser(data[index]);
    }
    else{
      reset();
      document.querySelector('.error-div').innerHTML = "Enter New Property first*";
    }

    
  },[user, setuser]);

  const renderEmoji = useCallback(()=>{

    if(status){
      reset();
      // document.querySelector('.error-div').innerHTML = "";
      // document.querySelector('.emojiDiv').innerHTML = "";
      const index = Math.floor(Math.random() * emojis.length);
      status = false;
      incrementCount();
      setEmoji(emojis[index]);
    }
    else{
      reset();
      document.querySelector('.error-div').innerHTML = "Enter New Property first*";
    }


  },[emoji, setEmoji])

  const pickNon = useCallback(()=>{
    if(status){
      // document.querySelector('.error-div').innerHTML = "";
      // document.querySelector('.nameDiv').innerHTML = "";
      reset();
      const index = Math.floor(Math.random() * nons.length);
      status = false;
      incrementCount();
      setNon(nons[index]);
    }
    else{
      reset();
      document.querySelector('.error-div').innerHTML = "Enter New Property first*";
    }

  },[non, setNon]);

  const renderImg = useCallback(()=>{
    if(status){
      reset();
      // document.querySelector('.error-div').innerHTML = "";
      // document.querySelector('.nonDiv').innerHTML = "";
      const index = Math.floor(Math.random() * images.length);
      status = false;
      incrementCount();
      setImg(images[index]);
    }
    else{
      reset();
      document.querySelector('.error-div').innerHTML = "Enter New Property first*";
    }

    
  },[user, setuser]);
  

  const pickPhrase = useCallback(()=>{
    if(status){
      reset();
      // document.querySelector('.error-div').innerHTML = "";
      // document.querySelector('.nameDiv').innerHTML = "";
      // document.querySelector('.emojiDiv').innerHTML = "";
      const index = Math.floor(Math.random() * phrases.length);
      status = false;
      incrementCount();
      setPhrase(phrases[index].line);
    }
    else{
      reset();
      document.querySelector('.error-div').innerHTML = "Enter New Property first*";
    }

  },[phrase, setPhrase]);


  const returnRandomName = ()=>{
    const index = Math.floor(Math.random() * data.length);
    return data[index];
  }

  const returnRandomPhraseforSingle = ()=>{
    const singlePhrases = phrases.filter(phrase => phrase.category === 's');
    const index = Math.floor(Math.random() * singlePhrases.length);
    return singlePhrases[index].line;
  }

  const returnRandomPhraseforDouble = ()=>{
    const doublePhrases = phrases.filter(phrase => phrase.category === 'd');
    const index = Math.floor(Math.random() * doublePhrases.length);
    return doublePhrases[index].line;
  }

  const returnRandomEmoji = ()=>{
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }


  const randomizeEverything = useCallback(()=>{

    reset();
    setProp("");
    if(cookBtnCount>=limit){
      const option = Math.floor(Math.random() * 2) + 1;

      let finalCook = ``;
      if(option==1){
        finalCook = `${returnRandomName()} ${returnRandomPhraseforSingle()} ${returnRandomEmoji()}`;
      }
      else{

        finalCook = `${returnRandomName()} aur ${returnRandomName()} ${returnRandomPhraseforDouble()} ${returnRandomEmoji()}`;
      }

      resetCount();
      setRandom(finalCook);
    }
    else{
      reset();
      setRandom("");
      document.querySelector('.error-div').innerHTML = `use other features ${limit-cookBtnCount} more times to unlock this feature*`;
      
      setTimeout(()=>{
        document.querySelector('.error-div').innerHTML = "";
      },3000)
    }

  },[random, setRandom, cookBtnCount, setCookBtnCount])


  const displayAuthorize= ()=>{
    setShowAuthorize(prev => !prev);
  }

  const reset = ()=>{
    setNon("");
    setuser("");
    setEmoji("");
    setImg("");
    setPhrase("");
    setRandom("");
    status = false;
    document.querySelector('.error-div').innerHTML = "";
  }

  const resetBtnFun = ()=>{
    setProp("");
    reset();
  }

  useEffect(()=>{
    if(authorizeUser){
      document.querySelector('.authorize-btn-div').classList.add('hide-authorize-btn');
      document.querySelector('.verify-msg-div').classList.remove('hide-authorize-btn');
      document.querySelector('.verify-msg-div').innerHTML = "JEO USER VERIFIED ✅"
      //console.log("This is count: ", cookBtnCount);
    }else{
      document.querySelector('.authorize-btn').innerHTML = "Un-Authorized";
      document.querySelector('.verify-msg-div').classList.add('hide-authorize-btn');
    }
  },[authorizeUser, setAuthorizeUser])
  
  
  return (
    <>
      <div>
        {showAuthorize && <Authorize displayFun={displayAuthorize} setAuthorizeUser={setAuthorizeUser}/>}
      </div>

      <div className='font-bold mb-10 text-9xl text-cyan-300 propp'>{prop}</div>
      <div className='flex justify-center bg-yellow-500 items-center p-2 flex-col relative'>
        <div className='flex flex-col'>
          <div>
            <div>
              <div className='flex justify-start text-gray-700 info-div'>names: {data.length},   emojis: {emojis.length}, pickachu: {nons.length}, images: {images.length}, phrase: {phrases.length}</div>
            </div>
            <div className='flex justify-center '>
              <div>
                <input type="text" placeholder='Enter Literally Anything' className='p-2 texttt mt-2' />
              </div>
              <div className='flex justify-center absolute right-1'>
                <button className='bg-red-500 p-1 text-white mt-2' onClick={resetBtnFun}>Reset</button>
              </div>
            </div>
            <div>
              <button className='ml-5 bg-green-700 p-1 text-white mt-2 addPropBtn' onClick={addProperty}>Add Property</button>
            </div>
          </div>

          <div className='grid [grid-template-columns:1fr_1fr_1fr] gap-4 mt-4'>
            <button className=' bg-black text-cyan-200 rNameBtn' onClick={renderUser}>Pick Random Name</button>
            <button className=' bg-black text-cyan-200  rUsBtn' onClick={pickNon}>Pickachu 🐤</button>
            <button className=' bg-black text-cyan-200  rEmojiBtn' onClick={renderEmoji}>Pick Random Emoji 🗿</button>
            <button className=' bg-black text-cyan-200  rImgBtn' onClick={renderImg}>Pick Random Image 📷</button>
            <button className=' bg-black text-cyan-200 rPhraseBtn' onClick={pickPhrase} disabled={!authorizeUser} >Pick Random Phrase</button>
            <button className=' bg-black text-cyan-200 cook-btn' onClick={randomizeEverything} disabled={!authorizeUser} >Let W-Game Cook</button>

            
          </div>
        </div>

        

        <div className='text-red-500 font-bold mt-4 error-div'></div>



        <div className='flex w-full justify-end mt-5'>
          <div className='authorize-btn-div'>
            <button className='authorize-btn' onClick={displayAuthorize}>Authorized</button>
          </div>
          <div className='verify-msg-div'></div>
        </div>


      </div>

      
      <div className='flex justify-center mt-10'>
          <img src={img} className='imgEle'></img>
      </div>
      

      <div className='font-bold text-2xl mt-10 phraseDiv text-cyan-300 ' >{phrase}</div>
      <div className='font-bold text-9xl mt-10 nameDiv text-cyan-300 '>{user}</div>
      <div className='font-bold text-9xl mt-10 nonDiv text-red-500 '>{non}</div>
      <div className='font-bold text-9xl mt-10 emojiDiv text-cyan-300 ' >{emoji}</div>
      <div className='font-bold text-9xl mt-10 randomDiv text-green-400 ' >{random}</div>

      
      

      
    </>
  )
}

export default Users