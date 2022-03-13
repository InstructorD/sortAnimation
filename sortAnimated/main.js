let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let arr = [9,8,7,6,5,4,3,2,1]
let outerLoopCount1=document.getElementById('outerLoopCount1')
let innerLoopCount1 = document.getElementById('innerLoopCount1')
let countEl1 = document.getElementById("count1")

let outerLoopCount2=document.getElementById('outerLoopCount2')
let innerLoopCount2 = document.getElementById('innerLoopCount2')
let countEl2 = document.getElementById("count2")

const bubbleSortAnim = (array, speed = 1) => {
  arr.forEach(num=> {
  let el = document.createElement('div');
  el.setAttribute('style', `height:${num*10}px; width:20px; background-color: #39d`)
  container1.appendChild(el)
  })

  const swapeach = (i)=>{
  let els = document.querySelectorAll('#container1 div');
  els.forEach(el => {
    el.style.border='none'
  })
  if (i < arr.length-1){
    i++;
    innerLoopCount1.innerText = i;
    let a = document.querySelector(`#container1 div:nth-child(${i})`)
    let b = document.querySelector(`#container1 div:nth-child(${i+1})`)
      a.style.border = "5px solid red"
      b.style.border = "5px solid black"
    let c=a.cloneNode()
    if(a.style.height>b.style.height){
      container1.replaceChild(c, b)
    container1.replaceChild(b, a)
    }
       a.style.border = "5px solid red"
      b.style.border = "5px solid black"
    setTimeout(()=> {swapeach(i)}, 1000*speed);
  }
}
const repeatX = (x)=>{
  swapeach(0)
  if(x<arr.length){
     setTimeout(() => {
      swapeach(0)
        repeatX(x)
    }, (arr.length-1)*1000*speed)
    x++
    document.getElementById("outerLoopCount1").innerText = x
  }
}
  repeatX(0)
}
//bubbleSortAnim(arr, 1)

const animateBubble = (arr, speed = 1)  => {
  container1.innerHTML=""
  let count = 1;
  let i = 0;
  arr.forEach(num=> {
  let el = document.createElement('div');
  el.setAttribute('data-num', num)
  el.setAttribute('style', `height:${num*10}px; width:20px; background-color: #39d`)
  container1.appendChild(el)
  })
  outerLoopCount1.innerText = "outerloop: "+(i+1);
  const swap = (j) => {
    
    if(j < arr.length){
      let a = document.querySelector(`#container1 div:nth-child(${j})`)
      let b = document.querySelector(`#container1 div:nth-child(${j+1})`)
      a.style.border = "5px solid red"
      b.style.border = "5px solid black"
    let c = a.cloneNode();
     innerLoopCount1.innerText = "inner loop: "+j;
     countEl1.innerHTML = "steps: "+count;
      j++
      count++
      setTimeout(() => {
        if (a.getAttribute('data-num')*1 > b.getAttribute('data-num')*1) {
          container1.replaceChild(c, b)
          container1.replaceChild(b, a)
        }
      },250*speed )
      setTimeout(() => {
        let els = document.querySelectorAll('#container1 div');
        els.forEach(el => {
         el.style.border = 'none'
        })
        swap(j)
      },500*speed)
    }else{
      i++
      if (i < arr.length) {
        outerLoopCount1.innerText = "outerloop: "+(i+1);
          swap(1)
      }
    }
  }
  swap(1)
}
//animateBubble(arr, 0.1)


const animateSelection = (arr, speed = 1)  => {
  container2.innerHTML=""
  let count = 1;
  let i = 1;
  arr.forEach(num=> {
  let el = document.createElement('div');
  el.setAttribute('data-num', num)
  el.setAttribute('style', `height:${num*10}px; width:20px; background-color: #39d`)
  container2.appendChild(el)
  })
  outerLoopCount2.innerText = "outerloop: "+(i+1);
  const swap = (j) => {
    
    if(j < arr.length +1){
      let a = document.querySelector(`#container2 div:nth-child(${i})`)
      let b = document.querySelector(`#container2 div:nth-child(${j})`)
      a.style.border = "5px solid red"
      b.style.border = "5px solid black"
    let c = a.cloneNode();
     innerLoopCount2.innerText = "inner loop: "+j;
     countEl2.innerHTML = "steps: "+count;
      j++
      count++
      setTimeout(() => {
        if (a.getAttribute('data-num')*1 > b.getAttribute('data-num')*1) {
          container2.replaceChild(c, b)
          container2.replaceChild(b, a)
        }
      },250*speed )
      setTimeout(() => {
        let els = document.querySelectorAll('#container2 div');
        els.forEach(el => {
         el.style.border = 'none'
        })
        swap(j)
      },500*speed)
    }else{
      i++
      if (i < arr.length) {
        outerLoopCount2.innerText = "outerloop: "+(i+1);
          swap(i+1)
      }
    }
  }
  swap(i+1)
}
animateSelection([9,8,7,6,5,4,3,2,1])
