import { Input } from "antd";
import { Controller, useController } from "react-hook-form";
export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  URL = "url",
  DATE = "date",
}
export interface ITextInputProps {
  type?: InputType;
  name: string;
  placeholder?: string;
  control: any;
  errorMsg?: string | null;
}
export function TextInput({
  type,
  name,
  placeholder,
  control,
  errorMsg,
}: ITextInputProps) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <>
              <Input
                {...field}
                type={type}
                status={errorMsg ? "error" : ""}
                placeholder={placeholder}
              />
              {errorMsg ? (
                <span className="text-sm text-red-400">{errorMsg}</span>
              ) : (
                ""
              )}
            </>
          );
        }}
      ></Controller>
    </>
  );
}

export function PasswordInput({
  name,
  placeholder,
  control,
  errorMsg,
}: ITextInputProps) {
  const { field } = useController({
    name: name,
    control: control,
  });
  return (
    <>
      <Input.Password
        {...field}
        placeholder={placeholder}
        status={errorMsg ? "error" : ""}
      />
      {errorMsg ? <span className="text-sm text-red-400">{errorMsg}</span> : ""}
    </>
  );
}
export interface ILabelText {
  htmlfor: string;
  label: string;
}

export function LabelText({ htmlfor, label }: ILabelText) {
  return (
    <>
      <label className="font-semibold" htmlFor={htmlfor}>
        {label}:
      </label>
    </>
  );
}
