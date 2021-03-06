import detailed_expenses from '../../images/detailed_expenses.svg'
import graphs from '../../images/graphs.svg';
import mobile from '../../images/mobile.svg';

export const firstSection = {
  id: 'about',
  lightBackground: false,
  headline: 'Track your expenses',
  title: 'You can track all your expenses by category',
  subtitle: 'Keep track of your expenses by registering them by category, with the possibility of filtering them to pinpoint where you can save more.',
  button: 'Get started',
  imgFirst: false,
  img: detailed_expenses,
  alt: 'Detailed Expenses',
  primary: true
}

export const secondtSection = {
  id: 'about',
  lightBackground: true,
  headline: 'Comprehensive graphs',
  title: 'See your expenses more clearly through our graphs',
  subtitle: 'You can visualize all your expenses throughou the months and organized by category too.',
  button: '?????',
  imgFirst: true,
  img: graphs,
  alt: 'Graph',
  primary: true
}

export const thirdSection = {
  id: 'about',
  lightBackground: false,
  headline: 'Everything responsive',
  title: 'Register your expenses on the go',
  subtitle: 'Our website is fully responsive, so you can access everything through your phone and register everything on the go.',
  button: '??????',
  imgFirst: false,
  img: mobile,
  alt: 'mobile',
  primary: true
}