import styles from './CardStatus.module.css'
function CardStatus({counter, title, icon}){
    return(
        <>
              {/* parent card */}
  <div className={`cardStatus d-flex align-items-center ${styles.cardStatus}` }>
        {/* Icon parent */}
      <div className={`icon w-100  d-flex align-items-center justify-content-center ${styles.icon}`}>
          <i className={icon}></i>
        </div>
         {/* info */}
         <div className={`info w-100 d-flex flex-column align-items-center gap-2 ${styles.info}`}>
          <span className={`counter ${styles.counter}`}>{counter}</span>
          <span className={`title ${styles.title}`}>{title}</span>
         </div>
      </div>
        </>
    )
}

export default CardStatus