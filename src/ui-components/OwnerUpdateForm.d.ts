/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Owner } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OwnerUpdateFormInputValues = {
    name?: string;
    email?: string;
};
export declare type OwnerUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OwnerUpdateFormOverridesProps = {
    OwnerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OwnerUpdateFormProps = React.PropsWithChildren<{
    overrides?: OwnerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    owner?: Owner;
    onSubmit?: (fields: OwnerUpdateFormInputValues) => OwnerUpdateFormInputValues;
    onSuccess?: (fields: OwnerUpdateFormInputValues) => void;
    onError?: (fields: OwnerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OwnerUpdateFormInputValues) => OwnerUpdateFormInputValues;
    onValidate?: OwnerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OwnerUpdateForm(props: OwnerUpdateFormProps): React.ReactElement;
