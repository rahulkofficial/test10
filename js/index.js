document.addEventListener('DOMContentLoaded',()=>{
    
    const btn=document.getElementById('btn')
    const inp=document.getElementById('inp')
    const list=document.getElementById('list')
    const error=document.getElementById('error')

    if(list.innerHTML===""){
        error.textContent="there is no tasks yet...!"
    }
    
    btn.addEventListener('click',()=>{
        
        if(inp.value===""){
            error.textContent="Enter something...!"
        }
        else{
            error.textContent=""
            const li=document.createElement('li')
            li.innerHTML=`<button class="com">complete</button><h1>${inp.value}</h1><button class="del"><img src="../images/delete.png" alt="delete" /></button>`
            list.appendChild(li)
            inp.value=""
        }

        const dels=document.querySelectorAll('button.del')
        console.log(dels)

        dels.forEach((item)=>{
            item.addEventListener('click',()=>{
                const parent=item.parentNode
                parent.remove()
            })
        })
        


        const coms=document.querySelectorAll('button.com')

        coms.forEach((item)=>{
            item.addEventListener('click',()=>{
                const parent=item.parentNode
                parent.classList.add('co')
            })
        })


    })

    

})


