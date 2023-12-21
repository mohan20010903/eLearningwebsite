document.addEventListener('DOMContentLoaded',function(){
    var sourceContainer_1 = document.querySelector('#CDL001');
    var sourceContainer_2 = document.querySelector('#CDL002');
    var sourceContainer_3 = document.querySelector('#CDL003');

    localStorage.setItem('reactjs', sourceContainer_1.outerHTML);
    localStorage.setItem('nodejs', sourceContainer_2.outerHTML);
    localStorage.setItem('python', sourceContainer_3.outerHTML);

});