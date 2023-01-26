
var radio_id = {
    0 :'https://mediaplus.radio-tochka.com/mediaplus',
    1 :'https://listen.myrh.ru/id02707',
    2 :'https://glassroomrec.s02.radio-tochka.com:5015/stream',
    3 :'https://str5.pcradio.ru/rad_ondffm-hi',
    4 :'http://a1.radioheart.ru:8003/RH17982',
    5 :'https://radioamici.ru:8015/stream',
    6 :'https://listen.myrh.ru/id017314',
    7 :'https://myradio24.org/171028',
    8 :'http://stream.laut.fm/radiolovedance',
    9 :'https://stream.avradio.ru:1085/stream'
}
    let cnt_id = '0';
    let myVideo = document.getElementById("audio_id"); 
    let pl_ic = document.querySelector('.pl_ic');
    let btn = document.querySelectorAll(".station_btn");
    let imgPoker = document.getElementById("img");
    let imgNum = document.getElementById("img_number");
    
         
    document.addEventListener('keyup', function (event){
       // event.preventDefault();
       
       // alert(event.which);
        if (event.code === 'MediaPlayPause')
            playPause(null);
        
    });

    function playPause(id) { 
       
        btn.forEach(el => {
            el.removeAttribute('disabled');
        });

        if(id){
           
            btn[id].setAttribute("disabled", "");
        }else{
            btn[cnt_id].setAttribute("disabled", "");
        }
        
        console.log(id);
        console.log(cnt_id);
       // btn[id].setAttribute("disabled", "");
       // document.querySelectorAll("button");

      if (myVideo.paused) 
      {
      
        if(id){
           // btn.getAttribute('disabled');
          //  btn[cnt_id].removeAttribute('disabled');
            myVideo.src = radio_id[id];
           // cnt_id = id;
           // btn[id].setAttribute("disabled", "");
        }else{
           // btn[0].setAttribute("disabled", "");
        }
        
        myVideo.play(); 
        pl_ic.removeAttribute('class', 'fa fa-play');
        pl_ic.setAttribute('class', 'fa fa-pause')
       // play.textContent = 'Pause';
       
      }
        
      else 
      {
        if(id){
          //  btn[cnt_id].removeAttribute('disabled');
            myVideo.src = radio_id[id];
           // btn[id].setAttribute("disabled", "");
            if(cnt_id === id){
                myVideo.pause(); 
                pl_ic.removeAttribute('class', 'fa fa-pause');
                pl_ic.setAttribute('class', 'fa fa-play')
               // play.textContent = `Play`;
            }else{
               //  cnt_id = id;
                 myVideo.play(); 
                 pl_ic.removeAttribute('class', 'fa fa-play');
                pl_ic.setAttribute('class', 'fa fa-pause')
                // play.textContent = 'Pause';
            }
           

        }else{
             myVideo.pause(); 
             pl_ic.removeAttribute('class', 'fa fa-pause');
                pl_ic.setAttribute('class', 'fa fa-play')
              //  play.textContent = `Play`
        }
        
      }
      if(id){
        cnt_id = id;
      }
      
    } 
    
    let img_cnt = 0;
    let img = {
       0 : 'poker11.jpg',
       1 : 'poker22.jpg',
       2 : 'poker33.jpg',
       3 : 'poker44.jpg',
       4 : 'poker55.jpg',
       5 : 'poker66.jpg',
       6 : 'poker7.jpg',
       7 : 'poker88.jpg',
       8 : 'poker99.jpg',
    
    }
    function imgReload(){
        img_cnt++;
    
        if(img[img_cnt] === undefined){
            img_cnt = 0;
       
        }
        
        imgNum.textContent = " "+img_cnt+" ";
        imgPoker.src = img[img_cnt];
        
    }
  