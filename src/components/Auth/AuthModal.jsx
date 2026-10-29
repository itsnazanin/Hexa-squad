import { authModalConfig } from "@/core/constants/authModalConfig";
import { useAuthModal } from "./AuthModalContext";
import CloseIcon from "@/assets/icons/close-circle.svg"
import { useTranslation } from "react-i18next";

const AuthModal = ({ children , onSubmit , isLoading = false }) => {

    const { isOpen, closeAuthModal, step , switchStep } = useAuthModal()
    const { t , i18n } = useTranslation("auth")

    if (!isOpen) return null

    const config = authModalConfig[step]

    if (!config) return null

    const content = t(config.translateKey, {
        returnObjects: true
    })

    const handleFooterAction = () => {

        if(isLoading) return

        if(config.footerAction === "login") {
            switchStep("login")
        }

        else if(config.footerAction === "register") {
            switchStep("register")
        }

    }

    return (
        <div dir={i18n.dir()} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
             onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                closeAuthModal();
                }
            }}>
            <section className="flex flex-col gap-5 rounded-[24px] p-8 bg-white">
                <div className="flex items-center justify-between gap-[73px]">
                    <h1 className="text-[#263238] text-[32px] font-bold">{content.title}</h1>
                    <button onClick={closeAuthModal} disabled={isLoading} className="bg-[#F1F7FF] rounded-[16px] p-3">
                        <img src={CloseIcon} alt="close icon" />
                    </button>
                </div>

                <form onSubmit={onSubmit}>
                   {children} 

                    <div className="w-full flex justify-center mt-12">
                         <button type="submit" disabled={isLoading} className="bg-[#2196F3] rounded-[80px] text-white py-4 px-14">
                         {isLoading ? "در حال پردازش ..." : content.buttonText}
                         </button>
                    </div>
                  
                </form>
                

                {content.footerText && (
                    <div className="flex justify-center gap-2">
                        <p className="text-[#c8dee8] text-[14px]">{content.footerText}</p>
                        <button onClick={handleFooterAction} type="button" className="text-[#2196F3] underline text-[14px]">{content.footerAction}</button>
                    </div>
                )}
            </section>
        </div>
    )

}

export default AuthModal