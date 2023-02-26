import "./checkbox.styles.scss";

const CheckBox = (props) => {
  const { object, classInput, classLabel } = props;

  return (
    <>
      <input className={classInput} type="checkbox" id={object.id} />
      <label className={classLabel} htmlFor={object.htmlFor}>
        {object.label}
      </label>
    </>
  );
};

export default CheckBox;
