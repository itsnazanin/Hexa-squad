import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getDirection } from "../utils/direction";

const LanguageManager = () => {
    const { i18n } = useTranslation()

    useEffect(() => {
        const direction = getDirection(i18n.language)

        document.documentElement.lang = i18n.language
        document.documentElement.dir = direction
    },[i18n.language])

    return null
}

export default LanguageManager
