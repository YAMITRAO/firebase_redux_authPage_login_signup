import React from 'react'
import style from "./RightHeader.module.css";
import ArchiveIcon from '@mui/icons-material/Archive';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import BackspaceIcon from '@mui/icons-material/Backspace';

const RightHeader = () => {
  return (
    <div className={style.rightHeader}>
            <div><ArchiveIcon/><span>Archive</span></div>
            <div><DriveFileMoveIcon/><span>Move</span></div>
            <div><AutoDeleteIcon/><span>Delete</span></div>
            <div><BackspaceIcon/><span>Spam</span></div>
        </div>
  )
}

export default RightHeader