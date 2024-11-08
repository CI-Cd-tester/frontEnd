import App from './App'


describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(<App />)
  })
})