import heroImg from '../../assets/hero_img.svg';
import comprehensiveGraphs from '../../assets/comprehensive_graphs.svg';
import mobile from '../../assets/mobile.svg';
import registerExpenses from '../../assets/register_expenses.svg';

export const hero = {
  id: 'home',
  lightBackground: false,
  headline: 'The piggy bank',
  title: 'Saving was never that easy!',
  subtitle: 'Create your account from your computer or phone and start managing your expenses right away.',
  button: 'Get started',
  imgFirst: false,
  img: heroImg,
  alt: 'Hero image',

}
export const firstSection = {
  id: 'about',
  lightBackground: true,
  headline: 'Track your expenses',
  title: 'You can track all your expenses by category',
  subtitle: 'Keep track of your expenses by registering them by category, with the possibility of filtering them to pinpoint where you can save more.',
  imgFirst: true,
  img: registerExpenses,
  alt: 'Detailed Expenses',
  primary: true
}

export const secondtSection = {
  id: 'about',
  lightBackground: false,
  headline: 'Comprehensive graphs',
  title: 'See your expenses more clearly through our graphs',
  subtitle: 'You can visualize all your expenses throughout the months and organized by category too.',
  imgFirst: false,
  img: comprehensiveGraphs,
  alt: 'Comprehensive graphs',
  primary: true
}

export const thirdSection = {
  id: 'about',
  lightBackground: true,
  headline: 'Everything responsive',
  title: 'Register your expenses on the go',
  subtitle: 'Our website is fully responsive, so you can access everything through your phone and register everything on the go.',
  imgFirst: true,
  img: mobile,
  alt: 'mobile',
  primary: true
}