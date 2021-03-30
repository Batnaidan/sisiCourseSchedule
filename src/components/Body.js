import React, { Component } from 'react';
import './Body.css';
import ListCourse from './ListCourse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import Modal from './Modal';
import Button from '@material-ui/core/Button';
import TimeTable from './TimeTable';

// chosenCourse stores data from classes, indexes specify individual courses
// and the value contains "data" object. Data object's children include:
// "Row" - Array that contains schedules of individual courses
// "_id" - unique id , "v" - course id, "nm" - name of course

let chosenCourse = [
  {
    row: [
      {
        hid: '133952',
        weekday: '3',
        timeid: '7',
        durtime: '2',
        schedType: '1',
        s_name: 'Комплекс анализ',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '120',
        r_bname: '1',
        e: 'Батзориг .У',
        dw: '16',
        d: '2020.9.2',
        ch: '10',
        cnt: '25',
        cm: '',
        t: '12:40-14:10',
        snx: 'MATH311',
        cre: '3',
        courseid: '23524',
        eid: '10011003157',
        roomid: '339',
        grid: '0',
      },
      {
        hid: '133953',
        weekday: '3',
        timeid: '9',
        durtime: '2',
        schedType: '1',
        s_name: 'Комплекс анализ',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '120',
        r_bname: '1',
        e: 'Батзориг .У',
        dw: '16',
        d: '2020.9.2',
        ch: '10',
        cnt: '25',
        cm: '',
        t: '14:20-15:50',
        snx: 'MATH311',
        cre: '3',
        courseid: '23524',
        eid: '10011003157',
        roomid: '339',
        grid: '0',
      },
    ],
    _id: '5ffd89b4572b501388851bd4',
    v: '23524',
    nm: 'Комплекс анализ',
  },
  {
    row: [
      {
        hid: '136551',
        weekday: '2',
        timeid: '13',
        durtime: '2',
        schedType: '1',
        s_name: 'Магадлалын онол, математик статистик',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '118',
        r_bname: '1',
        e: 'Итгэл.М',
        dw: '16',
        d: '2020.9.1',
        ch: '17',
        cnt: '24',
        cm: '',
        t: '17:40-19:10',
        snx: 'MATH320',
        cre: '3',
        courseid: '26502',
        eid: '10011001577',
        roomid: '790',
        grid: '0',
      },
      {
        hid: '136553',
        weekday: '3',
        timeid: '13',
        durtime: '2',
        schedType: '1',
        s_name: 'Магадлалын онол, математик статистик',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '116',
        r_bname: '3a',
        e: 'Итгэл.М',
        dw: '16',
        d: '2020.9.2',
        ch: '17',
        cnt: '24',
        cm: '',
        t: '17:40-19:10',
        snx: 'MATH320',
        cre: '3',
        courseid: '26502',
        eid: '10011001577',
        roomid: '11',
        grid: '0',
      },
    ],
    _id: '5ffd89b4572b501388851bd7',
    v: '26502',
    nm: 'Магадлалын онол, математик статистик',
  },
  {
    row: [
      {
        hid: '131291',
        weekday: '1',
        timeid: '5',
        durtime: '2',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '117',
        r_bname: '3a',
        e: 'Гармаа.Д',
        dw: '12',
        d: '2020.9.7',
        ch: '51',
        cnt: '52',
        cm: '',
        t: '11:00-12:30',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011000160',
        roomid: '130',
        grid: '20094',
      },
      {
        hid: '131293',
        weekday: '1',
        timeid: '7',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '115',
        r_bname: '3a',
        e: 'Гармаа.Д',
        dw: '16',
        d: '2020.9.7',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '12:40-15:05',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011000160',
        roomid: '14',
        grid: '20094',
      },
      {
        hid: '131295',
        weekday: '5',
        timeid: '1',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '115',
        r_bname: '3a',
        e: 'Гармаа.Д',
        dw: '16',
        d: '2020.9.4',
        ch: '25',
        cnt: '26',
        cm: '',
        t: '07:40-10:05',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011000160',
        roomid: '14',
        grid: '20094',
      },
      {
        hid: '131297',
        weekday: '2',
        timeid: '7',
        durtime: '2',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '117',
        r_bname: '3a',
        e: 'Алтангэрэл.Ч',
        dw: '12',
        d: '2020.9.1',
        ch: '51',
        cnt: '52',
        cm: '',
        t: '12:40-14:10',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011002092',
        roomid: '130',
        grid: '20095',
      },
      {
        hid: '131299',
        weekday: '3',
        timeid: '7',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '222',
        r_bname: '3a',
        e: 'Алтангэрэл.Ч',
        dw: '16',
        d: '2020.9.2',
        ch: '25',
        cnt: '26',
        cm: '',
        t: '12:40-15:05',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011002092',
        roomid: '260',
        grid: '20095',
      },
      {
        hid: '131300',
        weekday: '5',
        timeid: '7',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '115',
        r_bname: '3a',
        e: 'Алтангэрэл.Ч',
        dw: '16',
        d: '2020.9.4',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '12:40-15:05',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011002092',
        roomid: '14',
        grid: '20095',
      },
      {
        hid: '131301',
        weekday: '2',
        timeid: '7',
        durtime: '2',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '114',
        r_bname: '3a',
        e: 'Цэрэннадмид.Т',
        dw: '12',
        d: '2020.9.1',
        ch: '52',
        cnt: '52',
        cm: '',
        t: '12:40-14:10',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011003076',
        roomid: '13',
        grid: '20096',
      },
      {
        hid: '131302',
        weekday: '3',
        timeid: '1',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '310 б',
        r_bname: '4',
        e: 'Цэрэннадмид.Т',
        dw: '16',
        d: '2020.9.2',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '07:40-10:05',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011003076',
        roomid: '169',
        grid: '20096',
      },
      {
        hid: '131303',
        weekday: '4',
        timeid: '4',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '115',
        r_bname: '3a',
        e: 'Цэрэннадмид.Т',
        dw: '16',
        d: '2020.9.3',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '10:05-12:30',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011003076',
        roomid: '14',
        grid: '20096',
      },
      {
        hid: '131304',
        weekday: '5',
        timeid: '7',
        durtime: '2',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '114',
        r_bname: '3a',
        e: 'Цэрэннадмид.Т',
        dw: '12',
        d: '2020.9.4',
        ch: '51',
        cnt: '52',
        cm: '',
        t: '12:40-14:10',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011003076',
        roomid: '13',
        grid: '20099',
      },
      {
        hid: '131305',
        weekday: '5',
        timeid: '10',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '115',
        r_bname: '3a',
        e: 'Цэрэннадмид.Т',
        dw: '16',
        d: '2020.9.4',
        ch: '25',
        cnt: '26',
        cm: '',
        t: '15:05-17:30',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011003076',
        roomid: '14',
        grid: '20099',
      },
      {
        hid: '131306',
        weekday: '5',
        timeid: '11',
        durtime: '2',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '114',
        r_bname: '3a',
        e: 'Энхтуул.Б',
        dw: '12',
        d: '2020.9.4',
        ch: '51',
        cnt: '52',
        cm: '',
        t: '16:00-17:30',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011003307',
        roomid: '13',
        grid: '20098',
      },
      {
        hid: '131307',
        weekday: '2',
        timeid: '4',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '302',
        r_bname: '2',
        e: 'Энхтуул.Б',
        dw: '16',
        d: '2020.9.1',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '10:05-12:30',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011003307',
        roomid: '195',
        grid: '20098',
      },
      {
        hid: '131308',
        weekday: '2',
        timeid: '7',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '302',
        r_bname: '2',
        e: 'Энхтуул.Б',
        dw: '16',
        d: '2020.9.1',
        ch: '25',
        cnt: '26',
        cm: '',
        t: '12:40-15:05',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011003307',
        roomid: '195',
        grid: '20098',
      },
      {
        hid: '131309',
        weekday: '1',
        timeid: '5',
        durtime: '2',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '234',
        r_bname: '3a',
        e: 'Наранчимэг.Б',
        dw: '12',
        d: '2020.9.7',
        ch: '52',
        cnt: '52',
        cm: '',
        t: '11:00-12:30',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011001064',
        roomid: '28',
        grid: '20097',
      },
      {
        hid: '131310',
        weekday: '4',
        timeid: '3',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '302',
        r_bname: '2',
        e: 'Наранчимэг.Б',
        dw: '16',
        d: '2020.9.3',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '09:20-11:45',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011001064',
        roomid: '195',
        grid: '20097',
      },
      {
        hid: '131311',
        weekday: '4',
        timeid: '6',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '302',
        r_bname: '2',
        e: 'Наранчимэг.Б',
        dw: '16',
        d: '2020.9.3',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '11:45-14:10',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011001064',
        roomid: '195',
        grid: '20097',
      },
      {
        hid: '131312',
        weekday: '5',
        timeid: '4',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '115',
        r_bname: '3a',
        e: 'Цэрэннадмид.Т',
        dw: '16',
        d: '2020.9.4',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '10:05-12:30',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011003076',
        roomid: '14',
        grid: '20099',
      },
      {
        hid: '136365',
        weekday: '2',
        timeid: '1',
        durtime: '2',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '310',
        r_bname: '3a',
        e: 'Наранчимэг.Б',
        dw: '12',
        d: '2020.9.1',
        ch: '51',
        cnt: '52',
        cm: '',
        t: '07:40-09:10',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011001064',
        roomid: '283',
        grid: '21009',
      },
      {
        hid: '136366',
        weekday: '4',
        timeid: '9',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '222',
        r_bname: '3a',
        e: 'Наранчимэг.Б',
        dw: '16',
        d: '2020.9.3',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '14:20-16:45',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011001064',
        roomid: '260',
        grid: '21009',
      },
      {
        hid: '136367',
        weekday: '1',
        timeid: '7',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '302',
        r_bname: '2',
        e: 'Наранчимэг.Б',
        dw: '16',
        d: '2020.9.7',
        ch: '25',
        cnt: '26',
        cm: '',
        t: '12:40-15:05',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011001064',
        roomid: '195',
        grid: '21009',
      },
      {
        hid: '136680',
        weekday: '2',
        timeid: '3',
        durtime: '2',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '117',
        r_bname: '3a',
        e: 'Алтангэрэл.Ч',
        dw: '12',
        d: '2020.9.1',
        ch: '51',
        cnt: '52',
        cm: '',
        t: '09:20-10:50',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011002092',
        roomid: '130',
        grid: '21036',
      },
      {
        hid: '136684',
        weekday: '5',
        timeid: '1',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '310 б',
        r_bname: '4',
        e: 'Бямбасүрэн.И',
        dw: '16',
        d: '2020.9.4',
        ch: '25',
        cnt: '26',
        cm: '',
        t: '07:40-10:05',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011002428',
        roomid: '169',
        grid: '21036',
      },
      {
        hid: '136686',
        weekday: '2',
        timeid: '11',
        durtime: '3',
        schedType: '1',
        s_name: 'Алгоритмын үндэс',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '106а',
        r_bname: '1',
        e: 'Бямбасүрэн.И',
        dw: '16',
        d: '2020.9.1',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '16:00-18:25',
        snx: 'CSII200',
        cre: '3',
        courseid: '24682',
        eid: '10011002428',
        roomid: '578',
        grid: '21036',
      },
    ],
  },
  {
    row: [
      {
        hid: '131512',
        weekday: '3',
        timeid: '9',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '234',
        r_bname: '3a',
        e: 'Оюун-Эрдэнэ.Н',
        dw: '16',
        d: '2020.9.2',
        ch: '72',
        cnt: '75',
        cm: '',
        t: '14:20-15:50',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011000075',
        roomid: '28',
        grid: '20137',
      },
      {
        hid: '131513',
        weekday: '4',
        timeid: '3',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '234',
        r_bname: '3a',
        e: 'Оюун-Эрдэнэ.Н',
        dw: '16',
        d: '2020.9.3',
        ch: '51',
        cnt: '52',
        cm: '',
        t: '09:20-10:50',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011000075',
        roomid: '28',
        grid: '20139',
      },
      {
        hid: '131514',
        weekday: '2',
        timeid: '2',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '222',
        r_bname: '3a',
        e: 'Лхамролом.Ц',
        dw: '16',
        d: '2020.9.1',
        ch: '24',
        cnt: '25',
        cm: '',
        t: '08:25-10:05',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011003626',
        roomid: '260',
        grid: '20137',
      },
      {
        hid: '131515',
        weekday: '4',
        timeid: '5',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '227',
        r_bname: '3a',
        e: 'Лхамролом.Ц',
        dw: '16',
        d: '2020.9.3',
        ch: '24',
        cnt: '25',
        cm: '',
        t: '11:00-12:30',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011003626',
        roomid: '255',
        grid: '20137',
      },
      {
        hid: '131516',
        weekday: '5',
        timeid: '9',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '215',
        r_bname: '3a',
        e: 'Лхамролом.Ц',
        dw: '16',
        d: '2020.9.4',
        ch: '24',
        cnt: '25',
        cm: '',
        t: '14:20-15:50',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011003626',
        roomid: '254',
        grid: '20137',
      },
      {
        hid: '131517',
        weekday: '5',
        timeid: '1',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '222',
        r_bname: '3a',
        e: 'Гантулга.Г',
        dw: '16',
        d: '2020.9.4',
        ch: '25',
        cnt: '26',
        cm: '',
        t: '07:40-09:10',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011003762',
        roomid: '260',
        grid: '20139',
      },
      {
        hid: '131518',
        weekday: '1',
        timeid: '11',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '310',
        r_bname: '3a',
        e: 'Гантулга.Г',
        dw: '16',
        d: '2020.9.7',
        ch: '52',
        cnt: '52',
        cm: '',
        t: '16:00-17:30',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011003762',
        roomid: '283',
        grid: '20138',
      },
      {
        hid: '131519',
        weekday: '1',
        timeid: '13',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '227',
        r_bname: '3a',
        e: 'Гантулга.Г',
        dw: '16',
        d: '2020.9.7',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '17:40-19:10',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011003762',
        roomid: '255',
        grid: '20138',
      },
      {
        hid: '131520',
        weekday: '4',
        timeid: '7',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '108',
        r_bname: '3a',
        e: 'Гантулга.Г',
        dw: '16',
        d: '2020.9.3',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '12:40-14:10',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011003762',
        roomid: '426',
        grid: '20138',
      },
      {
        hid: '131521',
        weekday: '1',
        timeid: '7',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '227',
        r_bname: '3a',
        e: 'Гантулга.Г',
        dw: '16',
        d: '2020.9.7',
        ch: '26',
        cnt: '26',
        cm: '',
        t: '12:40-14:10',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011003762',
        roomid: '255',
        grid: '20139',
      },
      {
        hid: '136545',
        weekday: '1',
        timeid: '3',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '234',
        r_bname: '3a',
        e: 'Оюун-Эрдэнэ.Н',
        dw: '16',
        d: '2020.9.7',
        ch: '28',
        cnt: '52',
        cm: '',
        t: '09:20-10:50',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011000075',
        roomid: '28',
        grid: '21019',
      },
      {
        hid: '136550',
        weekday: '4',
        timeid: '13',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '222',
        r_bname: '3a',
        e: 'Лхамролом.Ц',
        dw: '16',
        d: '2020.9.3',
        ch: '14',
        cnt: '26',
        cm: '',
        t: '17:40-19:10',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011003626',
        roomid: '260',
        grid: '21019',
      },
      {
        hid: '136552',
        weekday: '3',
        timeid: '1',
        durtime: '2',
        schedType: '1',
        s_name: 'Өгөгдлийн бүтэц',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '115',
        r_bname: '3a',
        e: 'Лхамролом.Ц',
        dw: '16',
        d: '2020.9.2',
        ch: '14',
        cnt: '26',
        cm: '',
        t: '07:40-09:10',
        snx: 'ICSI202',
        cre: '3',
        courseid: '26010',
        eid: '10011003626',
        roomid: '14',
        grid: '21019',
      },
    ],
  },
];

// Array to hold possible schedules

let schedules = [0];

export default class Body extends Component {
  state = {
    visible: false,
    credits: 0,
    // chosenClasses[][0] - id of class
    // chosenClasses[][1] - name of class
    // chosenClasses[][2] - department name of class
    // chosenClasses[][3] - credits of class

    chosenClasses: [
      ['25047', 'Алгебр', 'dept1', '3'],
      ['2', 'two', 'dept2', '3'],
      ['3', 'three', 'dept3', '4'],
    ],
    generated: false
  };

  // temp array to hold schedule of one class
  // eq of time: (Weekday - 1) * 18 + timeid

  timetable = new Array(126).fill(0);

  // Algorithm to generate schedule and store in array schedules
  // go through classes one by one, every instance individually... recursive function checking cases every time.
  /* case 1:
  course is empty
  skip;

  case 2:
  course has ci = 4
  choose 1;

  case 3:
  course has grid = 0      {

  case 3.1:
  course has only lecture

  case 3.2:
  course has no lecture

  case 3.3:
  course has lecture with sem/labs 

  }

  case 4:
  course has grid =/= 0    {

  case 4.1: 
  course has only lectures

  case 4.2:
  course has no lectures

  case 4.3:
  course has lectures with sem/lab combinations {

    case 4.3.1:
    course has 2 different teachers on one class so that lectures grids are same and seminars grid are same

  }tengisdogshit

  } */

  // Checks if course overlaps with chosenCourse array schedule.
  // Rreturns true if overlapping, false if not.

  checkOverlap = (timeidx, timelen) => {
    for (let j = 0; j < timelen; j++) {
      if (this.timetable[timeidx + j] != 0) {
        return true;
      }
    }
    return false;
  };

  // Returns array containing indexes of classes filtered by type (aka 'ci')
  // This is done so that instead of looping over every index in array and filtering by type there,
  // a for loop is called on an array containing only indexes of classes of the specified type, to save resources

  findIndexInChosenCoursesByType = (idx, ci) => {
    var arr = [];
    for (let i = 0; i < chosenCourse[idx].row.length; i++) {
      if (chosenCourse[idx].row[i].ci == ci) {
        arr.push(i);
      }
    }
    return arr;
  };

  // Function to push timetable array to schedule, because array.push() is not working lmao idk why the fuck
  pushToSchedule = () => {
    let len = schedules.push([]);
    for (let x = 0; x < 126; x++) {
      schedules[len - 1].push(this.timetable[x]);
    }
  };

  // Function to run when ci value is 4

  whenCiIs4 = (idx) => {
    for (let i = 0; i < chosenCourse[idx].row.length; i++) {
      var timeidx =
        (Number(chosenCourse[idx].row[i].weekday) - 1) * 18 +
        Number(chosenCourse[idx].row[i].timeid) -
        1;
      var timelen = Number(chosenCourse[idx].row[i].durtime);
      if (this.checkOverlap(timeidx, timelen) == false) {
        for (let j = 0; j < timelen; j++) {
          this.timetable[timeidx + j] = chosenCourse[idx].row[i];
        }
        if (idx == chosenCourse.length - 1) {
          this.pushToSchedule();
        } else {
          setTimeout(this.generate_schedules(idx + 1), 500);
        }
        for (let j = 0; j < timelen; j++) {
          this.timetable[timeidx + j] = 0;
        }
      }
    }
  };

  whenGridIs0 = (idx) => {
    // get arrays of indexes of classes by type

    let lecArr = this.findIndexInChosenCoursesByType(idx, 1);
    let semArr = this.findIndexInChosenCoursesByType(idx, 2);
    let labArr = this.findIndexInChosenCoursesByType(idx, 3);
    if (lecArr.length > 0) {
      // has Lecture

      for (let i of lecArr) {
        let timeidx =
          (Number(chosenCourse[idx].row[i].weekday) - 1) * 18 +
          Number(chosenCourse[idx].row[i].timeid) -
          1;
        let timelen = Number(chosenCourse[idx].row[i].durtime);
        if (this.checkOverlap(timeidx, timelen) == false) {
          for (let k = 0; k < timelen; k++) {
            this.timetable[timeidx + k] = chosenCourse[idx].row[i];
          }
          if (semArr.length > 0) {
            // lecture with sem

            for (let j of semArr) {
              let sem_timeidx =
                (Number(chosenCourse[idx].row[j].weekday) - 1) * 18 +
                Number(chosenCourse[idx].row[j].timeid) -
                1;
              let sem_timelen = Number(chosenCourse[idx].row[j].durtime);
              if (this.checkOverlap(sem_timeidx, sem_timelen) == false) {
                for (let k = 0; k < sem_timelen; k++) {
                  this.timetable[sem_timeidx + k] = chosenCourse[idx].row[j];
                }
                if (labArr.length > 0) {
                  // lecture with sem and lab

                  for (let jj of labArr) {
                    let lab_timeidx =
                      (Number(chosenCourse[idx].row[jj].weekday) - 1) * 18 +
                      Number(chosenCourse[idx].row[jj].timeid) -
                      1;
                    let lab_timelen = Number(chosenCourse[idx].row[jj].durtime);
                    if (this.checkOverlap(lab_timeidx, lab_timelen) == false) {
                      for (let k = 0; k < lab_timelen; k++) {
                        this.timetable[lab_timeidx + k] =
                          chosenCourse[idx].row[jj];
                      }
                      if (idx == chosenCourse.length - 1) {
                        this.pushToSchedule();
                      } else {
                        setTimeout(this.generate_schedules(idx + 1), 500);
                      }
                      for (let k = 0; k < lab_timelen; k++) {
                        this.timetable[lab_timeidx + k] = 0;
                      }
                    }
                  }
                  for (let k = 0; k < sem_timelen; k++) {
                    this.timetable[sem_timeidx + k] = 0;
                  }
                } else {
                  // lecture with sem, no lab

                  if (idx == chosenCourse.length - 1) {
                    this.pushToSchedule();
                  } else {
                    setTimeout(this.generate_schedules(idx + 1), 500);
                  }
                  for (let k = 0; k < sem_timelen; k++) {
                    this.timetable[sem_timeidx + k] = 0;
                  }
                }
              }
            }
            for (let k = 0; k < timelen; k++) {
              this.timetable[timeidx + k] = 0;
            }
          } else if (labArr.length > 0) {
            // lecture with lab

            for (let i of labArr) {
              let lab_timeidx =
                (Number(chosenCourse[idx].row[i].weekday) - 1) * 18 +
                Number(chosenCourse[idx].row[i].timeid) -
                1;
              let lab_timelen = Number(chosenCourse[idx].row[i].durtime);
              if (this.checkOverlap(lab_timeidx, lab_timelen) == false) {
                for (let k = 0; k < lab_timelen; k++) {
                  this.timetable[timeidx + k] = chosenCourse[idx].row[i];
                }
                if (idx == chosenCourse.length - 1) {
                  this.pushToSchedule();
                } else {
                  setTimeout(this.generate_schedules(idx + 1), 500);
                }
                for (let k = 0; k < lab_timelen; k++) {
                  this.timetable[lab_timeidx + k] = 0;
                }
              }
            }
            for (let k = 0; k < timelen; k++) {
              this.timetable[timeidx + k] = 0;
            }
          } else {
            // only lecture

            if (idx == chosenCourse.length - 1) {
              this.pushToSchedule();
            } else {
              setTimeout(this.generate_schedules(idx + 1), 500);
            }
            for (let k = 0; k < timelen; k++) {
              this.timetable[timeidx + k] = 0;
            }
          }
        }
      }
    } else {
      // no lecture

      if (semArr.length > 0) {
        // only seminars

        for (let i of semArr) {
          let sem_timeidx =
            (Number(chosenCourse[idx].row[i].weekday) - 1) * 18 +
            Number(chosenCourse[idx].row[i].timeid) -
            1;
          let sem_timelen = Number(chosenCourse[idx].row[i].durtime);
          if (this.checkOverlap(sem_timeidx, sem_timelen) == false) {
            for (let k = 0; k < sem_timelen; k++) {
              this.timetable[sem_timeidx + k] = chosenCourse[idx].row[i];
            }
            if (idx == chosenCourse.length - 1) {
              this.pushToSchedule();
            } else {
              setTimeout(this.generate_schedules(idx + 1), 500);
            }
            for (let k = 0; k < sem_timelen; k++) {
              this.timetable[sem_timeidx + k] = 0;
            }
          }
        }
      } else if (labArr.length > 0) {
        // only labs

        for (let i of labArr) {
          let lab_timeidx =
            (Number(chosenCourse[idx].row[i].weekday) - 1) * 18 +
            Number(chosenCourse[idx].row[i].timeid) -
            1;
          let lab_timelen = Number(chosenCourse[idx].row[i].durtime);
          if (this.checkOverlap(lab_timeidx, lab_timelen) == false) {
            for (let k = 0; k < lab_timelen; k++) {
              this.timetable[lab_timeidx + k] = chosenCourse[idx].row[i];
            }
            if (idx == chosenCourse.length - 1) {
              this.pushToSchedule();
            } else {
              setTimeout(this.generate_schedules(idx + 1), 500);
            }
            for (let k = 0; k < lab_timelen; k++) {
              this.timetable[lab_timeidx + k] = 0;
            }
          }
        }
      } else {
        console.log(
          'This course is empty but it passed the empty check somehow. Idx: ' +
            idx
        );
      }
    }
  };

  /*
   * Function to return unique grids in a class's schedule.
   */
  getUniqueGrids = (idx) => {
    var arr = [];
    for (let i = 0; i < chosenCourse[idx].row.length; i++) {
      if (!arr.includes(chosenCourse[idx].row[i].grid)) {
        arr.push(chosenCourse[idx].row[i].grid);
      }
    }
    return arr;
  };

  findIndexInChosenCoursesByTypeAndGrid = (idx, ci, grid) => {
    var arr = [];
    for (let i = 0; i < chosenCourse[idx].row.length; i++) {
      if (chosenCourse[idx].row[i].ci == ci) {
        if (chosenCourse[idx].row[i].grid == grid) {
          arr.push(i);
        }
      }
    }
    return arr;
  };

  whenGridIsNot0 = (idx) => {
    // get arrays of indexes of classes by type
    var gridArr = this.getUniqueGrids(idx);
    for (let outer_i = 0; outer_i < gridArr.length; outer_i++) {
      let lecArr = this.findIndexInChosenCoursesByTypeAndGrid(
        idx,
        1,
        gridArr[outer_i]
      );
      let semArr = this.findIndexInChosenCoursesByTypeAndGrid(
        idx,
        2,
        gridArr[outer_i]
      );
      let labArr = this.findIndexInChosenCoursesByTypeAndGrid(
        idx,
        3,
        gridArr[outer_i]
      );
      if (lecArr.length > 0) {
        // has Lecture

        for (let i of lecArr) {
          let timeidx =
            (Number(chosenCourse[idx].row[i].weekday) - 1) * 18 +
            Number(chosenCourse[idx].row[i].timeid) -
            1;
          let timelen = Number(chosenCourse[idx].row[i].durtime);
          if (this.checkOverlap(timeidx, timelen) == false) {
            for (let k = 0; k < timelen; k++) {
              this.timetable[timeidx + k] = chosenCourse[idx].row[i];
            }
            if (semArr.length > 0) {
              // lecture with sem

              for (let j of semArr) {
                let sem_timeidx =
                  (Number(chosenCourse[idx].row[j].weekday) - 1) * 18 +
                  Number(chosenCourse[idx].row[j].timeid) -
                  1;
                let sem_timelen = Number(chosenCourse[idx].row[j].durtime);
                if (this.checkOverlap(sem_timeidx, sem_timelen) == false) {
                  for (let k = 0; k < sem_timelen; k++) {
                    this.timetable[sem_timeidx + k] = chosenCourse[idx].row[j];
                  }
                  if (labArr.length > 0) {
                    // lecture with sem and lab

                    for (let jj of labArr) {
                      let lab_timeidx =
                        (Number(chosenCourse[idx].row[jj].weekday) - 1) * 18 +
                        Number(chosenCourse[idx].row[jj].timeid) -
                        1;
                      let lab_timelen = Number(
                        chosenCourse[idx].row[jj].durtime
                      );
                      if (
                        this.checkOverlap(lab_timeidx, lab_timelen) == false
                      ) {
                        for (let k = 0; k < lab_timelen; k++) {
                          this.timetable[lab_timeidx + k] =
                            chosenCourse[idx].row[jj];
                        }
                        if (idx == chosenCourse.length - 1) {
                          this.pushToSchedule();
                        } else {
                          setTimeout(this.generate_schedules(idx + 1), 500);
                        }
                        for (let k = 0; k < lab_timelen; k++) {
                          this.timetable[lab_timeidx + k] = 0;
                        }
                      }
                    }
                    for (let k = 0; k < sem_timelen; k++) {
                      this.timetable[sem_timeidx + k] = 0;
                    }
                  } else {
                    // lecture with sem, no lab

                    if (idx == chosenCourse.length - 1) {
                      this.pushToSchedule();
                    } else {
                      setTimeout(this.generate_schedules(idx + 1), 500);
                    }
                    for (let k = 0; k < sem_timelen; k++) {
                      this.timetable[sem_timeidx + k] = 0;
                    }
                  }
                }
              }
              for (let k = 0; k < timelen; k++) {
                this.timetable[timeidx + k] = 0;
              }
            } else if (labArr.length > 0) {
              // lecture with lab

              for (let i of labArr) {
                let lab_timeidx =
                  (Number(chosenCourse[idx].row[i].weekday) - 1) * 18 +
                  Number(chosenCourse[idx].row[i].timeid) -
                  1;
                let lab_timelen = Number(chosenCourse[idx].row[i].durtime);
                if (this.checkOverlap(lab_timeidx, lab_timelen) == false) {
                  for (let k = 0; k < lab_timelen; k++) {
                    this.timetable[timeidx + k] = chosenCourse[idx].row[i];
                  }
                  if (idx == chosenCourse.length - 1) {
                    this.pushToSchedule();
                  } else {
                    setTimeout(this.generate_schedules(idx + 1), 500);
                  }
                  for (let k = 0; k < lab_timelen; k++) {
                    this.timetable[lab_timeidx + k] = 0;
                  }
                }
              }
              for (let k = 0; k < timelen; k++) {
                this.timetable[timeidx + k] = 0;
              }
            } else {
              // only lecture

              if (idx == chosenCourse.length - 1) {
                this.pushToSchedule();
              } else {
                setTimeout(this.generate_schedules(idx + 1), 500);
              }
              for (let k = 0; k < timelen; k++) {
                this.timetable[timeidx + k] = 0;
              }
            }
          }
        }
      } else {
        // no lecture

        if (semArr.length > 0) {
          // only seminars

          for (let i of semArr) {
            let sem_timeidx =
              (Number(chosenCourse[idx].row[i].weekday) - 1) * 18 +
              Number(chosenCourse[idx].row[i].timeid) -
              1;
            let sem_timelen = Number(chosenCourse[idx].row[i].durtime);
            if (this.checkOverlap(sem_timeidx, sem_timelen) == false) {
              for (let k = 0; k < sem_timelen; k++) {
                this.timetable[sem_timeidx + k] = chosenCourse[idx].row[i];
              }
              if (idx == chosenCourse.length - 1) {
                this.pushToSchedule();
              } else {
                setTimeout(this.generate_schedules(idx + 1), 500);
              }
              for (let k = 0; k < sem_timelen; k++) {
                this.timetable[sem_timeidx + k] = 0;
              }
            }
          }
        } else if (labArr.length > 0) {
          // only labs

          for (let i of labArr) {
            let lab_timeidx =
              (Number(chosenCourse[idx].row[i].weekday) - 1) * 18 +
              Number(chosenCourse[idx].row[i].timeid) -
              1;
            let lab_timelen = Number(chosenCourse[idx].row[i].durtime);
            if (this.checkOverlap(lab_timeidx, lab_timelen) == false) {
              for (let k = 0; k < lab_timelen; k++) {
                this.timetable[lab_timeidx + k] = chosenCourse[idx].row[i];
              }
              if (idx == chosenCourse.length - 1) {
                this.pushToSchedule();
              } else {
                setTimeout(this.generate_schedules(idx + 1), 500);
              }
              for (let k = 0; k < lab_timelen; k++) {
                this.timetable[lab_timeidx + k] = 0;
              }
            }
          }
        } else {
          console.log(
            'This course is empty but it passed the empty check somehow. Idx: ' +
              idx
          );
        }
      }
    }
  };

  // TODO: save memory by adding class info on the first index of timetables,
  // ----- then adding the amount of indexes needed to go back to get the class info to the latter indexes

  generate_schedules = (idx) => {
    console.log('Generating...... fuck you');
    if (idx >= chosenCourse.length) {
      console.log('ARray is empty bruh or u reached the end of the loop');
      return;
    }
    if (chosenCourse[idx].row.length != 0) {
      if (this.findIndexInChosenCoursesByType(idx, 4).length > 0) {
        this.whenCiIs4(idx);
      } else if (chosenCourse[idx].row[0].grid == '0') {
        this.whenGridIs0(idx);
      } else {
        this.whenGridIsNot0(idx);
      }
    } else {
      setTimeout(this.generate_schedules(idx + 1), 500);
    }
  };

  removeCourse(i) {
    let temp = this.state.chosenClasses.slice();
    temp.splice(i, 1);
    this.setState({
      chosenClasses: temp,
    });
  }

  addCredits(creds) {
    this.setState({
      credits: this.state.credits + parseInt(creds),
    });
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div id="outer-div">
        <div id="list-container">
          <p id="guide-text">Хичээлээ сонгоно уу</p>
          <div id="list-wrapper">
            <div>
              <List>
                {this.state.chosenClasses.map((e, i) => (
                  <ListCourse
                    e={this.state.chosenClasses[i]}
                    removeCourses={this.removeCourse.bind(this)}
                    key={i}
                    index={i}
                  ></ListCourse>
                ))}
                <Divider style={{ margin: '2vh' }} />
                <ListItem button onClick={this.show.bind(this)}>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add course" />
                </ListItem>
              </List>
            </div>
          </div>
          <div id="list-footer-container">
            <p id="credits-text">{this.state.credits} / 21 credits</p>
            <Button
              variant="contained"
              style={{ backgroundColor: '#79cae0' }}
              size="large"
              onClick={() => {
                schedules = [];
                this.generate_schedules(0);
                window.scrollTo({ bottom: 0, behavior: 'smooth' });
                setTimeout(this.setState({generated: true}), 5000);
              }}
            >
              Generate Schedule
            </Button>
            <Button
              onClick={() => {
                for (let j = 0; j < schedules.length; j++) {
                  for (let i = 0; i < 126; i++) {
                    if (schedules[j][i] != 0) setTimeout(console.log(1), 500);
                    else setTimeout(console.log(0), 500);
                  }
                  console.log(
                    '------------------------------------------------------------------------'
                  );
                }
                console.log(schedules.length);
              }}
            >
              Test
            </Button>
          </div>
        </div>
        {this.state.visible ? (
          <div id="modal-container">
            <Modal
              visible={this.state.visible}
              onClose={this.hide.bind(this)}
              chosenCourses={chosenCourse} 
            ></Modal>
          </div>
        ) : null}
        <div id="graph-container">
          <TimeTable dataFromParent={schedules} />
        </div>
      </div>
    );
  }
}
