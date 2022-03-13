let container = document.getElementById("container");
let arr = [9,8,7,6,5,4,3,2,1]
let outerLoopCount=document.getElementById('outerLoopCount')
let innerLoopCount = document.getElementById('innerLoopCount')
let countEl = document.getElementById("count")

const bubbleSortAnim = (array, speed = 1) => {
  arr.forEach(num=> {
  let el = document.createElement('div');
  el.setAttribute('style', `height:${num*10}px; width:20px; background-color: #39d`)
  container.appendChild(el)
  })

  const swapeach = (i)=>{
  let els = document.querySelectorAll('#container div');
  els.forEach(el => {
    el.style.border='none'
  })
  if (i < arr.length-1){
    i++;
    innerLoopCount.innerText = i;
    let a = document.querySelector(`#container div:nth-child(${i})`)
    let b = document.querySelector(`#container div:nth-child(${i+1})`)
      a.style.border = "5px solid red"
      b.style.border = "5px solid black"
    let c=a.cloneNode()
    if(a.style.height>b.style.height){
      container.replaceChild(c, b)
    container.replaceChild(b, a)
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
    document.getElementById("outerLoopCount").innerText = x
  }
}
  repeatX(0)
}

//bubbleSortAnim(arr, 1)

const anim2 = (arr)  => {
  let count = 1;
  let i = 0;
  arr.forEach(num=> {
  let el = document.createElement('div');
  el.setAttribute('style', `height:${num*10}px; width:20px; background-color: #39d`)
  container.appendChild(el)
  })
  const swap = (j) => {
    
    if(j < arr.length){
      let a = document.querySelector(`#container div:nth-child(${j})`)
      let b = document.querySelector(`#container div:nth-child(${j+1})`)
      a.style.border = "5px solid red"
      b.style.border = "5px solid black"
    let c = a.cloneNode();
     innerLoopCount.innerText = "inner loop: "+j;
     countEl.innerHTML = "steps: "+count;
      j++
      count++
      setTimeout(() => {
        if (a.style.height > b.style.height) {
          container.replaceChild(c, b)
          container.replaceChild(b, a)
        }
      },500 )
      setTimeout(() => {
        let els = document.querySelectorAll('#container div');
        els.forEach(el => {
         el.style.border = 'none'
        })
        swap(j)
      },1000)
    }else{
      ++i
       outerLoopCount.innerText = i+1;
      if (i < arr.length) {
          swap(1)
      }
    }
  }
  swap(1)
}
anim2(arr)
