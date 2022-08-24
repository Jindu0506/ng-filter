export interface Filter{
    field: string;
    display_name: string;
    priority: number;
    type: Type;
    values?: value[];
    min_default?: number;
    max_default?: number;
    minValue?: number;
    maxValue?: number;
    options?: object;

}

export interface value{
    value: string;
    isChecked?: boolean;
}

export enum Type{
    "checkbox" = "checkbox",
    "radio" = "radio",
    "slider" = "slider",
    "date" = "date",
    "date-range" = "date-range"
}