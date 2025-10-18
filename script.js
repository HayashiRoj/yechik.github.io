document.addEventListener('DOMContentLoaded',function(){
    const m=document.getElementById('menuToggle'),n=document.getElementById('mainNav'),l=document.querySelectorAll('.nav-links a');
    
    m.addEventListener('click',function(){
        n.classList.toggle('active');
        const s=this.querySelectorAll('span');
        if(n.classList.contains('active')){
            s[0].style.transform='rotate(45deg) translate(5px,5px)';
            s[1].style.opacity='0';
            s[2].style.transform='rotate(-45deg) translate(7px,-6px)';
        }else{
            s[0].style.transform='none';
            s[1].style.opacity='1';
            s[2].style.transform='none';
        }
    });
    
    l.forEach(function(a){
        a.addEventListener('click',function(e){
            e.preventDefault();
            l.forEach(function(l){l.classList.remove('active')});
            this.classList.add('active');
            if(window.innerWidth<=768){
                n.classList.remove('active');
                const s=m.querySelectorAll('span');
                s[0].style.transform=s[2].style.transform='none';
                s[1].style.opacity='1';
            }
        });
    });
    
    window.addEventListener('resize',function(){
        if(window.innerWidth>768){
            n.classList.remove('active');
            const s=m.querySelectorAll('span');
            s[0].style.transform=s[2].style.transform='none';
            s[1].style.opacity='1';
        }
    });
});