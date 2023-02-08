const InnerCursor = document.querySelector('.inner-cursor');
const OuterCursor = document.querySelector('.outer-cursor');


window.addEventListener('mousemove', (e) =>{


    let x = e.clientX;
    let y = e.clientY;

    InnerCursor.style.left = `${x}px`;
    InnerCursor.style.top = `${y}px`;
    OuterCursor.style.left = `${x}px`;
    OuterCursor.style.top = `${y}px`;
});

let link = Array.from(document.querySelectorAll('a'));


link.forEach(links =>{
    links.addEventListener('mouseover', () =>{

        InnerCursor.classList.add('grow');

    });
    links.addEventListener('mouseleave', () =>{

        InnerCursor.classList.remove('grow');

    });
})

