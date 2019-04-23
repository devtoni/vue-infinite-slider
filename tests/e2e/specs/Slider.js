// https://docs.cypress.io/api/introduction/api.html

const TIME_TO_WAIT = 300
describe('Slider Acceptance test', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '**/photos/random?count=30', 'fixture:unsplashResponse').as(
      'getUnsplashPhotos'
    )

    cy.visit('/')

    cy.wait('@getUnsplashPhotos')
  })

  it('Displays an initial photo', () => {
    cy.get('img').then(el => {
      expect(el).to.have.attr(
        'src',
        'https://images.unsplash.com/photo-1555582882-3adcea584e86?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY3OTM0fQ'
      )
    })
    cy.contains('p', 'Photo by David Billings')
  })

  it('Can select the next photo', () => {
    cy.get('.carousel-control-next').click()
    cy.contains('p', 'Photo by Mae Mu')
  })

  it('Can select the previous photo', () => {
    cy.get('.carousel-control-next').click()
    cy.get('.carousel-control-prev').click()
    cy.contains('p', 'Photo by David Billings')
  })

  it('When clicks on last photo it loads a new set of photos', () => {
    cy.get('.carousel-control-next').click()
    cy.wait(TIME_TO_WAIT)
    cy.get('.carousel-control-next').click()
    cy.wait(TIME_TO_WAIT)
    cy.get('.carousel-control-next').click()
    cy.wait(TIME_TO_WAIT)
    cy.get('.carousel-control-next').click()
    cy.wait(TIME_TO_WAIT)
    cy.get('.carousel-control-next').click()
    cy.wait(TIME_TO_WAIT)

    cy.contains('p', 'Photo by Florencia Viadana')
  })
})
