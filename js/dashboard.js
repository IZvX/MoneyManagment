const balance = document.getElementById("balance")
const today = new Date();

let month = today.getMonth() + 1;
let day = today.getDate();
// MODAL 1
const modal = document.getElementById("modal");
const modalcontainer = document.getElementById("modal-container");
const modaltitle = document.getElementById("modal-title");

const modalinput1 = document.getElementById("modal-input1");

const modalinput2 = document.getElementById("modal-input2");

const spend = document.getElementById("spend");
const earn = document.getElementById("earn");
const modalcancel = document.getElementById("modal-cancel");
const modalconfirm = document.getElementById("modal-confirm");

const itemList = []



balance.innerText = localStorage.getItem("balance");
spend.onclick = showModalSpend;
earn.onclick = showModalEarn;

modalcancel.onclick = hideModal;


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function showModalSpend() {
    modal.style = "display: absolute;";
    modaltitle.innerText = "Spend"
    modal.style.animation="pop1 0.1s linear";
    modalcontainer.style.animation="slide 0.1s linear"
    document.getElementById("warn").style = "display:none";
}

function showModalEarn() {
    modal.style = "display: absolute;";
    modaltitle.innerText = "Earn"
    modal.style.animation="pop1 0.1s linear";
    modalcontainer.style.animation="slide 0.1s linear"
    document.getElementById("warn").style = "display:none";
}

function hideModal() {
    modal.style = "display: none;";
    balance.innerText = localStorage.getItem("balance")
    document.getElementById("warn").style = "display:none";
    modalinput1.value = null
    modalinput2.value = null 
}

modalconfirm.onclick = confirm

function set() {


}

function create() {

}


function setEarn() {


}

function createEarn() {

}

function confirm() {
    
    if(document.getElementById("modal-title").innerText == "Spend")
    {

        if(localStorage.getItem("item-list") == "" || localStorage.getItem("item-list") == null)
        {
            if(modalinput1.value == null || modalinput2.value == null || modalinput1.value == "" || modalinput2.value == "")
            {
                document.getElementById("warn").style = "display:initial; color:red;"
                console.log("null")
            }
            else{
                console.log("set")




                localStorage.setItem(
                    "balance",
                    parseFloat(localStorage.getItem("balance")) - parseFloat(modalinput2.value)
                    
                );
                localStorage.setItem(
                    "item-list-count",
                    localStorage.getItem("item-list-count")
                )
                
                let info = localStorage.getItem("item-list-count") + ":" + modalinput1.value + ":" + day + "/" + month + ":" + -modalinput2.value.toString()
                let list = []
                list.push(info)
                localStorage.setItem(
                    "item-list",JSON.stringify(list)
                    
                )




               hideModal()
            }
            
            
        }else{



            if(modalinput1.value == null || modalinput2.value == null || modalinput1.value == "" || modalinput2.value == "")
            {
                document.getElementById("warn").style = "display:initial; color:red;"
                console.log("null")
            }
            else{
                console.log("set")



                localStorage.setItem(
                    "balance",
                    parseFloat(localStorage.getItem("balance")) - parseFloat(modalinput2.value)
                    
                );
                localStorage.setItem(
                    "item-list-count",
                    0
                )
                
                let info = localStorage.getItem("item-list-count") + ":" + modalinput1.value + ":" + day + "/" + month + ":" + -modalinput2.value.toString()
                let list = JSON.parse(localStorage.getItem("item-list"));
                list.push(info)
                localStorage.setItem(
                    "item-list",JSON.stringify(list)
                    
                )



               hideModal()
            }
        }
        balance.innerText = localStorage.getItem("balance")




    //earn
    }else{

        if(localStorage.getItem("item-list") == "" || localStorage.getItem("item-list") == null)
        {
            if(modalinput1.value == null || modalinput2.value == null || modalinput1.value == "" || modalinput2.value == "")
            {
                document.getElementById("warn").style = "display:initial; color:red;"
                console.log("null")
            }
            else{
                console.log("set")




                localStorage.setItem(
                    "balance",
                    parseFloat(localStorage.getItem("balance")) + parseFloat(modalinput2.value)
                    
                );
                localStorage.setItem(
                    "item-list-count",
                    localStorage.getItem("item-list-count")
                )
                
                let info = localStorage.getItem("item-list-count") + ":" + modalinput1.value + ":" + day + "/" + month + ":" + "+" + modalinput2.value.toString()
                let list = []
                list.push(info)
                localStorage.setItem(
                    "item-list",JSON.stringify(list)
                    
                )




               hideModal()
            }
            
            
        }else{



            if(modalinput1.value == null || modalinput2.value == null || modalinput1.value == "" || modalinput2.value == "")
            {
                document.getElementById("warn").style = "display:initial; color:red;"
                console.log("null")
            }
            else{
                console.log("set")



                localStorage.setItem(
                    "balance",
                    parseFloat(localStorage.getItem("balance")) + parseFloat(modalinput2.value)
                    
                );
                localStorage.setItem(
                    "item-list-count",
                    0
                )
                
                let info = localStorage.getItem("item-list-count") + ":" + modalinput1.value + ":" + day + "/" + month + ":" + "+" + modalinput2.value.toString()
                let list = JSON.parse(localStorage.getItem("item-list"));
                list.push(info)
                localStorage.setItem(
                    "item-list",JSON.stringify(list)
                    
                )



               hideModal()
            }
        }
        balance.innerText = localStorage.getItem("balance")
    }
}


// MODAL GOAL
const goalmodal = document.getElementById("goal-modal");
const goalmodalcontainer = document.getElementById("goal-modal-container");

const goalmodalinput1 = document.getElementById("goal-modal-input-goal");
const goalmodalinput2 = document.getElementById("goal-modal-input-goal-price");

const goalmodalcancel = document.getElementById("goal-modal-cancel");
const goalmodalconfirm = document.getElementById("goal-modal-confirm");

const editgoal = document.getElementById("edit-goal");

const goalname = document.getElementById("goal-name");
const goalprice = document.getElementById("goal-price");
const goalprogress = document.getElementById("goal-progress");
const progressfill = document.getElementById("progressfill");

goalname.innerText = localStorage.getItem("goal-name")
goalprice.innerText = localStorage.getItem("goal-price")

goalmodalconfirm.onclick = goalconfirm;
goalmodalcancel.onclick = hideGoalModal;
editgoal.addEventListener('click',showGoalModal)

function showGoalModal(event) {
    event.preventDefault()
    goalmodal.style = "display: absolute;";
    goalmodal.style.animation="pop1 0.1s linear";
    goalmodalcontainer.style.animation="slide 0.1s linear"
    console.log("show")
}

function hideGoalModal() {
    goalmodal.style = "display: none;";
    console.log("hide")
}


function goalconfirm() {
    localStorage.setItem(
        "goal-name",
        goalmodalinput1.value
        
    );
    localStorage.setItem(
        "goal-price",
        goalmodalinput2.value
        
    );
    goalmodalinput1.value = null
    goalmodalinput2.value = null
    hideGoalModal()
    goalname.innerText = localStorage.getItem("goal-name")
    goalprice.innerText = localStorage.getItem("goal-price")
    balance.innerText = localStorage.getItem("balance")
}

function clamp(num, min, max) {
    return num <= min 
      ? min 
      : num >= max 
        ? max 
        : num
  }

function calculateGoalProgress() {
    const balancefloat = parseInt(localStorage.getItem("balance"));
    const goalfloat = parseInt(localStorage.getItem("goal-price"));
    const percentage = parseInt((balancefloat/goalfloat)*100);
    goalprogress.innerText = ~~percentage
    progressfill.style = "width:" + clamp(percentage,0,100) + "%;"
}

calculateGoalProgress()

const transition = document.getElementById("transition")
const stats = document.getElementById("stats")

stats.onclick=gotostats

function gotostats() {
    transition.style = "display: initial;";
    transition.style.animation = "transition .5s linear"
    transition.addEventListener('animationend',loadstats)
}

function loadstats() {
    window.location = "stats.html"
}

window.onload = function () {
    transition.style = "display: initial;";
    transition.style.animation = "load .5s linear"
    transition.addEventListener('animationend',clearTransition)

    if (localStorage.getItem("balance") == "NaN" || localStorage.getItem("balance") == null) {
        localStorage.setItem("balance",0)
        location.reload()
    }
    if (localStorage.getItem("item-list-count") == null) {
        localStorage.setItem("item-list-count",0)
        location.reload()
    }
    if (localStorage.getItem("item-list") == null) {
        localStorage.setItem("item-list",[])
        location.reload()
    }
    if (localStorage.getItem("goal-name") == null) {
        localStorage.setItem("goal-name","Nothing set")
        location.reload()
    }
    if (localStorage.getItem("goal-price") == null) {
        localStorage.setItem("goal-price",0)
        location.reload()
    }
}

function clearTransition() {
    transition.style = "display: none;";
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 117) {
        localStorage.clear();
        this.location.reload();
    }
});
