export type InputFieldProps = {
	label: string
	id: string
	name: string
	type?: string | undefined
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	value: string
}



export type RadioButtonProps = {
  id: string
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number | readonly string[] | undefined;
  checked: boolean
}
