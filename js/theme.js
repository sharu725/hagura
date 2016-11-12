function theme() {
     if ( data === 'rgb(255, 255, 255)') {
         
            sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
            sessionStorage.setItem('cc', '#777');
            document.location.reload();
         
     }
    else if (data == null || undefined) {
        sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
        sessionStorage.setItem('cc', '#777');
        document.location.reload();
    }
    else if( data === 'rgb(6, 23, 37)') {
        
        sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
        sessionStorage.setItem('cc', '#333');
        document.location.reload();
  
    }

};

var data = sessionStorage.getItem('bg');
var color = sessionStorage.getItem('cc');
document.body.style.backgroundColor = data;
document.body.style.color = color;
