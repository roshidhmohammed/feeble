const Button = ({ text, icon, classname = "", ...props }) => {
  return (
    <button
      className={`flex flex-row justify-center items-center px-5 py-3 gap-[6.98px]  rounded-[43.62px] font-medium text-[16px] leading-[120%] tracking-[-0.02em] cursor-pointer  transition-colors ${classname}`}
      {...props}
    >
      {icon !== undefined && (
        <div className=" flex gap-[12.57px] mr-[12.57px]">
          <img src={icon} alt="" />
          <span className="">|</span>
        </div>
      )}
      {text}
    </button>
  );
};

export default Button;
