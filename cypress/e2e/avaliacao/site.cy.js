
describe("Testando to do", () => {

    beforeEach(() => {
        cy.visit("https://phpauloreis.github.io/todo-list-alpine-js/")
    })

    it ("teste da plataforma",() =>{
        cy.get('h1').should("include.text", "O que fazer hoje?")
    })

    it ("Exibir erro caso não digite nenhuma atividade no campo antes de cadastrar",() =>{
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Digite um título para a tarefa!")
             
        }) 
    })

    it ("Tentar cadastrar atividade sem preencher campo, pressionando enter",() =>{
        cy.get('#todo_title').type("{enter}")
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Digite um título para a tarefa!")          
        }) 
    })

    it("Deveria acessar o site alpine", () => {
        cy.visit("https://phpauloreis.github.io/todo-list-alpine-js/")
    })

    it("Deveria cadastrar uma tarefa", () => {
        cy.get('#todo_title').type("Teste tarefa A{enter}")
        cy.wait(2000)
    })


    it("Deveria finalizar uma tarefa", () => {
        cy.get('.form-check-input').check()
        cy.wait(10000)
    })


    it("Deveria cadastrar uma tarefa", () => {
        cy.get('#todo_title').type("Teste tarefa B{enter}")
        cy.wait(10000)
    })

    it("Deveria fazer a buscar de todas as tarefas em aberto", () => {
        cy.get('.pt-3 > .col-auto > .btn').select('Em aberto');
        cy.wait(10000)
    })

    it("Deveria fazer a buscar de todas as tarefas concluidas", () => {
        cy.get('.pt-3 > .col-auto > .btn').select('Concluídos');
        cy.wait(10000)
    })

    it("Deveria fazer a buscar de todas as tarefas cadastrada", () => {
        cy.get('.pt-3 > .col-auto > .btn').select('Todos');
        cy.wait(2000)
    })
    
    it ("Confirmação de exclusão",() =>{
        cy.get('.text-end > .btn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Tem certeza que deseja remover?")
            cy.wait(10000)
             
        }) 
    })
    
    it ("Confirmação de checkbox ",() =>{
        cy.get('.form-check-input').check()
        cy.wait(10000)
        }) 
    
    it ("Verificação de conteudo ",() =>{
            cy.get('.table-responsive').contains("content")
            cy.wait(10000)
            }) 
        

    
    
})