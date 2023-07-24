
/*EMINEM*/

function makeRequest(url) {
    return new Promise(function(resolve, reject) {
      
      const xhr = new XMLHttpRequest();
    
      xhr.open("GET", url);
  
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(xhr.response)
        } else {
          reject(new Error('Errore durante la richiesta'))
        }
      }
  
      xhr.onerror = function() {
        reject(new Error('Errore di rete'))
      }
  
      xhr.send()
      
    })
  }

  makeRequest('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
  .then( function(rispostaJsonText) {
    let data = JSON.parse(rispostaJsonText).data;
    MenageCovers(data, 'eminemSection');
    MenageTitles(data,'codeEminem');
  })
  .catch( function(err) {
    console.log(err);



  })

  function MenageCovers(listSongs, sectionId){

   
    let container = document.getElementById(sectionId);

    let cards = container.children;


    for(let i = 0; i < 4; i++){     

      let imgCover  = listSongs[i].album.cover;

      let img1 = cards[i].getElementsByTagName('img')[0];

      img1.src = imgCover;

      console.log(imgCover);


      }

  }
      /*METALLICA*/

      
  makeRequest('https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica')
  .then( function(rispostaJsonText) {
    let data = JSON.parse(rispostaJsonText).data;
    MenageCovers(data, 'metallicaSection');
    MenageTitles(data,'codeMetallica');
  })
  .catch( function(err) {
    console.log(err);

  })
    

  /*QUEEN*/


 makeRequest('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
  .then( function(rispostaJsonText) {
    let data = JSON.parse(rispostaJsonText).data;
    MenageCovers(data, 'queenSection');
    MenageTitles(data,'codeQueen');
   


  })
  .catch( function(err) {
    console.log(err);

  })
    


  /*Modale Eminem */

 
  function MenageTitles(listSongs,singerId){
    
  

  //let elementUl = document.querySelector('.modal-body ul');
  
   let elementUl = document.getElementById(singerId);


  for(let i = 0; i < listSongs.length; i++){

    
    let albumTitle = listSongs[i].title;
    
    let elementLi = document.createElement('li');
    
    elementLi.innerText = albumTitle;

    elementUl.appendChild(elementLi);

   
    
  

  }


  

  
  }
 
  
 