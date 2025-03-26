import { IIcon } from "./IIcon";

export const Icon = (props: IIcon) => {
  
    const {source, className} = props;

    return (
        <img src={source} alt='icon' className={className}/>
    )
}