import { ILayout } from "./ILayout"
import style from "./HomeLayout.module.scss"

const HomeLayout = (props: ILayout) => {

    const {children} = props;

    return (
        <div className={style.layout}>
            {children}
        </div>
    )
}

export default HomeLayout