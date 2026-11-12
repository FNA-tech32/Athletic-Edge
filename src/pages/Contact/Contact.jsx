import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import { useForm } from "react-hook-form";
import Icon from "../../components/Buttons/Icon";
import { useSendMessageMutation } from "../../redux/api/Contact/ContactApi";
import toast from "react-hot-toast";
import { BRAND_INFO } from "../../config/brandConfig";

const Contact = () => {
  const inputStyle =
    "w-full outline-none pl-[18px] bg-white border border-borderColor text-[16px] my-4";

  // Send Message by Redux Hook
  const [sendMessage] = useSendMessageMutation();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const res = await sendMessage(data);
    if (res) {
      toast.success("Message sent successfully");
      reset();
    }
  };

  return (
    <div>
      <PageHeading content="Contact Us"></PageHeading>
      <div className="mx-4 my-10 md:my-20 md:flex ">
        <div className="md:w-2/3 md:mx-4 ">
          <h2 className="text-large text-blue font-medium">Get In Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-[600px]">
            <textarea
              className={inputStyle}
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="7"
              maxLength="200"
              {...register("message", { required: true })}
            ></textarea>

            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className={`h-[48px]  ${inputStyle}`}
              {...register("email", { required: true })}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Name"
              className={`h-[48px]  ${inputStyle}`}
              {...register("name", { required: true })}
            />
            <button
              type="submit"
              className="px-10 py-4 my-4 text-main text-lg border border-main hover:text-white hover:bg-main uppercase font-light transition duration-300"
              style={{ fontFamily: "'Teko', sans-serif" }}
            >
              <span className="mx-4">SEND MESSAGE</span>
              <Icon IconName="fa-solid fa-paper-plane" size="xl" />
            </button>
          </form>
        </div>
        <div className="my-4 md:w-1/3 md:mx-4 divide-y divide-borderColor">
          {/* Main Address */}
          <div className="flex items-start py-4">
            <div className="mt-2">
              <Icon IconName="fa-solid fa-location-dot" color="gray" size="xl" />
            </div>
            <div className="leading-snug mx-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-main">Main Facility</span>
              <h3 className="text-xl font-medium">{BRAND_INFO.contact.address.street}</h3>
              <p className="text-[#8a8a8a]">{BRAND_INFO.contact.address.cityStateZip}</p>
            </div>
          </div>

          {/* Primary Phone */}
          <div className="flex items-start py-4">
            <div className="mt-2">
              <Icon IconName="fa-solid fa-phone" color="gray" size="xl" />
            </div>
            <div className="leading-snug mx-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-main">Primary Phone</span>
              <h3 className="text-xl font-medium">{BRAND_INFO.contact.phone.primary}</h3>
              <p className="text-[#8a8a8a]">{BRAND_INFO.contact.phone.primaryHours}</p>
            </div>
          </div>

          {/* Alternative Phone */}
          <div className="flex items-start py-4">
            <div className="mt-2">
              <Icon IconName="fa-solid fa-headset" color="gray" size="xl" />
            </div>
            <div className="leading-snug mx-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-main">Alternative Phone & Helpline</span>
              <h3 className="text-xl font-medium text-main">{BRAND_INFO.contact.phone.alternative}</h3>
              <p className="text-[#8a8a8a]">{BRAND_INFO.contact.phone.alternativeHours}</p>
            </div>
          </div>

          {/* Primary Email */}
          <div className="flex items-start py-4">
            <div className="mt-2">
              <Icon IconName="fa-solid fa-envelope" color="gray" size="xl" />
            </div>
            <div className="leading-snug mx-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-main">Primary Email</span>
              <h3 className="text-xl font-medium">{BRAND_INFO.contact.email.primary}</h3>
              <p className="text-[#8a8a8a]">{BRAND_INFO.contact.email.primarySub}</p>
            </div>
          </div>

          {/* Alternative Email */}
          <div className="flex items-start py-4">
            <div className="mt-2">
              <Icon IconName="fa-solid fa-envelope-open-text" color="gray" size="xl" />
            </div>
            <div className="leading-snug mx-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-main">Alternative Support Email</span>
              <h3 className="text-xl font-medium text-main">{BRAND_INFO.contact.email.alternative}</h3>
              <p className="text-[#8a8a8a]">{BRAND_INFO.contact.email.alternativeSub}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;