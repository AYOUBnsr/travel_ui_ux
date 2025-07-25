import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean; // ✅ Add this line
};

const Button = ({ type, title, icon, variant, full = false }: ButtonProps) => {
    return (
        <button
            type={type}
            className={`flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''}`}
        >
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label className="bold-16 whitespace-nowrap">{title}</label>
        </button>
    );
};

export default Button;
