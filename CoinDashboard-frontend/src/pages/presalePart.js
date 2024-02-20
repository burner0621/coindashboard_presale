import DescriptionPart from "../components/descriptionPart";
import PresaleCard from "../components/presaleCard";


import "./pages.css"


const PresalePart = () => {

    return (
        <div className="w-full display-flex justify-content-center align-items-center">
            <div className="px-4 flex flex-col lg:flex-row gap-[50px] lg:gap-[50px] xl:gap-[206px] items-center justify-center">
                <DescriptionPart></DescriptionPart>
                <PresaleCard></PresaleCard>
            </div>
        </div>
    );
}

export default PresalePart;