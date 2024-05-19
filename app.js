
function dateOf() {
    let now = new Date()
    let to = document.getElementById('date').value ;
    let to2 = document.getElementById('month').value;
    let to3 = document.getElementById('year').value;
    let add = `${to3},${to2},${to} `;

    let years = now.getFullYear() - to3;
    let months1 = now.getMonth() - to2;
    let days = now.getDate() - to;
    if (months1 < 0){
        months1 = months1 + 12
        years = years - 1
    }

    if(days < 0){
        days =days + 30;
        months1 =months1 - 1
    }
    console.log(years);
    console.log(months1);
    console.log(days);

   
 document.getElementById('burth').innerText=`${years} / ${months1} / ${days}`;
}

