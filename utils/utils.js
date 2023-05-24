export const ManageContent = ()=>{


    document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((check,index)=>{

      
        check.classList.add(`heading${String(check.nodeName).toLowerCase()}`)

        check.style.color = '#262729'
    })

document.querySelectorAll('ul').forEach(eachUL=>{
    eachUL.classList.add('space-y-5')
    eachUL.classList.add('pl-12')
    eachUL.style.listStyleType='disc'
})

document.querySelectorAll('blockquote').forEach(eachBlockquote=>{

    eachBlockquote.querySelectorAll('span').forEach(eachSpan=>{
        eachSpan.style = '';

        eachSpan.classList.add('leading-8','italic');
    })

    

    eachBlockquote.style.borderLeft = '5px solid #ec0044'

    eachBlockquote.classList.add('relative','space-y-5','bg-[#ffecf1]','text-[1.15rem]','font-bold','px-5','py-3');


    const quoteSign = document.createElement('div');

    quoteSign.textContent=' " '

    quoteSign.classList.add('text-primary','text-[6.5rem]','absolute','-right-5','-bottom-7')


    eachBlockquote.appendChild(quoteSign)




    
})

}