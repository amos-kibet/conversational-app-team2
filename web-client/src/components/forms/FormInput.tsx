import { useFormContext } from "react-hook-form";

type FormInputProps = {
  label: string;
  name: string;
  type?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
}) => {
  const {
    register,
    formState: {errors}
  } = useFormContext();
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className='font-semibold mt-3 text-lg mb-3'>
        {label}
      </label>
      <input type={type} placeholder="" className="h-12 w-auto border-2 border-orange-500 outline-none rounded-lg" {...register(name)} />
      {errors[name] && (
        <span className="text-red-500 text-xs pt-1 block">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default FormInput;
