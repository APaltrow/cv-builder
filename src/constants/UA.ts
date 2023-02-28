import { NAVBAR_LINKS_UA } from './navbarLinks';
import { WORK_UA } from './work';

export const UA = {
  navigation: NAVBAR_LINKS_UA,
  work: WORK_UA,

  experience: 'ДОСВІД РОБОТИ',
  duty: `Посадові обов'язки`,
  print: 'Друкувати',
  add: 'Додати',
  skills: { header: 'Навички', item: 'Нова навичка' },
  about: {
    header: 'Про себе',
    item: 'Тут має бути секція про мене в найдрібніших деталях',
  },
  education: {
    header: 'Освіта',
    item: {
      specialization: 'Спеціальність та ступінь',
      university: 'Назва Університету',
      timeline: '2010-2015',
    },
  },
  title: {
    fullname: `Ім'я, Прізвище`,
    position: 'Посада',
  },
  contacts: {
    city: 'Місто, Країна',
    email: 'email@gmail.com',
    phone: '+3 0000-00-00-000',
    social: 'Посилання: /linkedIn.com/me',
  },
  heading: {
    welcome: `Ласкаво просимо да CV Builder'а !`,
    cta: 'Зроби своє резюме всього за кілька хвилин ...',
    start: 'Почати',
  },
  widgets: {
    construct: 'ЗКОНСТРУЮЙ',
    photo: 'ДОДАЙ ФОТО',
    info: 'ЗАПОВНИ',
    print: 'ДРУКУЙ / ЗАВАНТАЖ PDF',
  },
};
