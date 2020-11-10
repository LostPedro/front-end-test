export * from './routes'
export * from './images'

export const SETTINGS =
  localStorage.getItem('front-end-test-lang') === 'pt-br'
    ? // eslint-disable-next-line global-require
      require('./pt-br')
    : // eslint-disable-next-line global-require
      require('./pt-br')

if (!localStorage.getItem('front-end-test-lang')) {
  localStorage.setItem('front-end-test-lang', 'pt-br')
}
