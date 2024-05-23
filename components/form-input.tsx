interface ErrorProps {
  [key: string]: string[];
}

interface FormInputProps {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  errors: ErrorProps;
}

export default function FormInput({
  type,
  name,
  placeholder,
  required,
  errors,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="primary-input"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors[name]?.map((error, index) => (
        <span key={index} className="text-red-500 font-medium px-2">
          {error}
        </span>
      ))}

      {/* {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium px-2">
          {error}
        </span>
      ))} */}
    </div>
  );
}
