import React from 'react'

export const Icon = ({ icon, wordmark }: { icon: string, wordmark: string }) => {
    return (
        <svg width="101" height="38" viewBox="0 0 101 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <>
                <path d="M14.6491 37.117C6.73881 37.117 0.302734 30.3483 0.302734 22.0272V15.3669H6.93285V22.0272C6.93285 26.6918 10.3953 30.4869 14.6491 30.4869C18.9028 30.4869 22.3653 26.6918 22.3653 22.0272V15.0594H28.9954V22.0272C28.9954 30.3483 22.5594 37.117 14.6491 37.117Z" fill={icon} />
                <path d="M3.61872 11.8339C5.61728 11.8339 7.23744 10.2137 7.23744 8.21515C7.23744 6.21659 5.61728 4.59644 3.61872 4.59644C1.62016 4.59644 0 6.21659 0 8.21515C0 10.2137 1.62016 11.8339 3.61872 11.8339Z" fill={icon} />
                <path d="M35.6282 8.42688H15.7354V15.057H35.6282V8.42688Z" fill={icon} />
                <path d="M28.998 15.0595V1.79675L22.3679 1.79675V15.0595H28.998Z" fill={icon} />
            </>
            <>
                <path d="M54.8577 27.6896H39.9797C40.0805 29.0227 40.5114 30.0408 41.2674 30.7464C42.0234 31.452 42.9533 31.8048 44.0545 31.8048C45.695 31.8048 46.8366 31.1118 47.4767 29.7283H54.4747C54.1143 31.137 53.4692 32.4071 52.5343 33.5335C51.5994 34.6625 50.4251 35.547 49.0164 36.1871C47.6052 36.8271 46.0302 37.1472 44.2863 37.1472C42.1847 37.1472 40.3123 36.6986 38.6743 35.8015C37.0338 34.9044 35.7536 33.6242 34.8288 31.956C33.9065 30.2903 33.4453 28.3423 33.4453 26.1121C33.4453 23.8819 33.8989 21.9339 34.8112 20.2682C35.7209 18.6025 36.996 17.3223 38.6365 16.4227C40.277 15.5256 42.1595 15.077 44.2889 15.077C46.4183 15.077 48.21 15.513 49.8253 16.3849C51.4406 17.2568 52.7031 18.4992 53.6129 20.1145C54.5226 21.7298 54.9787 23.6123 54.9787 25.7669C54.9787 26.3817 54.9409 27.0243 54.8628 27.6896H54.8577ZM48.2427 24.0381C48.2427 22.9117 47.8572 22.0146 47.0886 21.3468C46.32 20.6815 45.3573 20.3463 44.2057 20.3463C43.0541 20.3463 42.1746 20.6664 41.4186 21.3065C40.6626 21.9465 40.1939 22.8588 40.0149 24.0356H48.2427V24.0381Z" fill={wordmark} />
                <path d="M71.1193 36.8398L67.0066 30.88L63.5467 36.8398H56.4327L63.5064 25.8829L56.2412 15.3871H63.6223L67.7374 21.3066L71.1974 15.3871H78.3088L71.1193 26.1903L78.5004 36.8398H71.1193Z" fill={wordmark} />
                <path d="M81.0963 20.2682C82.006 18.6025 83.2736 17.3223 84.9015 16.4227C86.5294 15.5256 88.3942 15.077 90.4959 15.077C93.1873 15.077 95.4376 15.7826 97.2445 17.1913C99.0513 18.6 100.236 20.5883 100.8 23.1511H93.8021C93.2125 21.5106 92.0709 20.6916 90.38 20.6916C89.1754 20.6916 88.2128 21.1603 87.4971 22.0952C86.7789 23.0301 86.4211 24.3708 86.4211 26.1121C86.4211 27.8534 86.7789 29.1941 87.4971 30.129C88.2153 31.0639 89.1754 31.5326 90.38 31.5326C92.0709 31.5326 93.2125 30.7136 93.8021 29.0731H100.8C100.236 31.5855 99.0437 33.5587 97.2243 34.9926C95.4049 36.429 93.1621 37.1447 90.4959 37.1447C88.3942 37.1447 86.5294 36.6961 84.9015 35.799C83.2736 34.9019 82.006 33.6217 81.0963 31.9535C80.1866 30.2877 79.7305 28.3398 79.7305 26.1096C79.7305 23.8794 80.1841 21.9314 81.0963 20.2657V20.2682Z" fill={wordmark} />
                <path d="M60.9077 3.02904C60.6254 2.37384 60.197 1.85724 59.6174 1.48176C59.0404 1.10628 58.36 0.917279 57.5813 0.917279C56.848 0.917279 56.1902 1.08864 55.6081 1.43136C55.026 1.77408 54.5648 2.26044 54.2272 2.89296C53.8895 3.52548 53.7206 4.26132 53.7206 5.09796C53.7206 5.9346 53.8895 6.67295 54.2272 7.31051C54.5648 7.94807 55.026 8.43695 55.6081 8.77967C56.1902 9.12239 56.848 9.29376 57.5813 9.29376C58.2667 9.29376 58.8841 9.14508 59.4335 8.8452C59.9828 8.54532 60.4238 8.11692 60.759 7.56C61.0916 7.00308 61.2832 6.35544 61.3285 5.61204H57.1856V4.79808H62.3718V5.52635C62.3239 6.40079 62.0896 7.1946 61.6662 7.90272C61.2428 8.61084 60.6784 9.17027 59.9677 9.57851C59.2596 9.98675 58.4633 10.1909 57.5788 10.1909C56.6942 10.1909 55.84 9.97415 55.0991 9.54071C54.3582 9.10727 53.771 8.50499 53.3452 7.72884C52.9168 6.95268 52.7051 6.07572 52.7051 5.09544C52.7051 4.11516 52.9193 3.2382 53.3452 2.46204C53.7736 1.68588 54.3582 1.0836 55.0991 0.65016C55.84 0.21672 56.669 0 57.5788 0C58.6296 0 59.5519 0.267119 60.3407 0.798839C61.1294 1.33056 61.7015 2.07396 62.0593 3.024H60.9052L60.9077 3.02904Z" fill={wordmark} />
                <path d="M69.4168 10.0926L66.98 5.92701H65.1631V10.0926H64.1777V0.118408H67.1362C68.2349 0.118408 69.0691 0.385528 69.6386 0.917247C70.2056 1.44897 70.4903 2.14953 70.4903 3.01389C70.4903 3.73713 70.2862 4.352 69.878 4.86104C69.4697 5.37008 68.8649 5.7002 68.0686 5.85392L70.6037 10.0926H69.4193H69.4168ZM65.1631 5.11304H67.1488C67.9199 5.11304 68.4995 4.92405 68.8901 4.54353C69.2807 4.16301 69.4748 3.65397 69.4748 3.01641C69.4748 2.37885 69.2858 1.85469 68.9103 1.49685C68.5348 1.13901 67.9426 0.962606 67.1337 0.962606H65.1605V5.11557L65.1631 5.11304Z" fill={wordmark} />
                <path d="M74.392 9.54328C73.6486 9.10984 73.064 8.50756 72.6381 7.7314C72.2097 6.95524 71.998 6.07828 71.998 5.098C71.998 4.11772 72.2122 3.24076 72.6381 2.4646C73.064 1.68844 73.6512 1.08616 74.392 0.652724C75.1329 0.219284 75.9595 0.00256348 76.8717 0.00256348C77.784 0.00256348 78.6231 0.219284 79.3665 0.652724C80.1074 1.08616 80.692 1.68844 81.1129 2.4646C81.5362 3.24076 81.7479 4.11772 81.7479 5.098C81.7479 6.07828 81.5362 6.95524 81.1129 7.7314C80.6895 8.50756 80.1074 9.10984 79.3665 9.54328C78.6256 9.97672 77.794 10.1934 76.8717 10.1934C75.9494 10.1934 75.1329 9.97672 74.392 9.54328ZM78.8449 8.80996C79.427 8.46724 79.8882 7.97584 80.2258 7.33324C80.5635 6.69064 80.7324 5.94724 80.7324 5.10052C80.7324 4.2538 80.5635 3.51292 80.2258 2.87536C79.8882 2.2378 79.427 1.74892 78.8449 1.4062C78.2628 1.06348 77.605 0.892123 76.8717 0.892123C76.1384 0.892123 75.4807 1.06348 74.8986 1.4062C74.3164 1.74892 73.8553 2.2378 73.5176 2.87536C73.1799 3.51292 73.0111 4.2538 73.0111 5.10052C73.0111 5.94724 73.1799 6.69064 73.5176 7.33324C73.8553 7.97584 74.3164 8.46724 74.8986 8.80996C75.4807 9.15268 76.1384 9.32404 76.8717 9.32404C77.605 9.32404 78.2628 9.15268 78.8449 8.80996Z" fill={wordmark} />
                <path d="M84.4951 0.118408V6.39573C84.4951 7.38608 84.7269 8.11688 85.1931 8.59316C85.6593 9.06944 86.2944 9.30632 87.1033 9.30632C87.9122 9.30632 88.5422 9.07196 88.9983 8.60072C89.4544 8.12948 89.6812 7.39364 89.6812 6.39573V0.118408H90.6666V6.38312C90.6666 7.64816 90.3364 8.60072 89.6737 9.23576C89.0109 9.87332 88.1491 10.1908 87.0882 10.1908C86.0272 10.1908 85.1654 9.87332 84.5026 9.23576C83.8399 8.5982 83.5098 7.64816 83.5098 6.38312V0.118408H84.4951Z" fill={wordmark} />
                <path d="M98.3321 5.05516C97.7777 5.57932 96.9461 5.83888 95.8373 5.83888H93.8515V10.0901H92.8662V0.115967H95.8398C96.9385 0.115967 97.7676 0.378043 98.3271 0.899683C98.8865 1.42384 99.1662 2.11684 99.1662 2.98372C99.1662 3.8506 98.889 4.531 98.3346 5.05264L98.3321 5.05516ZM98.1481 2.98625C98.1481 2.32097 97.9642 1.81697 97.5988 1.47425C97.2334 1.13153 96.6462 0.960164 95.8373 0.960164H93.8515V4.9846H95.8373C97.377 4.9846 98.1481 4.31932 98.1481 2.98625Z" fill={wordmark} />
            </>
        </svg>

    )
}

