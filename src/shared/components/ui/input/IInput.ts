export interface IInput {
    type: string;
    placeholder: string;
    handleSearch?: (e:React.ChangeEvent<HTMLInputElement>)=> void;
} 