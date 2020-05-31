import fetch from 'isomorphic-fetch';
  export function GetData(url) {
    return new Promise((resolve, reject) =>{
    fetch(url, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((res) => {
        resolve(res);
    })
    .catch((error) => {
       reject(error);
    });
    
    });
  }
  const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    };
  
    
    