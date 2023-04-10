describe('template spec', () => {
  it('open_url', () => {
    cy.visit('https://www.hsbc.co.in')// checking website or url

  })

  it('logo_validation', () => {
    cy.visit('https://www.hsbc.co.in')// checking website or url
    cy.get('img[src="/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg"]').should('be.visible') // validation of logo
  })

   it('tittle_validation', () => {
    cy.visit('https://www.hsbc.co.in')// checking website or url
        cy.contains(' HSBC India - Credit Cards, NRI Services, Saving and Deposit') // title validation 
  })

  
   it('click_on_login_button', () => {
    cy.visit('https://www.hsbc.co.in')// checking website or url
    cy.get('[class="selected-item login-button only-one-link"]').eq(0).click() // click on login button 
    
  })

   it('Validation_Long_ON_Tittle', () => {
    cy.visit('https://www.hsbc.co.in/security/')// checking website or url
    cy.contains('Log On')// validation of heading of Log On heading     
  })

  it('Checking_continew_button is_available', () => {
    cy.visit('https://www.hsbc.co.in/security/')// checking website or url
    cy.get('button[id="username_submit_btn"]').eq(0).should('be.visible')//for checking button is visible or not   

})

 it('Checking_continew_button is_Disable', () => {
    cy.visit('https://www.hsbc.co.in/security/')// checking website or url
    cy.get('button[id="username_submit_btn"]').eq(0).should('be.disabled')//for checking button is disabled
})

 it('Random_Email_ID', () => {
    cy.visit('https://www.hsbc.co.in/security/')// checking website or url
    cy.get('input[id="username"]').type("Abhishek.Bhorgade@gmail.com",{force:true})// validation for username 
})

it('continue_button_enabled', () => {
    cy.visit('https://www.hsbc.co.in/security/')// checking website or url
    cy.get('input[id="username"]').type("Abhishek.Bhorgade@gmail.com",{force:true})// validation for username 
    cy.get('button[id="username_submit_btn"]').eq(0).should('be.enabled')//for checking button is enabled
})


it('RememberMe_checkbox_Unchecked', () => {
    cy.visit('https://www.hsbc.co.in/security/')// checking website or url
    cy.get('input[id="username"]').type("Abhishek.Bhorgade@gmail.com",{force:true})// validation for username 
    cy.get('input[id="rememberMe"]')// remember me checkbox is present 
})


it('validation of  Question Mark', () => {
    cy.visit('https://www.hsbc.co.in/security/')// checking website or url
    cy.get('input[id="username"]').type("Abhishek.Bhorgade@gmail.com",{force:true})// validation for username 
     cy.get('[class="icon icon-circle-help-solid help-icon"]').should('be.visible')// validation of  Question Mark
})


it('Clicking Question Mark/tooltip', () => {
    cy.visit('https://www.hsbc.co.in/security/')// checking website or url
    cy.get('[class="icon icon-circle-help-solid help-icon"]').click()// clicking  Question Mark
})


it('Checking Username Heading', () => {
    cy.visit('https://www.hsbc.co.in/security/')// checking website or url
    cy.get('[class="icon icon-circle-help-solid help-icon"]').click()// clicking  Question Mark
    cy.contains('Username') // checking username heading
})


it('Checking Close Button', () => {
    cy.visit('https://www.hsbc.co.in/security/')// checking website or url
    cy.get('[class="icon icon-circle-help-solid help-icon"]').click()// clicking  Question Mark
    cy.get('[class="icon icon-delete"]').should('be.visible')// checking close button
})


it('Clicking Close Button', () => {
    cy.visit('https://www.hsbc.co.in/security/')// checking website or url
    cy.get('[class="icon icon-circle-help-solid help-icon"]').click()// clicking  Question Mark
    cy.get('[class="icon icon-delete"]').click()// clicking close button 
        
  })

})