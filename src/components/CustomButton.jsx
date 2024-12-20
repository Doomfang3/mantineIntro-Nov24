import classes from '../styles/CustomButton.module.css'

const CustomButton = ({ children }) => {
  return (
    <button type='button' className={classes.ctn}>
      <span className={classes.label}>{children}</span>
    </button>
  )
}

export default CustomButton
