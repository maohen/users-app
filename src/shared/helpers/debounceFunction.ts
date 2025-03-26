import deb from "lodash";

export const debounceFunction = deb.debounce((val: () => void) => {
    val();
}, 500)