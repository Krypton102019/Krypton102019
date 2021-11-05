
let from = document.getElementById(`from`)           
let to = document.getElementById(`to`)
let input = document.getElementById(`input`)
let result = document.getElementById(`result`)
let historyList = document.getElementById(`historyList`)
//I. Create Options(function)
function createOption(x,y,z){
let option = document.createElement(`option`)
let t = document.createTextNode(y)
option.setAttribute("value",toNum(z))
option.appendChild(t)
x.appendChild(option)
}

// to Change data.rates[x] into number without commas
function toNum(x){
    return Number( x.replace(",",""))
}

// Create Options (substitute to the functions)
for(x in data.rates){
    // console.log(x,data.rates[x])
createOption(from,x,data.rates[x])
createOption(to,x,data.rates[x])
}
// ====================================================
//II. Calculation


//3 Storage
function store(){
    localStorage.setItem("record",historyList.innerHTML )
};





// 2 Create Tr

function createTr(x){
    //6.REmoveRowSpacer
    let rowSpaceer = document.getElementById("rowSpacer")
   if(rowSpaceer){ rowSpaceer.remove()}
// Create TR
    let tr =document.createElement("tr")
    x.map(function(el){ 
        let td = document.createElement("td")
    let text = document.createTextNode(el)
    td.appendChild(text)
    tr.appendChild(td)})
    
    historyList.appendChild(tr)
}
 

// 1.SUmbit
document.getElementById("calc").addEventListener("submit",function(e){
//    get state 
   e.preventDefault() //*
   let inputValue = input.value
   let fromValue = from.value
   let toValue = to.value

// process
// iv
let fromTExt = inputValue+from.options[from.selectedIndex].innerText //Get inner html of the selected option(news)
let toText = to.options[to.selectedIndex].innerText

// i
let first = inputValue*fromValue
let second = first/toValue ;
let Result = second.toFixed(2) //toFixed*
// v
let date = new Date().toLocaleString()
console.log(Result)
let finalReult = Result+ "  " + to.options[to.selectedIndex].innerText
let arr = [date,fromTExt,toText,finalReult]


// set State
// ii
result.innerHTML = Result
input.value = ""
input.focus() // focus again to input (new)
from.value = ""
to.value = "1"
// iii
createTr(arr)

store()
})

function test(){
    console.log(from.options[from.selectedIndex].innerText)
}
    
 
//==================================================================

// 4.Appear LIsts
function appearList(){//data shi yin list mr por ml
if(localStorage.getItem("record")){historyList.innerHTML =     localStorage.getItem("record")}
//m shi woo so yin There is no data so p pya ml
else{historyList.innerHTML =`<tr id="rowSpacer"  ><td id="rs" colspan="4">There is no Record</td></tr>`}}
appearList()

//5. Reload
 document.getElementById("clear").addEventListener("click",function(){
  window.location.reload()
    localStorage.clear("record")
    console.log("cleared")
   
 })



 function changeMode() {
    document.body.classList.toggle("night-mode");
    document.getElementById("modeIcon").classList.toggle("fa-sun");
}


// Create Option
// (i) Crate Option Function

//1. option ko phan ti mk function taku loe
//2. ak htl mr parameter nay yar mr (x,y,z) so p phan ti ya ml >> x=from/data , y = text htl mr createText mr yay() , z attribute values twe ,
//3. p dok" creat Textnode" nk "crate Elements" twe phan t ya ml
// 4. option mr value htae >>>>option.setAttribute("value",toNum(z))
// 5. append lote syr shi dr appended lote >>> option htl mr text ko appended lote , z htl mr option ko appended lote                                       

// (ii)

//1.attribute tan foe twe ko number change ya ml 
// 2.Number( x.replace(",","") x ka data.rate[x] win mr ta ni values twe

// (iii)
// p dok data htl ka hr twe ko map nk asar twin dok
// data.map(funciton(el){ku na ka apor ka "create option function" mr asar twin "from" nk "to" nk na ku fik dk atwt kyunt 2 khr twin  })




// Calculation frunction
//1. inputvalue * fromValue / toValue =  so dr ko yay
// 2. ak dr ko list hote (Create TR)
// 3. pyin save localStorage.setitem("record",historyList.innerhtml)
// 4. p yin por ag lote list mr ak mr "storage" htl mr data yin shi tamyo , m shi yin "There is no Record" so p "td","tr" ta ku phan ti ml
// 5.create tr mr let rowSpaceer = document.getElementById("rowSpacer")
//                if(rowSpaceer){ rowSpaceer.remove()} ....."tr" por ddr nk There is no Record pyout twr ag lote
