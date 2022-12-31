let result = document.getElementById('result');
let happy = document.getElementById('happy');

function showWelcome(){
    result.innerText = "What did you think...";
    setTimeout(function(){
        result.innerText = "was going to...";

        setTimeout(function(){
            result.innerText = "happen ? ";
            
            setTimeout(function(){
                result.innerText = "Life continue.";

                setTimeout(function(){
                    result.innerText = "I was joking... :)";

                    setTimeout(function(){
                        result.innerText = "ready go !";

                        setTimeout(function(){
                            result.innerHTML = "Welcome <span>2</span><span>0</span><span>2</span><span>3</span>";
                            happy.innerText = "Happy New Years 🇹🇬️ 🇹🇬️ 🇹🇬️.";
                            animeYears();
                        }, 2000);

                    }, 2000);
                }, 2000);

            }, 3000);

        }, 2000);

    }, 2000);

    
}

//tu pensait qu'il allait se passer quoi

function generateRandomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}

function animeYears(){
    let spans = result.children;
    for (let i=0; i<spans.length; i++){
        spans[i].style.color = `#${generateRandomColor()}`;
    }
    let t = setTimeout(animeYears, 500);
}

function startTime(){
    let now = new Date();
    let toYear = now.getFullYear();
    let toMounth = now.getMonth()+1;
    let toDay = now.getDate();
    let toHours = now.getHours();
    let toMinutes = now.getMinutes();
    if(toYear==2022 && toMounth==12 && toDay==31 && toHours >= 17 && toMinutes >= 14){
        return showWelcome();
    }

    result.innerText = `${toYear}-${toMounth}-${toDay} ${toHours}:${toMinutes}:${now.getSeconds()}`;
    let t = setTimeout(startTime, 500);
}


startTime();
//showWelcome()