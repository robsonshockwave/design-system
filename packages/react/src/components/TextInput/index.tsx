import { Input, Prefix, TextInputContainer } from './styles';
import { ComponentProps } from 'react';

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  );
};
