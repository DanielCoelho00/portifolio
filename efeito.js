
window.revelar = ScrollReveal({ reset: true })

//pagina inicial
revelar.reveal('.efeito-decoração',
    {
        duration: 2000,
        distance: '90px',
        origin: 'top'
    })

revelar.reveal('.efeito-botaocontato',
    {
        duration: 2000,
        distance: '90px',
        delay: 600
    })

//projetos
revelar.reveal('.efeito-slider',
    {
        duration: 2000,
        distance: '400px',
        origin: 'left'
    })

//formação

revelar.reveal('.efeito-timeline1',
    {
        duration: 2000,
        distance: '400px',
        origin: 'right'
    })

revelar.reveal('.efeito-timeline4',
    {
        duration: 2000,
        distance: '400px',
        origin: 'left',
        delay: 300
    })


//experiência
revelar.reveal('.efeito-row1',
    {
        duration: 2000,
        distance: '400px',
        origin: 'left',
    })

//contato
revelar.reveal('.efeito-contato',
    {
        duration: 2000,
        distance: '400px',
        origin: 'left',
    })

revelar.reveal('.efeito-form1',
    {
        duration: 2000,
        distance: '400px',
        origin: 'bottom',
        delay: 300
    })


//sobre mim
revelar.reveal('.efeito-img',
    {
        duration: 2000,
        distance: '400px',
        origin: 'left',
       
    })

    revelar.reveal('.efeito-txt',
    {
        duration: 2000,
        distance: '400px',
        origin: 'right',
       
    })

    //responsivo
    let btnmenu = document.getElementById('btn-menu')
    let menu = document.getElementById('menu-mobile')
    let overlay = document.getElementById('overlay-menu')

    btnmenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')    
    })

    menu.addEventListener('click',()=>{
        menu.classList.remove('abrir-menu')    
        })

        overlay.addEventListener('click',()=>{
            menu.classList.remove('abrir-menu')    
            })



