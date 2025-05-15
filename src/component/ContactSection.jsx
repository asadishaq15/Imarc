    import { Plus } from "lucide-react";
    import { SlEnergy } from "react-icons/sl";
    import { IoPersonOutline } from "react-icons/io5";

    

    // Define the ContactCard component with icon support
    const ContactCard = ({ title, content, iconType }) => {
        let Icon;

        // Determine which icon to use based on the title
        if (iconType === "phone") {
            Icon = Plus;
        } else if (iconType === "mail") {
            Icon = SlEnergy;
        } else if (iconType === "location") {
            Icon = IoPersonOutline;
        }

        return (
            <div className="contact-card group sm:px-6 lg:px-12 overflow-hidden p-4 lg:py-24 space-y-4 bg-white rounded-lg shadow-md text-center flex flex-col justify-center items-center relative">
                {/* Bubbles */}
                <div className="absolute lg:-right-6 lg:-top-6 lg:w-44 lg:h-44 bg-black/30 rounded-full opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-600 z-10"></div>
                <div className="absolute lg:-right-8 lg:top-12 lg:w-36 lg:h-36 bg-black/60 rounded-full opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-600 delay-150 z-10"></div>


                <div className="flex items-center gap-3 p-4">
                    {Icon && <Icon size={50} className="z-50 text-black group-hover:text-white transition-colors duration-300" />}
                </div>
                <h4 className="z-50 font-semibold lg:text-3xl text-xl text-[#223C8C] group-hover:text-white transition-colors duration-300">{title}</h4>
                <p className="z-50 text-black group-hover:text-white transition-colors duration-300">{content}</p>
            </div>
        );
    };

    // Main component with the cards
    const ContactSection = () => {
        return (
            <div className="space-y-8">
                {/* Islamabad Office */}
                <div className="space-y-4">
                    <h2 className="lg:text-6xl text-3xl font-bold text-gray-800 text-center">Our Services</h2>
                    <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
                        Comprehensive advertising solutions to amplify your brand’s reach.
                    </p>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                        <ContactCard title="Campaign Strategy" content="Data-driven strategies to boost your brand’s visibility." iconType="phone" />
                        <ContactCard title="Creative Design" content="Stunning visuals to captivate your audience." iconType="mail" />
                        <ContactCard title="Media Planning" content=">Strategic placements to maximize reach." iconType="location" />
                    </div>
                </div>
            </div>
        );
    };

    export default ContactSection;