import React from "react";
import * as Falcons from "react-icons/fa";
import * as Iolcons from "react-icons/io";

export const SidebarData =[
    {
        title:'บอร์ดไอเดีย',
        path: '/',
        icon: <Falcons.FaAddressBook />,
        cName: 'nav-text'
    },
    {
        title:'บอร์ดงาน',
        path: '/',
        icon: <Iolcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title:'หมวดหมู่',
        path: '/',
        icon: <Falcons.FaTasks />,
        cName: 'nav-text'
    },
    {
        title:'ติดต่อเจ้าหน้าที่',
        path: '/',
        icon: <Iolcons.IoMdPeople />,
        cName: 'nav-text'
    },


]