import React from 'react';
import styles from './styles.module.css';

function openWindow(url){
  console.log(url)
  return 
}

export default function Highlight({children, link}) {
  return (
    <button 
      className={styles.button} 
      onClick={() => {window.open({link}.link, "_self")}}>
        {children}
    </button>
);
}


// window.open({children}, "_self")
// onClick={() => {window.open({link}, "_self")}}