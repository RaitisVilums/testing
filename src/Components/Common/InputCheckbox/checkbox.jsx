const CheckBox = (props) => {
  const { object, classInput, classLabel, name, type } = props;

  return (
    <>
      <input className={classInput} type={type} id={object.id} name={name} />
      <label className={classLabel} htmlFor={object.htmlFor}>
        {object.label}
      </label>
    </>
  );
};

export default CheckBox;
