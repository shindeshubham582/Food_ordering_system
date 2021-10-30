import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react/cjs/react.development";
const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const AmountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = AmountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsAmountValid(false);
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form onSubmit = {submitHandler} className={classes.form}>
      <Input
        ref={AmountInputRef}
        label="Amount"
        input={{
          id: "Amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add </button>
      {!isAmountValid && <p>Please Enter Valid Amount</p>}
    </form>
  );
};

export default MealItemForm;
