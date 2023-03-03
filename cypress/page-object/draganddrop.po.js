class Drag { 

    dragAndDropElement({index, x, y}){ 

        cy.get('#draggable').eq(index)
            .invoke('attr', 'data-input-id').then((val)=>{

                const inputId = val 
                cy.log(inputId)
                cy.get(`[data-input-id="${inputId}"]`)
                    .trigger('mousedown', { which: 1 })
                    .trigger('mousemove', x, y, { force: true }, { delay: 1000 })
                    .trigger('mouseup', { force: true }, { delay: 1000 })
            })
    }

    probbe(id,x,y){
        cy.get(id)
            .trigger('mousedown', { which: 1, pageX: x, pageY: y })
            .trigger('mousemove', { which: 1, pageX: 950, pageY: 200 })
            .trigger('mouseup')
            .wait(3000)
            .trigger('mousedown', { which: 1, pageX: 950, pageY: 200 })
            .trigger('mousemove', { which: 1, pageX: x, pageY: y })
            .trigger('mouseup')


    }
}