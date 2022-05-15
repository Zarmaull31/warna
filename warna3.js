const acakwarna = document.getElementById('acakwarna')
acakwarna.onclick= function(){
    const merah = Math.round( Math.random()*255+1)
    const ijo =Math.round( Math.random()*255+1)
    const biru   = Math.round( Math.random()*255+1)

    document.body.style.backgroundColor='rgb('+ merah+', '+ ijo+', '+ biru+')'
    
}

const ubahwarna = document.createElement('button')
const isi = document.createTextNode('Ubah Warna')
ubahwarna.appendChild(isi)
ubahwarna.setAttribute('type', 'button')
acakwarna.before(ubahwarna)

ubahwarna.addEventListener('click', function(){
    document.body.classList.toggle('salmon')
})


const smerah = document.querySelector('input[name = smerah]')
smerah.addEventListener('input', function(){
    const red = smerah.value;
    document.body.style.backgroundColor='rgb('+ red+', 0, 0)'
})

const sijo = document.querySelector('input[name = sijo]')
sijo.addEventListener('input', function(){
    const red = smerah.value;
    const green = sijo.value
    document.body.style.backgroundColor='rgb('+ red+', '+ green+', 0)'
})

const sbiru = document.querySelector('input[name = sbiru]')
sbiru.addEventListener('input', function(){
    const red = smerah.value;
    const green = sijo.value
    const blue = sbiru.value
    document.body.style.backgroundColor='rgb('+ red+', '+ green+', '+ blue+')'
})


