import {HiOutlineViewGrid} from 'react-icons/hi'
import { RiCommunityFill } from "react-icons/ri";
import { MdOutlinePayment, MdEmojiPeople, MdAccountCircle, MdLogout } from "react-icons/md";
import { FaRegSadCry, FaReceipt, FaRupeeSign, FaLock } from "react-icons/fa"
import { IoChatbubbleSharp } from "react-icons/io5";

export const sidebar_det = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/db',
        icon: HiOutlineViewGrid
    },
    {
        key: 'accounts',
        label: 'Accounts Summary',
        path: '/db/summaryacc',
        icon: FaRupeeSign
    },
    {
        key: 'events',
        label: 'Events',
        path: '/db/events',
        icon: RiCommunityFill
    },
    {
        key: 'payments',
        label: 'Society Payments',
        path: '/db/payments',
        icon: MdOutlinePayment
    },
    {
        key: 'visitors',
        label: 'Visitors Log',
        path: '/db/visitors',
        icon: MdEmojiPeople
    },
    {
        key: 'reservation',
        label: 'Facility Reservation',
        path: '/db/reserve',
        icon: FaLock
    },
    {
        key: 'complains',
        label: 'Register Complaints',
        path: '/db/complains',
        icon: FaRegSadCry
    },
    {
        key: 'trackreceipts',
        label: 'Payment History',
        path: '/db/trackpay',
        icon: FaReceipt
    }
];
