import React from 'react'
import * as S from './style';

export default function Notification() {
    
    function mouseOver() {
        ChangeColorNotification.style.fill = "#32A287";
    }
    function mouseDown() {
        ChangeColorNotification.style.fill = "#C4C4C4";
    }

    return (
        <S.HeaderIconeNotification onMouseOver={mouseOver} onMouseOut={mouseDown} width="35" height="35" viewBox="0 0 35 35" fill="#32A287" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4994 35C27.1635 35 35 27.1658 35 17.5C35 7.83417 27.1635 0 17.4994 0C7.83475 0 0 7.83417 0 17.5C0 27.1658 7.83475 35 17.4994 35Z" fill="white" />
            <g clipPath="url(#clip0)">
                <path id="ChangeColorNotification" d="M17.9995 29C19.5763 29 20.8553 27.713 20.8553 26.125H15.1437C15.1437 27.713 16.4228 29 17.9995 29ZM27.6152 22.2747C26.7527 21.3422 25.1388 19.9393 25.1388 15.3438C25.1388 11.8533 22.7067 9.05918 19.4272 8.37367V7.4375C19.4272 6.64373 18.7879 6 17.9995 6C17.2111 6 16.5719 6.64373 16.5719 7.4375V8.37367C13.2924 9.05918 10.8603 11.8533 10.8603 15.3438C10.8603 19.9393 9.24642 21.3422 8.38392 22.2747C8.11606 22.5645 7.99731 22.9108 7.99954 23.25C8.00445 23.9867 8.57901 24.6875 9.43258 24.6875H26.5665C27.4201 24.6875 27.9951 23.9867 27.9995 23.25C28.0018 22.9108 27.883 22.564 27.6152 22.2747Z" fill="#C4C4C4" />
            </g>
            <circle cx="24" cy="6" r="6" fill="#32A287" />
            <defs>
                <clipPath id="clip0">
                    <rect width="20" height="23" fill="white" transform="translate(8 6)" />
                </clipPath>
            </defs>
        </S.HeaderIconeNotification>
    )
}
