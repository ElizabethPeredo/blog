import Link from "next/link";
import img from "../../../public/icon/BuyMeCoffee.png"
export default function BtnBuyMeCoffee({ post }) {
    return (
        <>
            <section className="container__medium flex-h-v">
                <a href="https://www.buymeacoffee.com/elizabethperedo" className="btn">
                    <span className="">
                        <img src="/icon/BuyMeCoffee.png" />
                    </span>
                    <span className="">BUY ME A COFFEE
                    </span>
                </a>
                <a href="https://www.paypal.com/donate/?hosted_button_id=LAC8X3WGSJDKY" className="btn">
                    <span className="">
                        <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-monotone-transparent.svg" />
                    </span>
                    <span className="">PAYPAL
                    </span>
                </a>
            </section>
        </>
    )
}